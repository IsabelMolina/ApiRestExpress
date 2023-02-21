const express = require('express');
const Pet = require('../models/Pet');

const router = express.Router();

router.get('/', async(req, res)=>{

    const mascotas = await Pet.find();

    res.json(mascotas);

})

router.get('/:id', async(req, res)=>{

    const id = req.params.id;

    try {
        const mascota = await Pet.findOne({_id: id});
        return res.json(mascota);
    } 
    catch (error) {        
        return res.sendStatus(404);
    }         

})

router.post('/', async(req, res)=>{

    const body = req.body;

    if(!body.name || !body.description){
        return req.sendStatus(422);
    }

    await Pet.create(body);

    return res.sendStatus(201);  

})

router.put('/:id', async(req, res)=>{

    const id = req.params.id;
    const body = req.body;

    if(!body.description || !body.name){
        return res.sendStatus(422);
    }
    
    try {
        await Pet.findByIdAndUpdate(id, body);
        return res.sendStatus(200);
    } 
    catch (error) {
        return res.sendStatus(404)
    }
            
})

router.delete('/:id', async(req, res)=>{

    const id = req.params.id;

    try {        

        await Pet.findByIdAndDelete({ _id: id });
        return res.sendStatus(204);

    } catch (error) {
        return res.sendStatus(404);
    }    

})

module.exports = router;
