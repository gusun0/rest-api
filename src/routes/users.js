const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');



router.get('/', async (req,res) => {
    // es una petición asincrona, por la tanto usamos async await
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // la respuesta conviertela a un json
    const users = await response.json(); 
    res.json(users);

});

module.exports = router;
