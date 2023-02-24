// var i=10;

// function show(){
//     var j=20;
//     console.log("value of i "+i);
//     console.log("value of j "+j);
// }

// show();

// -----------------------------
// clousure another example

function show(){
    var j="J is local variable of outer function";
    console.log(j)
console.log("k is inner variable canot access here"+k)
    function innerFun(){
        var k="K is local variable of inner function"
        console.log(k)
        console.log("j is access in inner function"+j)

    }
    innerFun();
}

show();