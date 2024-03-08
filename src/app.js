const envs = require('./config/env');
const startServer = require('./server/server');
const main = ()=>{
    startServer({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    });
}

// Funcion Agnostica autoejecutable
// Se hace asi para que sea asincrona y se pueda usar await
(async ()=>{main()})();

