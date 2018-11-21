var weekDagen = ['maandag','dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

document.write("<h2>" + 'Alle dagen van de week zijn:' + "</h2>");
document.write(weekDagen);

document.write("<h2>" + 'de werkdagen van de week zijn:' + "</h2>");
document.write(weekDagen[0] + "<br>" + weekDagen[1] + "<br>" + weekDagen[2] + "<br>" + weekDagen[3] + "<br>" + weekDagen[4]);

document.write("<h2>" + 'de weekenddagen van de week zijn:' + "</h2>");
document.write(weekDagen[5] + "<br>" + weekDagen[6]);

document.write("<h2>" + 'Alle dagen van de week in omgekeerde volgorde zijn:' + "</h2>");
document.write(weekDagen[6] + "<br>" + weekDagen[5] + "<br>" + weekDagen[4] + "<br>" + weekDagen[3] + "<br>" + weekDagen[2] + "<br>" + weekDagen[1] + "<br>" + weekDagen[0]) ;

document.write("<h2>" + 'De werkdagen in omgekeerde volgorde zijn:' + "</h2>");
document.write(weekDagen[4] + "<br>" + weekDagen[3] + "<br>" + weekDagen[2] + "<br>" + weekDagen[1] + "<br>" + weekDagen[0]);

document.write("<h2>" + 'De weekenddagen in omgekeerde volgorde zijn:' + "</h2>");
document.write(weekDagen[6] + "<br>" + weekDagen[5]);