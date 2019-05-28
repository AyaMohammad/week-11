Arraytafel= [1,2,3,4,5,6,7,8,9,10];




/* function printTable(getal){
    // als getal == 2 dan tafel van 2 tonen op scherm
    // als getal == 5 dan tafel van 5 tonen op scherm

    //1 x 2 = 2
    //2 x 2 = 4

    //document.write('1 x 2 = 2');

} */ 

function tafel2() {
    document.write("<h2>de tafel van 2</h2><br>")
    for(var i = 0; i <= 9; i++){
        var uitkomst= Arraytafel[i] * Arraytafel[1];
        document.write( Arraytafel[i] + " x " + Arraytafel[1] + " = " + uitkomst + "<br>");    
    }
}
tafel2();

document.write("<br>")

function tafel4() {
    document.write("<h2>de tafel van 4</h2><br>")
    for(var i = 0; i <= 9; i++){
        var uitkomst= Arraytafel[i] * Arraytafel[3];
        document.write( Arraytafel[i] + " x " + Arraytafel[3] + " = " + uitkomst + "<br>");    
    }
}
tafel4();

document.write("<br>")

function tafel6() {   
    document.write("<h2>de tafel van 6</h2><br>")
    for(var i = 0; i <= 9; i++){
        var uitkomst= Arraytafel[i] * Arraytafel[5];
        document.write( Arraytafel[i] + " x " + Arraytafel[5] + " = " + uitkomst + "<br>");    
    }
}

tafel6();

function tafel8() {   
    document.write("<h2>de tafel van 8</h2><br>")
    for(var i = 0; i <= 9; i++){
        var uitkomst= Arraytafel[i] * Arraytafel[7];
        document.write( Arraytafel[i] + " x " + Arraytafel[7] + " = " + uitkomst + "<br>");    
    }
}
tafel8();