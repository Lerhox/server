"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserNameById = exports.getUser = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const roles_1 = __importDefault(require("../models/roles"));
const type_user_1 = __importDefault(require("../models/type_user"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //agregando esto se cambia "body: req.body" por simplemente "body" en la linea 10
    const { username, password, idrole, idtypeuser } = req.body;
    // validamos si el usuario ya existe en la bdd
    const user = yield user_1.default.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre "${username}"`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    console.log(hashedPassword);
    try {
        yield user_1.default.create({
            username: username,
            password: hashedPassword,
            idrole: idrole,
            idtypeuser: idtypeuser
        });
        res.json({
            msg: `Nuevo Usuario: ${username}`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ups ocurrio un error',
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, idrole, typeuser } = req.body;
    // validamos si el usuario existe en la base de datos
    const user = yield user_1.default.findOne({ where: { username: username } });
    if (!user) {
        return res.status(400).json({
            msg: `el usuario ${username} no existe`
        });
    }
    // validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password incorrecta`
        });
    }
    // generamos el token
    const token = jsonwebtoken_1.default.sign({
        username: username,
        idrole: user.idrole
    }, process.env.SECRET_KEY || '123123');
    console.log(token);
    res.json(token);
});
exports.loginUser = loginUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUser = yield user_1.default.findAll({
        include: [{
                model: roles_1.default,
                attributes: ['role_name']
            },
            {
                model: type_user_1.default,
                attributes: ['typeusername']
            }
        ],
    });
    res.json(listUser);
});
exports.getUser = getUser;
const getUserNameById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id; // Asumiendo que el ID del usuario está en los parámetros de la solicitud
        const user = yield user_1.default.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const userName = user.username;
        res.json({ userName });
    }
    catch (error) {
        console.error('Error al obtener el nombre del usuario por ID', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.getUserNameById = getUserNameById;
