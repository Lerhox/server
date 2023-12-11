import { Request, Response } from 'express';
import MetPago from '../models/met_pago';

export const getMet_pago = async (req: Request, res: Response) => {
    const listMetPago = await MetPago.findAll();

    res.json(listMetPago)
}
