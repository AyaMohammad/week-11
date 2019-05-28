var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

// optellen 
function optellen() {
    document.write( "<h2>optellen van de twee arrays zijn:</h2>" )
    for(var i = 0; i <= 9; i++){
        var uitkomst = arrayEen[i] + arrayTwee[i];
        document.write( arrayEen[i] + " + " + arrayTwee[i] + " = " + uitkomst + "<br>" );
    }  
}
optellen();


// aftrekken
// var aftrekken(arrayTwee, arrayEen);
function aftrekken() {
    document.write( "<h2>aftrekken van de twee arrays zijn:</h2>" )
    for(var i = 0; i <= 9; i++){
        var uitkomst = arrayTwee[i] - arrayEen[i];
        document.write( arrayTwee[i] + " - " + arrayEen[i] + " = " + uitkomst + "<br>" );
    }   
}
aftrekken();


// vermedigvuldigen
// var vermenigvuldigen(arrayEen, arrayTwee);
function vermedigvuldigen() {
    document.write( "<h2>vermedigvuldigen van de twee arrays zijn:</h2>" )
    for(var i = 0; i <= 9; i++){
        var uitkomst = arrayEen[i] * arrayTwee[i];
        document.write( arrayTwee[i] + " * " + arrayEen[i] + " = " + uitkomst + "<br>" );
    }   
}
vermedigvuldigen();

// delen
// var delen(arrayTwee, arrayEen);
function delen() {
    document.write( "<h2>vermedigvuldigen van de twee arrays zijn:</h2>" )
    for(var i = 0; i <= 9; i++){
        var uitkomst = arrayTwee[i] / arrayEen[i];
        document.write( arrayTwee[i] + " : " + arrayEen[i] + " = " + uitkomst + "<br>" );
    }   
}
delen();
