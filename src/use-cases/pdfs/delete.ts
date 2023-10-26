import { Pdf } from '@prisma/client';

import { PDFRepository } from '../../repositories/pdfs-repository';

interface DeletePDFUseCaseResponse {
    pdf: Pdf | null
}

export class DeletePDFUseCase {
    constructor(private pdfsRepository: PDFRepository) {}

    async execute(id: string, userId: string): Promise<DeletePDFUseCaseResponse> {

        const pdf = await this.pdfsRepository.delete(id, userId);

        return {
            pdf
        }
    }
}