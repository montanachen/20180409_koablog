// page : 95
function makeIterator ( array ){
    var nextIndex = 0;
    return{
        next : function (){
            return nextIndex < array.length ?
            {value : array [nextIndex ++],done : false}:
            {value : undefined, done : true};
        }
    }
}
var it = makeIterator([ 'a' , 'b' ]);

// console.log ( it.next().value )   && a
// console.log ( it.next().value )   && b
//  Why Result is different ? 
console.log ( it.next().value + '   ' + it.next().done)  // &&  a  false
console.log ( it.next().value + '   ' + it.next().done)  // undefined   true
// skip b ??
