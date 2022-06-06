const adicao = require('../calcs/adicao')
const tensaoNormal = require('../calcs/tensaoNormal')
const tensaoCis = require('../calcs/tensaoCis')
const tensaoMax = require('../calcs/tensaoMax')
const momentoFletor = require('../calcs/momentoFletor')
const momentoTorsor = require('../calcs/momentoTorsor')
const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({"Hello":"World"})
})

routes.post('/adicao', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    const result = adicao(body.n1,body.n2)
    return res.json({result})
})


routes.post('/tensaoNormal', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    const result = tensaoNormal(body.N,body.A)
    const formula = "σ = N/A"
    const obj = {result, formula}
    return res.json({result})
})

routes.post('/tensaoMax', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    const result = tensaoMax(body.M,body.y,body.I)
    const formula = "σ = (-M*y)/I"
    const obj = {result, formula}
    return res.json({result})
})

routes.post('/tensaoCis', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    const result = tensaoCis(body.V,body.Q,body.I,body.t)
    const formula = "τ = (V*Q)/(I*t)"
    const obj = {result, formula}
    return res.json({result})
})

routes.post('/momentoFletor', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    const result = momentoFletor(body.S1,body.S2,body.Q,body.dS1,body.dS2,body.dQ)
    const formula = ""
    const obj = {result, formula}
    return res.json({result})
})

routes.post('/momentoTorsor', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    const result = momentoTorsor(body.T, body.c, body.J)
    const formula = "Tmax = (T*C)/J "
    const obj = {result, formula}
    return res.json({result})
})

module.exports = routes