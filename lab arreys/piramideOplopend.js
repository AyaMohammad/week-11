
ArrayPiramide= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function piramide() {
    var vraag = prompt('Voer een getal in:');
    var getallen = [];

    if (vraag <= 20) {
        document.write('<h2>' + 'Piramide oplopend' + '</h2>');
        document.write('<h2>' + 'Array: ' + vraag + '</h2>');
        
        for (i = 0; i <= vraag; i++) {
            getallen.push(i);
            document.write(getallen.join('') + '<br>');
        }  
    } else {
        alert("We hebben niet zo'n getal");
        piramide();
    }
}
piramide();