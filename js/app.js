(function () {
	var contador = 0;

	var cargarPagina = function () {

		$("#formulario").submit(publicarTwitt);
		$("#twitt").keyup(validarTwitt);
		};

	var publicarTwitt = function (e) {
		e.preventDefault();
		// Obtenemos datos
		var $publicacion = $("#publicar");
		var $twitt = $("#twitt");
		var $botonTwitt = $("#botonAgregarTwitt");
		var mensaje = $twitt.val();


		// Creamos elementos
		var $tarjeta = $("<article />", { "class": "jumbotron" });
		var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<label />");
		var id = "marcador-" + contador;

		// Personalizamos elementos
		$postCheck.id = id;
		$postTexto.attr("for", id);
		$postTexto.text(mensaje);
		$postCheck.click(borrarTwitt);

		// Agregarlos al DOM
		$tarjeta.append($postCheck);
		$tarjeta.append($postTexto);
		$publicacion.prepend($tarjeta);

		// Borrar contenido de textarea
		$twitt.val("");
		$botonTwitt.attr("disabled", true);

		contador++;
	};

	var borrarTwitt = function () {
		$(this).parent().remove();
	};

	var validarTwitt = function () {
		var $addButton = $("#botonAgregarTwitt");
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};

	// Cuando carga la página
	$(document).ready(cargarPagina);
})();
