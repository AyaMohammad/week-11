var alleNamen = ['Aya','Yosha','Ayoush','Yasho','Yoya','Yayo','Katshab','Yoyo','Ayoushka','Ayoyo','ManalE','Koke','labon','lol','Khaled']



    var namen = prompt('hoeveel namen wilt u')

document.write('<h2>' + 'namen' + '</h2>')
for(var i = 0; i < namen; i++){
    document.writeln(alleNamen[i] + "<br>")
}


document.write('<h2>' + 'namen andersom' + '</h2>')
for(var i = namen; i >= 0;){
    document.writeln(alleNamen[i] + "<br>")
    var i= i-1;
}