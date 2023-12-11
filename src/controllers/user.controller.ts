import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import Roles from '../models/roles';
import TypeUser from '../models/type_user';

export const newUser = async (req: Request, res: Response) => {

    //agregando esto se cambia "body: req.body" por simplemente "body" en la linea 10
    const { username, password, idrole, idtypeuser } = req.body;


    // validamos si el usuario ya existe en la bdd

    const user = await User.findOne({ where: { username: username } });

    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre "${ username }"`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)

    try {
        await User.create({
            username: username,
            password: hashedPassword,
            idrole: idrole,
            idtypeuser: idtypeuser
        })
        res.json({
            msg: `Nuevo Usuario: ${username}`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ups ocurrio un error',
            error
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {

    const { username, password, idrole, typeuser } = req.body;

    // validamos si el usuario existe en la base de datos

    const user: any = await User.findOne({ where: { username: username }})

    if (!user) {
        return res.status(400).json({
            msg: `el usuario ${ username } no existe`
        })
    }

    // validamos password

    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password incorrecta`
        })
    }

    // generamos el token

    const token = jwt.sign({
        username: username,
        idrole: user.idrole
    }, process.env.SECRET_KEY || '123123')
console.log(token)
    res.json(token)

}

export const getUser = async (req: Request, res: Response) => {
    const listUser = await User.findAll({
        include: [{
            model: Roles,
            attributes: ['role_name']
        },
        {
            model: TypeUser,
            attributes: ['typeusername']
        }
    ],
    });

    res.json(listUser)
}

export const getUserNameById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id; // Asumiendo que el ID del usuario está en los parámetros de la solicitud
      const user: any = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      const userName = user.username;
      res.json({ userName });
    } catch (error) {
      console.error('Error al obtener el nombre del usuario por ID', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
