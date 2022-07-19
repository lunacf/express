// const bodyParser = require("body-parser");
//33 58 26c
const express = require("express");


const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];
let identificador = 0;

const server = express();
express.Router();

// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
server.post("/posts", (req,res,next) =>{

    //agarrar los datos y validar el body(token user, hash, contraseña, etc)
    const { post } = req.body;

    if(!post.title || !post.author || !post.contents) {
        return res.status(STATUS_USER_ERROR).json({
            error: "No se recibieron los parámetros necesarios para crear el Post",

        })
    }

    // si existe, intento hacer algo
try {
    //nos comunicamos con la db, el array en este caso
    post.id = ++identificador;
    posts.push(post);
    posts.status(200).json(post);

    return res.json()
} catch (error){
    console.log(error)
}
    //intentar (try,catch) hacer una logica manejando los errores luego de tener los datos bien piola
})
// server.get()
// server.put()
// server.delete()

module.exports = { posts, server };
