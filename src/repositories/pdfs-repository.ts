import { Pdf, Prisma } from '@prisma/client';

interface ListResponse {
    id: string;
    name: string;  
}

export interface PDFRepository {
    create(data: Prisma.PdfCreateInput): Promise<Pdf>
    list(userId: string): Promise<ListResponse[]>
    find(id: string, userId: string): Promise<Pdf | null>
    delete(id: string, userId: string): Promise<Pdf | null>
}