const http = require ('http')   //modulo nativo do node

http.createServer( //criar servidor
    (req,res)=> {                   // arrow function
        res.end("Servidor funcionando") 
    }).listen(3000, 'localhost' , ()=> console.log ('servidor esta rodando tudo ok......'))   //escutar a porta 3000 do localhost
