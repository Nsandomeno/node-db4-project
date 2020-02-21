// import express
const express = require('express');
// import routers 
const RecipeRouter = require('./api/recipeRouter.js')
// create server 
const server = express();

// Global Middleware
server.use(express.json())
// Introduce your routes
server.use('/api/recipes', RecipeRouter)
// export
module.exports = server // exporting to index.js