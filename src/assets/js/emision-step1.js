$(document).ready(function(){

    $("#btnsiguiente").prop("disabled", true);

    $("[data-toggle='tooltip']").tooltip();

    $('.autocomplete-s2').select2();

    var $stepperstep = $(".stepper-number-navigation-enabled .stepper-step");

    $stepperstep.on("click",function(e){
        e.preventDefault();
        var $el = $(this),
            target = $el.attr("target"),
            $target = $(target);
        $el.siblings().removeClass("active");
        $el.addClass("active");
        $target.addClass("active");
        $target.siblings(".step-form").removeClass("active");
    });


    var today = new Date(); 
    var dd = today.getDate(); 
    var mm = today.getMonth() + 1; 
    var yy = today.getMonth() + 1; 

    var yyyy = today.getFullYear(); 
    if (dd < 10) { 
        dd = '0' + dd; 
    } 
    if (mm < 10) { 
        mm = '0' + mm; 
    } 
    var today = dd + '/' + mm + '/' + yyyy;
    var yearLater = dd + '/' + mm + '/' + yyyy+1;


  $("#feDesde").val(today);
  $("#feHasta").val(yearLater);

  $("#cargarAccesorio").on("click", function(e){
    e.preventDefault();
    $parent = $(this).parents(".form-container-list");

    $(this).parents(".no-content").hide();
    $parent.find("[id*='-form-l']").show();
  });
  $("#agregarAccesorio").on("click", function(e){
    e.preventDefault();
    $parent = $(this).parents(".form-container-list");

    $(this).parents(".no-content").hide();
    $parent.find("[id*='-list-l']").css("display", "flex");
    $parent.find("[id*='-form-l']").hide();
    $parent.find(".agregarOtro").css("display" , "inline-block");
  });

  // select plan

  var $selectBtn = $(".btnSelect"),
      $indicadorPlanSeleccionado = $("#indicadorPlanSeleccionado");

  $selectBtn.on("click", function(e){
    e.preventDefault();
    var $el = $(this),
        $parent = $el.parents(".cotizacion-plan-container");

    $parent.addClass("seleccionado");
    $parent.siblings().removeClass("seleccionado");
    $el.text("Seleccionado");
    $el.prop("disabled", true);
    $parent.siblings().find(".btnSelect").prop("disabled", false);
    $indicadorPlanSeleccionado.show();
    $indicadorPlanSeleccionado.text($parent.find(".nombrePlan").text());
    $("#guardarBtn").prop("disabled", false);
  });

  // $("#contratante").find("input, select, textarea, .form-control").prop("disabled", true);
  var contranteIgualAsegurado = isContratanteIgualAsegurado($("input[name='contratanteIgualAsegurado']"));
  if(contranteIgualAsegurado){
    $("#formAddAsegurado").hide();
    $("#buscarAegurado").hide();
  }else{
    $("#formAddAsegurado").show();
    $("#buscarAegurado").show();
  }

  $("input[name='contratanteIgualAsegurado']").on("change", function(){
    if(isContratanteIgualAsegurado($(this))){
      $("#formAddAsegurado").hide();
      $("#buscarAegurado").hide();
    }else{
      $("#formAddAsegurado").show();
      $("#buscarAegurado").show();


    }
  });


  function isContratanteIgualAsegurado($element){
    var val = $element.val();

    if(val == "no"){
      return false;
    }else{
      return true;
    }
  }

  $("#numeroDoc").on("change", function(){
    var $el = $(this),
        val = $el.val();
    if(val == "35414187"){
      $("#rowClienteExistente").hide();
      $("#rowClienteNoExistente").show();

    }else{
      $("#rowClienteExistente").show();
      $("#emailCliente").val("juanperez@gmail.com");
      $("#numMatricula").val("326546");
      $("#rowNoCliente").hide();
    }
  });

  $("body").on("click", "#generarTransitorio", function(e){
    e.preventDefault();
    var $el = $(this);
    $el.addClass("mat cargando");
    $el.find("#textoBtn").text("Generando transitorio");
    $el.parents(".modal-footer").find(".btn").prop("disabled", true);
    $el.find("#contentBtn").show();

    setTimeout(function(){
      $("#generarPolizaTransitoria").modal("hide");
      // $('#mtos').toast("show");
      window.location.href = "emision-auto-21.html";

    },2000);

  });

  var n = 0;
  $("#collapseContratante").on("click", function(e){
    n++;
    var $el = $(this);
    if ( n % 2 == 0){
      $el.attr("title", "Ocultar datos del contratante");
      $el.find("i").css("transform", "rotate(0deg)");
    }else{
      $el.attr("title", "Ver más datos del contratante");
      $el.find("i").css("transform", "rotate(180deg)");
    }
  });

  $('#generarPolizaTransitoria').on('shown.bs.modal', function () {
    $('#generarTransitorio').focus();
  });

});