import { Pdf } from '@prisma/client';

import { PDFRepository } from '../../repositories/pdfs-repository';


interface ListResponse {
    id: string;
    name: string;   
}

interface ListPDFUseCaseResponse {
    pdfs: ListResponse[];
}

export class ListPDFUseCase {
    constructor(private pdfsRepository: PDFRepository) {}

    async execute(userId: string): Promise<ListPDFUseCaseResponse> {

        const pdfs = await this.pdfsRepository.list(userId);

        return {
            pdfs
        }
    }
}