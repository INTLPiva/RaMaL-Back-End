import { PrismaPDFsRepository } from '../../../repositories/prisma/prisma-pdfs-repository';
import { ListPDFUseCase } from '../../pdfs/list';

export function makeListPdfUseCase() {
    const pdfsRepository = new PrismaPDFsRepository();
    const listPDFUseCase = new ListPDFUseCase(pdfsRepository);

    return listPDFUseCase;
}