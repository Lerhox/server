import { Router } from "express";
import { getUser, getUserNameById, loginUser, newUser } from '../controllers/user.controller'

const router = Router();

router.post('/', newUser);
router.post('/login', loginUser);
router.get('/mostrar', getUser);
router.get('/users/:id/name', getUserNameById);

export default router;