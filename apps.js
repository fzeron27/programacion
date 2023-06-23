const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
res.send("Bienvenido");
});

app.listen(port, function () {
console.log(`Puerto ${port}!`);
}); //hasta aqui el servidor

//aqui comienza la conexion a base de datos
var Connection = require('tedious').Connection;  
    var config = {  
        server: 'DESKTOP-HG7D92R\SQLEXPRESS',  
        authentication: {
            type: 'default',
            options: {
                userName: 'Frank', 
                password: 'Frank'  
            }
        },
        options: {
            
            encrypt: true,
            database: 'ventas'  
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {
        console.log("Ingreso");  
    });
    
    connection.connect();