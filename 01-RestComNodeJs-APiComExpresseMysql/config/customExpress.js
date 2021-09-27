const express = require('express')
const consign = require('consign')

module.exports = ()=> {
    
    const app = express()
    
    // Paea  realizar o body parser
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

    consign()
        .include('controllers')
        .into(app)
    return app
}