
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const tabelas  = require('./infraestrutura/tabelas')

conexao.connect((erro)=>{
    if (erro) {
        console.log(erro)
    } else {
        console.log('conctado com sucesso')
        
        tabelas.init(conexao)
        
        const app = customExpress() 
        app.listen(3000,()=>console.log('Servidor rodando na porta 3000'))
    }
})


//app.get('/atendimentos',(req,res)=>res.send('Você esta na rota de atendimentos e esta realizando um GET'))