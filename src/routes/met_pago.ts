import { Router } from 'express';
import { getMet_pago } from '../controllers/met_pago.controller';

const router = Router();

router.get('/', getMet_pago);

export default router;
