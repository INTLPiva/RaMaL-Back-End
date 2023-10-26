import { Pdf } from '@prisma/client';

import { PDFRepository } from '../../repositories/pdfs-repository';

interface FindPDFUseCaseResponse {
    pdf: Pdf | null
}

export class FindPDFUseCase {
    constructor(private pdfsRepository: PDFRepository) {}

    async execute(id: string, userId: string): Promise<FindPDFUseCaseResponse> {

        const pdf = await this.pdfsRepository.find(id, userId);

        return {
            pdf
        }
    }
}