import { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { PDFRepository } from '../pdfs-repository';

export class PrismaPDFsRepository implements PDFRepository {
    async create(data: Prisma.PdfCreateInput) {
        const pdf = await prisma.pdf.create({
            data
        })

        return pdf;
    }

    async list(userId: string) {
        const pdfs = await prisma.pdf.findMany({
            select: {
                id: true,
                name: true,
                userId: true
            },
            where: {
                userId
            }
        })

        return pdfs;
    }

    async find(id: string, userId: string) {
        const pdf = await prisma.pdf.findUnique({
            where: {
                id,
                userId
            }
        })

        return pdf;
    }

    async delete(id: string, userId: string) {
        const pdf = await prisma.pdf.delete({
            where: {
                id,
                userId
            }
        })

        return pdf;
    }
}