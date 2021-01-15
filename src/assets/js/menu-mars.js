$(document).ready(function(){
	var $modulosContainer = $(".menu-mars .dash-nav-modules"),
		$linksModulos = $modulosContainer.children("a");

	$linksModulos.on("click",function(e){
		e.preventDefault();
		var $this = $(this),
			$hiddenmenucontainer = $(".menu-mars-opencontainer"),
			title = $(this).find(".nombre").text(),
			placeholder = "Buscar dentro del menu "+title.split(' ').join('')+" ...";
		$hiddenmenucontainer.find(".titleCol h2 a").text(title);

		$hiddenmenucontainer.find(".searchContainer input").attr("placeholder",placeholder);
		$this.addClass("active");
		$this.siblings("a").removeClass("active");
        $("body").addClass("menu-first-level-opened");

		if($hiddenmenucontainer.hasClass("open")){
			$hiddenmenucontainer.removeClass("open");

		}else{
			$hiddenmenucontainer.addClass("open");

		}


	});

	$("body").on("click", ".menu-mars-opencontainer .cerrar",function(e){
		e.preventDefault();
		$(".menu-mars-opencontainer").removeClass("open");
        $("body").removeClass("menu-first-level-opened");

	});

	$("body").on("click", ".linkscontainer .single-list .tieneHijos",function(e){
		e.preventDefault();
		$(".menu-mars-opencontainer").addClass("depth2");

	});
});