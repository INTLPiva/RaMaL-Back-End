import { Request, Response } from "express";
import { makeFindPdfUseCase } from "../../../use-cases/factories/pdfs/makeFindPdfUseCase";
import { getDocument } from "pdfjs-dist";

export async function find(req: Request, res: Response) {
  const { id } = req.params;
  const findPdfUseCase = makeFindPdfUseCase();
  const userId = req.user.id;

  try {
    const response = await findPdfUseCase.execute(id, userId);

    if (response.pdf) {
      try {
        const uint8Array = new Uint8Array(response.pdf.data);
        const pdfDocument = await getDocument(uint8Array).promise;
        const numPages = pdfDocument.numPages;
        const textPromises = [];

        for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
          textPromises.push(
            pdfDocument.getPage(pageNumber).then((page) => {
              return page.getTextContent().then((textContent) => {
                let text = "";
                textContent.items.forEach((item) => {
                  text += item.str + " ";
                });
                return text;
              });
            })
          );
        }

        Promise.all(textPromises).then((pageTexts) => {
          res.send(pageTexts);
        });
      } catch (error) {
        res.status(500).send("Ocorreu um erro ao extrair texto do PDF.");
      }
    } else {
      res.status(404).send("PDF not found");
    }
  } catch (error) {
    return res.status(400).send();
  }
}
