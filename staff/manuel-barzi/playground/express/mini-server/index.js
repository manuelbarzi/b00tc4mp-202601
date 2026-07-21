const express = require('express')
const fs = require('fs')

const server = express()

const jsonBodyParser = express.json()

server.get('/cars', (req, res) => {
    const brand = req.query.brand
    const model = req.query.model
    const year = Number(req.query.year)

    fs.readFile('cars.json', 'utf8', (error, json) => {
        if (error)
            return res.status(500).json({ success: false, message: 'Error reading cars file' })

        const cars = JSON.parse(json)

        let filteredCars = cars

        if (brand) {
            filteredCars = filteredCars.filter(car => car.brand === brand)
        }

        if (model) {
            filteredCars = filteredCars.filter(car => car.model === model)
        }

        if (year) {
            filteredCars = filteredCars.filter(car => car.year === year)
        }

        res.json(filteredCars)
    })
})

server.post('/cars', jsonBodyParser, (req, res) => {
    const newCar = req.body

    newCar.id = cars.length + 1

    cars.push(newCar)

    res.status(201).json({ sucess: true, message: 'Car created successfully', carId: newCar.id })
})

server.get('/cars/:carId', (req, res) => {
    const carId = Number(req.params.carId)

    const car = cars.find(car => car.id === carId)

    if (!car) {
        return res.status(404).json({ success: false, message: 'Car not found' })
    }

    res.status(200).json({ success: true, car })
})

server.patch('/cars/:carId', jsonBodyParser, (req, res) => {
    const carId = Number(req.params.carId)
    const updates = req.body

    const carIndex = cars.findIndex(car => car.id === carId)

    if (carIndex === -1) {
        return res.status(404).json({ success: false, message: 'Car not found' })
    }

    // Update the car with new properties
    cars[carIndex] = { ...cars[carIndex], ...updates }

    res.status(204).json({ success: true, message: 'Car updated successfully', car: cars[carIndex] })
})

server.delete('/cars/:carId', (req, res) => {
    const carId = Number(req.params.carId)

    const carIndex = cars.findIndex(car => car.id === carId)

    if (carIndex === -1) {
        return res.status(404).json({ success: false, message: 'Car not found' })
    }

    // Remove the car from array
    const deletedCar = cars.splice(carIndex, 1)[0]

    res.status(200).json({ success: true, message: 'Car deleted successfully', car: deletedCar })
})


server.listen(3000, () => {
    console.log('Server is running on port 3000')
})