// import your server
const server = require('./server');
// setup your dynamic port
const PORT = process.env.PORT || 5000;
// start the server 
server.listen(PORT, () => {
    console.log(`***LISTENING ON PORT ${PORT}***`)
})