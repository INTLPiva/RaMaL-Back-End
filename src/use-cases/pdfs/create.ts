import { Pdf } from '@prisma/client';

import { PDFRepository } from '../../repositories/pdfs-repository';

interface CreatePDFUseCaseRequest {
    originalname: string;
    data: Buffer;
    userId: string;
}

interface CreatePDFUseCaseResponse {
    pdf: Pdf;
}

export class CreatePDFUseCase {
    constructor(private pdfsRepository: PDFRepository) {}

    async execute({
        originalname, 
        data,
        userId
    }: CreatePDFUseCaseRequest): Promise<CreatePDFUseCaseResponse> {

        const pdf = await this.pdfsRepository.create({
            name: originalname,
            data: data,
            userId
        });

        return {
            pdf
        }
    }
}