import multer from 'multer';
import { verifyJWT } from '../../middlewares/verify-jwt';
import { Router } from 'express';
import { create } from './create';
import { list } from './list';
import { find } from './find';
import { deletePdf } from './delete';

const storage = multer.memoryStorage();
const upload = multer({
    storage
})

export const pdfRoutes = Router();

pdfRoutes.post('/', verifyJWT, upload.single('pdf'), create);
pdfRoutes.get('/', verifyJWT, list);
pdfRoutes.get('/:id', verifyJWT, find);
pdfRoutes.delete('/:id', verifyJWT, deletePdf);