

function piramide() {
    var aantal = prompt('Voer een getal in:');
    var getallen = [];

    for(var i=0; i<=aantal; i++){
        getallen[i]=i;
    }
    document.write(getallen);
    document.write('<br>');

    for(var i=0; i<getallen.length;i++){
        document.write(getallen[i]);
    }

/*
    if (vraag <= 20) {
        document.write('<h2>' + 'Piramide Aflopend' + '</h2>');
        document.write('<h2>' + 'Array: ' + vraag + '</h2>');
        
        for (i = vraag; i >= 0; i--) {
            getallen.push(i);
            document.write(getallen.join('') + '<br>');
        }  
    } else {
        alert("We hebben niet zo'n getal");
        piramide();
    }*/
}
piramide();