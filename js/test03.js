// page : 96
function IdMaker(){
    var index = 0
    return {
        next :function(){
            return {value : index++, done : false};
        }
    }
}

var it = IdMaker ();

//console.log(it.next().value)
//console.log(it.next().value)
//console.log(it.next().value)
//console.log(it.next().value)



for (var n of it){
    if (n > 5)
        break ;
    console.log(n);
}
