const atendimento = require('../models/atendimento')
const { buscarPorID } = require('../models/atendimento')
const Atendimento = require('../models/atendimento')

module.exports = app=>{
    app.get('/atendimentos',(req,res)=>{
        
        Atendimento.lista(res)
    })
    
    app.get('/atendimentos/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        buscarPorID(id,res)
    })
    
    app.post('/atendimentos',(req,res)=>{
        
        const atendimento = req.body

         Atendimento.adiciona(atendimento,res)

    })

    app.patch('/atendimentos/:id',(req,res)=>{
       
        const id = parseInt(req.params.id)
        const valores = req.body
        
        Atendimento.altera(id,valores,res)
    })

    app.delete('/atendimentos/:id',(req,res)=>{

        const id = parseInt(req.params.id)
        atendimento.deleta(id,res)
    })
}