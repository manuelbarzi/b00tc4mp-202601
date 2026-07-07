const express = require("express")

const server = express()

const cars = [
    {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020
    },
    {
        brand: 'Honda',
        model: 'Civic',
        year: 2019  
    },
    {
        brand: 'Nissan',
        model: 'Altima',
        year: 2020
    },
    {
        brand: 'Chevrolet',
        model: 'Malibu',
        year: 2021
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2021
    },
    {
        brand: 'BMW',
        model: 'X5',
        year: 2022
    }
]

// server.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })

// path parameter (deterministic)

server.get('/hello/:to', (req, res) => {
    res.send(`Hello ${req.params.to}!`)
})

// query parameter (non-deterministic)

server.get('/hello', (req, res) => {
    res.send(`Hello ${req.query.to}!`)
})

// TODO use query parameters to filter the cars by brand, model, and/or year. For example, /cars?brand=Toyota&year=2020 should return only the Toyota cars from 2020.
server.get('/cars', (req, res) => {
    res.json(cars)
})

// TODO
// server.get('/cars/:brand', (req, res) => {
// })

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})