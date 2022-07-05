const fraseElement = document.getElementById('frase')

const animal = [
    'caballo' ,
    'cerdito' ,
    'gallina' ,
    'pato' ,
    'vaca' ,
    'pajarito' ,
]
const sonido = [
    'guau guau' ,
    'miau miau' ,
    'kikiriki' ,
    'cuak cuak' ,
    'muuuu' ,
    'pio pio' ,
]
const iAnimal = Math.floor(Math.random() * animal.length) ;
const iSonido = Math.floor(Math.random() * sonido.length) ;
console.log('El' +' '+ animal[iAnimal] +' '+ 'dice' +' '+ sonido[iSonido]);

const frase = 'El' +' '+ animal[iAnimal] +' '+ 'dice' +' '+ sonido[iSonido];

fraseElement.innerHTML = frase;
