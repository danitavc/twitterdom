
function add(){
	//tenemos que tomar el texto ingresado en textarea
		var comments = document.getElementById('comment').value;

		//limpiar el textarea

		document.getElementById('comment').value='';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');
	//creamos el div que contiene cada comentario

	var newComments = document.createElement('div');
	//validar que textarea tenga un mensaje
	if (comments.length==0 || comments==null) {
		alert ('Debes ingresar un mensaje');
		return false;
	}

	//crear checkbox
	var chck = document.createElement ('input');
	chck.type = 'checkbox';

	//creamos icono de corazon

	var heart = document.createElement('i');
	heart.classlist.add('fa','fa-heart','heart');
	//creamos icono de basura
	var trash = document.createElement('i');
	trash.classlist.add('fa','fa-trash','trash')
	//nodos de texto del textarea
	
	vartextNewComment = document.createTextNode(comments);
	var.contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);
}