import { Request, Response } from 'express';
import Servicio from '../models/servicio';

export const getServices = async (req: Request, res: Response) => {
    const listServices = await Servicio.findAll();

    res.json(listServices)
}