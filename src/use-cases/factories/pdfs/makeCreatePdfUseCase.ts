import { PrismaPDFsRepository } from '../../../repositories/prisma/prisma-pdfs-repository';
import { CreatePDFUseCase } from '../../pdfs/create';

export function makeCreatePdfUseCase() {
    const pdfsRepository = new PrismaPDFsRepository();
    const createPDFUseCase = new CreatePDFUseCase(pdfsRepository);

    return createPDFUseCase;
}