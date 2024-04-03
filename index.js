//servidor básico

// const http = require ('http')   //modulo nativo do node

// http.createServer( //criar servidor
//     (req,res)=> {                   // arrow function
//         res.end("Servidor funcionando") 
//     }).listen(3000, 'localhost' , ()=> console.log ('servidor esta rodando tudo ok......'))   //escutar a porta 3000 do localhost


// servidor incrementado //



const http = require ('http')   //modulo nativo do node

http.createServer( //criar servidor
    (req,res)=> {                   // arrow function
        res.writeHead(200, {           //passa um codigo de status writehead (200) quando da certo
            'Content-Type' : 'text/html; charset=utf-8' // vou te passar um conteudo do tipo  texto em html
        })            
        res.end("<h1>Servidor funcionando</h1>") 
    }).listen(3000, 'localhost' , ()=> console.log ('servidor esta rodando tudo ok......')) 