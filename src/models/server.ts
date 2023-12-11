import express, { Application } from 'express';
import cors from 'cors';
import sequelize from '../db/connection';
// rutas 
import routesProducts from '../routes/product';
import routesUsers from '../routes/user';
import routesMetPago from '../routes/met_pago';

// models
import Product from './product';
import User from './user';
import Roles from "./roles";
import TypeUser from "./type_user";
import Cliente from './cliente';
import TypeDocument from './type_document';
import Servicio from './servicio';
import MetPago from './met_pago';
import Proveedor from './proveedor';
import Compra from './compra';
import Venta from './venta';
import DetalleCompra from './detalle_compra';
import DetalleVenta from './detalle_venta';

sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada');
}).catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
});

class Server {
    private app: Application;
    private port: string; 
    constructor () {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen () {
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en el puerto: '+ this.port );
        })
    }

    routes() {
        this.app.use('/api/products', routesProducts);
        this.app.use('/api/users', routesUsers);
        this.app.use('/api/met_pago', routesMetPago);
    }

    midlewares() {
        // parceo body
        this.app.use(express.json());

        // cors
        this.app.use(cors())
    }

    async dbConnect(){
        try {
            await TypeUser.sync();
            await TypeDocument.sync();
            await Servicio.sync();
            await MetPago.sync();
            await Proveedor.sync();
            await Cliente.sync();
            await Compra.sync();
            await Venta.sync();
            await Roles.sync();
            await Product.sync();
            await User.sync();
            await Cliente.sync();
            await DetalleCompra.sync();
            await DetalleVenta.sync();
            console.log('successfully')
        } catch (error) {
            console.error('failed', error)
        }
    }

}

export default Server;