import express from 'express';
import { listProducts, singleProduct, bulkInsertProducts } from '../controllers/productController.js';


const productRouter = express.Router();

productRouter.post('/single', singleProduct);


productRouter.get('/list', listProducts);

productRouter.post('/bulk-insert', bulkInsertProducts);

export default productRouter;





