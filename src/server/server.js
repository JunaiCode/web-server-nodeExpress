
// Import the express library
const express = require('express');
// Import the path library
const path = require('path');

const startServer = options=>{
    // Extract the port and publicPath from the options object
    const {port, publicPath='public'} = options;
    // Create a new express application
    const app = express();
    // Serve the static files from the publicPath directory
    app.use(express.static(path.resolve(publicPath)));
    // Serve the application with / as the root
    app.get('/', (req, res)=>{
        const indexPath = path.join(__dirname + `../../../${publicPath}/index.html`);
        // Respond with the index.html file
        res.sendFile(indexPath);
    });

    app.get('/api', (req, res)=>{
        res.json({message: 'Hello, World!'});
    });

    // Start the server on the specified port
    app.listen(port, ()=>{
        console.log(`Server started on http://localhost:${port}`);
    });
}

module.exports = startServer;