var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();
	$lista = $("#contenido");

function mostrarOcultarFormulario(){
	$form.slideToggle();
	$lista.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn();
	mostrarOcultarFormulario();
	return false;
}

// Eventos
$button.click( mostrarOcultarFormulario );
$form.on('submit', agregarPost );