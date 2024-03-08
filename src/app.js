//const envs = require('./config/env');
import {envs} from './config/env.js';
//const startServer = require('./server/server');
import {startServer} from './server/server.js';
const main = ()=>{
    startServer({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    });
}

// Funcion Agnostica autoejecutable
// Se hace asi para que sea asincrona y se pueda usar await
(async ()=>{main()})();

