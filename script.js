
const stories = [
{
title:"El árbol después de la tormenta",
text:"Un árbol quedó destrozado después de una tormenta. Muchas ramas se rompieron y parecía que no sobreviviría. Pero meses después brotaron nuevas hojas. La tormenta no lo destruyó; lo hizo más fuerte."
},
{
title:"El camino cerrado",
text:"Un hombre llegó a un muro en su camino y pensó que su viaje había terminado. Al mirar alrededor descubrió un sendero nuevo. Muchas veces los finales son el inicio de algo diferente."
},
{
title:"La lámpara pequeña",
text:"Una persona caminaba en la oscuridad con una pequeña lámpara. Solo iluminaba unos pocos pasos, pero era suficiente para seguir avanzando."
},
{
title:"El invierno",
text:"Durante el invierno los árboles parecen muertos. Pero cuando llega la primavera vuelven a florecer. La vida también tiene estaciones."
},
{
title:"El libro de la vida",
text:"Un hombre pensaba que su historia había terminado mal. Un amigo le dijo: 'Tu vida es un libro y apenas vas por un capítulo.'"
},
{
title:"La semilla",
text:"Una semilla enterrada parece perdida bajo la tierra, pero en realidad está preparándose para crecer."
},
{
title:"El río",
text:"Cuando una roca bloquea el río, el agua no se detiene. Simplemente busca otro camino."
},
{
title:"La noche",
text:"La noche puede parecer interminable, pero siempre llega el amanecer."
},
{
title:"La taza rota",
text:"A veces perdemos algo importante y creemos que todo terminó. Pero la vida siempre nos ofrece nuevas oportunidades."
},
{
title:"Respirar",
text:"Cuando todo parece demasiado difícil, recuerda: respira profundo y da un paso a la vez."
},
{
title:"Las cicatrices",
text:"Las cicatrices no significan derrota; son prueba de que sobreviviste."
},
{
title:"La montaña",
text:"Subir una montaña es difícil, pero la vista desde arriba siempre vale la pena."
},
{
title:"El amanecer",
text:"Incluso después de la noche más oscura, el sol vuelve a salir."
},
{
title:"La lluvia",
text:"Sin lluvia no existirían los arcoíris."
},
{
title:"La paciencia",
text:"Algunas de las cosas más hermosas de la vida toman tiempo."
}
];

let index = 0;

function showStory(){
document.getElementById("title").innerText = stories[index].title;
document.getElementById("story").innerText = stories[index].text;
document.getElementById("counter").innerText = (index+1) + " / " + stories.length;
}

function nextStory(){
index++;
if(index >= stories.length){index = 0;}
showStory();
}

function prevStory(){
index--;
if(index < 0){index = stories.length-1;}
showStory();
}

showStory();
