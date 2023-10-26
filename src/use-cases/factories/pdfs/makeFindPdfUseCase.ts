import { PrismaPDFsRepository } from '../../../repositories/prisma/prisma-pdfs-repository';
import { FindPDFUseCase } from '../../pdfs/find';

export function makeFindPdfUseCase() {
    const pdfsRepository = new PrismaPDFsRepository();
    const findPDFUseCase = new FindPDFUseCase(pdfsRepository);

    return findPDFUseCase;
}