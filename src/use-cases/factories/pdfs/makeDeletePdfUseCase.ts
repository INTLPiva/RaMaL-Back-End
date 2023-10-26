import { PrismaPDFsRepository } from '../../../repositories/prisma/prisma-pdfs-repository';
import { DeletePDFUseCase } from '../../pdfs/delete';

export function makeDeletePdfUseCase() {
    const pdfsRepository = new PrismaPDFsRepository();
    const deletePDFUseCase = new DeletePDFUseCase(pdfsRepository);

    return deletePDFUseCase;
}