var container = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');


var inventory = { 'trap': false , 'sleutel': false} ;



function itemTrap() {
    inventory['trap'] = true;
    document.getElementById('inventoryItem').style.display = 'none';
    button3.onclick = level5;
}
function itemSleutel() {
    inventory['sleutel'] = true;
    document.getElementById('inventoryItem').style.display = 'none';
    button3.onclick = level9; 
}

//---------------startMenu---------------//
startMenu();

function startMenu() {


    container.classList.add('game-container');
    container.style.backgroundImage = "url('image/startBackground.jpg')";

    title.classList.add('startTitle'); 
    title.classList.remove('titleDood1Level4');
    title.classList.remove('titleLevel11');


    title.style.display = '';
    title.innerHTML = 'Er zijn veel Palestijnse gevangenen zonder schuld in de cel en je zal de juiste weg kiezen om ze te bevrijden.';
    

    console.log(title);
    description.classList.add('startDescription'); 
    description.classList.remove('descriptionDood1Level4');
    description.classList.remove('descriptionLevel11');
    description.classList.remove('level5');
    description.style.display = '';
    description.innerHTML = " # Are you Ready ? <br>  ............. Lets Go! ";
    button1.innerHTML = "Start";
    button1.classList.add('button1');
    button1.classList.remove('button1Level11');
    button1.classList.remove('button1Level2');

    button2.style.display = 'none';
    button3.style.display = 'none';
    button1.onclick = level1; 
    inventoryItem.style.display = 'none';
}


function level1() {
    container.classList.add('level1background');
    title.style.display = 'none';
    description.style.display = '';
    description.innerHTML = 'Welke kant ga je op ? <br> .... Kies maar voorzichtig!' ;
    description.classList.remove('descriptionLevel2');
    /*console.log(title); */
    button1.innerHTML = 'Vooruit';
    button1.classList.add('button1');
    button1.classList.remove('button1Level2');
    button1.style.display = 'inline-block';
    button2.style.display = 'inline-block';
    button2.classList.add('button2L1');
    button3.classList.add('button3L1');
    button3.style.display = 'inline-block';
    button2.innerHTML = 'Rechts';
    button3.innerHTML = 'Links';
    container.style.backgroundImage = "url('image/level1background.jpg')";
    button2.onclick = dood1Level4; 
    button1.onclick = level3; 
    button3.onclick = level2;
    inventoryItem.style.display = '';
   

    inventoryItem.src = "image/trapje.jpg";
    inventoryItem.style.position = "relative";
    inventoryItem.style.top = "432px";
    inventoryItem.style.left = "1200px";
    inventoryItem.style.width = "50px";
    inventoryItem.style.height = "50px";
    inventoryItem.onclick = itemTrap; 
}


function dood1Level4() {
    container.classList.add('dood1Level4');
    button1.onclick = startMenu;
    title.style.display = '';
    title.classList.add('titleDood1Level4');
    title.innerHTML = 'The End';
    description.style.display = '';
    description.classList.add('descriptionDood1Level4');
    description.innerHTML = 'Oepss... <br> je bent geëlimineerd door een sluipschutter!';
    container.style.backgroundImage = "url('image/sluipschutter.jpg')";
    button1.innerHTML = 'Restart';
    button1.classList.add('button1');
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
}

function level2() {

    container.classList.add('level2background');
    title.style.display = 'none';
    description.style.display = '';
    description.innerHTML = 'De apartheidsmuur hindert onze weg.<br> We hebben een hulpmiddel nodig om ons te helpen. <br> Keer terug een vind ze om de muur te kunnen omzeilen.' ;
    description.classList.add('descriptionLevel2');
    /*console.log(title); */
    button1.innerHTML = 'Keer om';
    button1.classList.add('button1Level2');
    button1.onclick = level1; 
    button2.style.display = 'none';
    button3.style.display = 'none';
    container.style.backgroundImage = "url('image/apartheidsmuur.jpg')";
    
   /* button1.onclick = level2; */
  /*  button3.onclick = level3; */
    inventoryItem.style.display = 'none';

}


function level5(){
    container.classList.add('level5');
 
    title.style.display = '';
    title.style.color = "black";
    title.innerHTML = 'Wel gelukt .. <br> Yeeeh';
    description.style.display = '';
    description.classList.add('level5');
    description.innerHTML = 'Je heeft een lange weg afgelegd. <br> Maar blijf voorzichtig!';
    container.style.backgroundImage = "url('image/muur.jpg')";
    button1.innerHTML = 'Ga door';
    button1.classList.add('button1Level2');
    button1.style.color = "black";
    button1.style.left = "250px";
    button1.onclick = level8;
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
}

function level8(){
    container.classList.add('dood1Level4');
    
    title.style.display = '';
    title.classList.add('titleDood1Level4');
    title.innerHTML = 'The End';
    description.style.display = '';
    description.classList.add('descriptionDood1Level4');
    description.innerHTML = 'OMG... <br> Ze hebben je een valstrik gezet.<br> Veel succes de volgende keer!';
    container.style.backgroundImage = "url('image/level8.jpg')";
    button1.innerHTML = 'Restart';
    button1.classList.add('button1');
    button2.style.display = 'none';
    button3.style.display = 'none';
    inventoryItem.style.display = 'none';
    button1.onclick = startMenu;
}

function level3(){
    container.classList.add('level3');
    title.style.display = 'none';
    description.style.display = '';
    description.innerHTML = 'Dit gebied is onder bombardement. <br> Ren snel ..!';
    container.style.backgroundImage = "url('image/level3.jpg')";
    button3.innerHTML ="Ga links af";
    button3.style.width ='250px';
    button3.style.height = '70px';
    button2.innerHTML ="Ga Rechts af";
    button2.style.width ='250px';
    button2.style.height = '70px';
    button2.style.right = '240px';
    button1.style.display ="none";
    inventoryItem.style.display = 'none';
    button3.onclick = level6 ;
    button2.onclick = level7 ;
}

function level6(){
    container.classList.add('level2background');
    title.classList.add('titleDood1Level4');
    title.style.display = '';
    title.innerHTML = 'The End';
    description.classList.add('descriptionDood1Level4');
    description.style.display = '';
    description.innerHTML = 'Je hebt een explosief geraakt.<br> Het heeft je helaas opgeblazen.';
    container.style.backgroundImage = "url('image/level6.jpg')";
    button1.classList.add('button1');
    button1.style.display ="";
    button1.innerHTML ='Restart';
    button1.onclick = startMenu;
    button2.style.display ="none";
    button3.style.display ="none";
    inventoryItem.style.display = 'none';
}

function level7(){
    container.classList.add('level7');
    container.classList.remove('level10');
    title.classList.add('titleLevel7');
    title.style.display = '';
    title.style.color = 'black';
    title.innerHTML = 'Goed bezig';
    description.style.display = '';
    description.innerHTML = 'Wij zijn er bijna.. zorg dat je de sleutel van dit level pakt om verder te kunnen gaan!';
    container.style.backgroundImage = "url('image/level7.jpg')";
    description.classList.remove('descriptionLevel2');
    button3.style.display = '';
    button3.innerHTML ="Ga links af";
    button3.style.color = "black";
    button3.style.width ='250px';
    button3.style.height = '70px';
    button2.style.display = '';
    button2.innerHTML ="Ga Rechts af";
    button2.style.color = "black";
    button2.style.width ='250px';
    button2.style.height = '70px';
    button2.style.right = '240px';
    button1.style.display ="none";
    inventoryItem.style.display = 'none';
    button3.onclick = level71;

    button2.onclick = level10 ; 
    button1.classList.remove('button1Level2');

    inventoryItem.style.display = '';
   

    inventoryItem.src = "image/sleutel.jpg";
    inventoryItem.style.position = "relative";
    inventoryItem.style.top = "432px";
    inventoryItem.style.left = "1200px";
    inventoryItem.style.width = "50px";
    inventoryItem.style.height = "50px";
    inventoryItem.onclick = itemSleutel; 
}

function level71(){
    title.style.display = 'none';
    description.innerHTML = "Sorry je hebt een sleutel nodig<br> om verder te kunnen gaan! <br> zoek maar de sleutel en probeer dan nog een keer." ;
}

function level9(){
    container.classList.add('level9');
    title.style.display = 'none';
    title.style.backgroundColor = '#086A87'; 
    description.style.display = '';
    description.innerHTML = 'Maak de deur open met je sleutel en ren uit met de mensen snel! <br> snel ...!' ;
    description.classList.add('descriptionLevel9');
    /*console.log(title); */
    button1.style.display = '';
    button1.style.color = 'black';
    button1.style.backgroundColor = '#086A87';
    button1.innerHTML = 'rennen';
    button1.classList.add('button1Level2');
    button1.onclick = level11; 
    button2.style.display = 'none';
    button3.style.display = 'none';
    container.style.backgroundImage = "url('image/level9.jpg')";
    
    inventoryItem.style.display = 'none';
}

function level10(){
    container.classList.add('level10');
    title.style.display = 'none';
    description.style.display = '';
    description.innerHTML = 'Deze tunnel zit vol met gevangenissen en gewapende soldaten, dus je kunt niet langs. <br> Ga terug en neem de sleutel en neem ook de andere uitgang.' ;
    description.classList.add('descriptionLevel2');
    /*console.log(title); */
    button1.innerHTML = 'Keer om';
    button1.classList.add('button1Level2');
    button1.style.display = '';
    button1.onclick = level7; 
    button2.style.display = 'none';
    button3.style.display = 'none';
    container.style.backgroundImage = "url('image/level10.jpg')";
    
   /* button1.onclick = level2; */
  /*  button3.onclick = level3; */
    inventoryItem.style.display = 'none';
}

function level11(){
    container.style.backgroundImage = "url('image/level11.jpg')";
    title.classList.add('titleLevel11');
    title.style.display ='';
    title.innerHTML = 'Goed Gedaan!';
    description.classList.add('descriptionLevel11');
    description.style.display = '';
    description.innerHTML ='Je hebt het proces met suces voltooid! <br> Als je het een leuk spel vindt. <br>Druk je op de restart knop.<br>En bereik opnieuw overwinning en gerechtheid.';
    description.style.color = 'white';
    description.style.right = '250px';
    description.style.top = '50px';

    button1.classList.add('button1Level11');
    button1.style.color ='black';
    button1.style.display = '';
    button1.innerHTML = 'Restart';
    button1.onclick = startMenu;
    button2.style.display = 'none';
    button3.style.display = 'none';
}