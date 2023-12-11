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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
// rutas 
const product_1 = __importDefault(require("../routes/product"));
const user_1 = __importDefault(require("../routes/user"));
const met_pago_1 = __importDefault(require("../routes/met_pago"));
// models
const product_2 = __importDefault(require("./product"));
const user_2 = __importDefault(require("./user"));
const roles_1 = __importDefault(require("./roles"));
const type_user_1 = __importDefault(require("./type_user"));
const cliente_1 = __importDefault(require("./cliente"));
const type_document_1 = __importDefault(require("./type_document"));
const servicio_1 = __importDefault(require("./servicio"));
const met_pago_2 = __importDefault(require("./met_pago"));
const proveedor_1 = __importDefault(require("./proveedor"));
const compra_1 = __importDefault(require("./compra"));
const venta_1 = __importDefault(require("./venta"));
const detalle_compra_1 = __importDefault(require("./detalle_compra"));
const detalle_venta_1 = __importDefault(require("./detalle_venta"));
connection_1.default.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada');
}).catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
});
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto: ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/products', product_1.default);
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/met_pago', met_pago_1.default);
    }
    midlewares() {
        // parceo body
        this.app.use(express_1.default.json());
        // cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield type_user_1.default.sync();
                yield type_document_1.default.sync();
                yield servicio_1.default.sync();
                yield met_pago_2.default.sync();
                yield proveedor_1.default.sync();
                yield cliente_1.default.sync();
                yield compra_1.default.sync();
                yield venta_1.default.sync();
                yield roles_1.default.sync();
                yield product_2.default.sync();
                yield user_2.default.sync();
                yield cliente_1.default.sync();
                yield detalle_compra_1.default.sync();
                yield detalle_venta_1.default.sync();
                console.log('successfully');
            }
            catch (error) {
                console.error('failed', error);
            }
        });
    }
}
exports.default = Server;
