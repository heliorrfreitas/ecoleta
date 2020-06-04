import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
    const {
        name, 
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    await knex('points').insert({
        image: 'image-fake',
        name, 
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
    });

    return response.json({sucess: true});
})

export default routes; 

/*
{
    "name": "Test 1", 
    "email": "Test1@email.com",
    "whatsapp": "1234556666",
    "latitude":  -46.44123445,
    "longitude": 96.49404940,
    "city": "Sorocaba",
    "uf": "SP",
    items: [
        1,
        2,
        3
    ]
}

*/