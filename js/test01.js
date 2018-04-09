var fs = require( 'fs')

function test (err , data){
    if (err){
        console.log(err);
        return ;
        }
    console.log ( data.toString());
    }

fs.readFile( './hello.js' , test )