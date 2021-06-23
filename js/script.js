/*
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

Milestone 2
Coloriamo le icone per tipo

Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/*
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.


in brutta vediamo le icone sfrtuttando le proprietà che rimandano alla costruzione di fontawesome
*/

/*Milestone 2
Coloriamo le icone per tipo
-Chiusa la 1 la 2 parte sfuttando anche type che mettiamo nella destrutturazione visto
che dovremo andare a lavorare sulla colorazione del icon della card assegnando in CSS
il colore per ciascun type */

const containerIcoHTML = document.querySelector('.icons-content');

//a)riferito al Milestone 3 (video 01:10:00) facciamo in pratica una copia di icon su cui 
//lavorare con map che ci restituisce tutti gli element  quindi:
const iconsFiltered = icons.map((element) =>{
      return element;


})
//da sta roba qui sopra dovremo ottenere una function appllicabile ad ogni 
//scelta quindi (video 01:12:00) con spiega della notazione vscode dei parametri

/**
 * 
 * ovvero assegnamo il parametro choice all oggetto originalList
 * questi funzione si applicherà ovviamente al nostro array originale e i
 * valori saranno quelli contenuti choice(vedi esempio giu )
 * 
 *
 * 
 * @param {*} choice ['all', 'user', 'vegetables', 'fruits']
 * @param {*} originalList 
 */
function filterIcons (choice, originalList){

      const newArray = originalList.filter((icon) =>{
            //ora mettiamo le opzioni di scelta ricordando che return se
            // è true ferma la funzione e restituisce il risultato:quindi 
            //niente ELSE ma un altro if

            if (choice === 'all'){
                  return true;
            }

            if (choice === icon.type){
                  return true;

            }

            //se non è ne all ne i tipi di icona allora è falsa e quindi niente
            //array return è falso
            return false;



      })

}
//VIDEO 01:20:00 DOMANDA DI FRANCO ILLUMINA TUTTO SUL SENSO DELLA FUNZIONE QUI SOPRA

//b)qui mettiamo quindi iconsFiltered (originale era icons ovvero array originale
//di partenza)e ovviamente gira tutto perchè map lo ha copiato x intero

iconsFiltered.forEach((icon) => {

//type aggiunto dopo in destrutturazione e nella classe icon per seguire il ragionamento
//di colorazione delle icone

    const { name, prefix, family, type } = icon;

      containerIcoHTML.innerHTML += `

            <div class="icon-card col">
                  <div class="icon-card-inner">
                        <div class="icon ${type}">
                              <i class="${family} ${prefix}${name}"></i>
                        </div>
                        <div class="name">
                              ${name}
                        </div>
                  </div>
            </div>
            
            
            `    
      
      });

/* Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
      / funzione di select change abbinata a addEventListener  di permetterà
      di cambiare l array


      / dovremo agire su una sorta di copia dell originale (il nostro containerIconHTML), ovvero farà parte della
      selezione anche 'all' inteso come tutto e su quello applicheremo i filtri
      /

      si crea un array uguale (speculare)
      */





      








