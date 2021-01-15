
var version = "1.05";

function fab(){
	var $floating_ab_container = $(".floating_ab_container"),
		$toggle = $floating_ab_container.find(".floating_action_btn");

	$toggle.on("click",function(e){
		var $parent = $(this).parent(".floating_ab_container"),
			$divOcutlos = $parent.find(".other_btns"),
			$btnsOcultos = $divOcutlos.children(".calltoaction");
		e.preventDefault();
		$divOcutlos.toggleClass("open");
	});
}

function definWidthTabs(){
  var $fedtabsul = $("ul.fedtabs"),
      $fedtabs = $fedtabsul.find(".nav-item"),
      calcWidthItemTab = 0,
      tabContWidth = 0,
      itemsLi = 0,
      tol = .1,
      cantidadMaxTabs = 5,
      windowwidth = $(window).width();

  $fedtabsul.each(function(i,e){
    var $el = $(e),
        $fedt = $el.find(".nav-item"),
        tabsContainerWidth = $el.width(),
        items = $fedt.length,
    itemsLi = items;
    tabContWidth = tabsContainerWidth;
        calcWidth = (tabsContainerWidth / itemsLi) - tol;
    console.log(tabsContainerWidth);
    itemsLi = items;
    $fedt.on("click", function(){
      var $this = $(this);
      setTimeout(function(){
        if ($('body').hasScrollBar()){
          console.log("entro " + tabsContainerWidth);
          tabContWidth = $this.parents("ul.fedtabs").width();
          calcWidth = (tabContWidth / itemsLi) - tol;
          calcWidthItemTab = calcWidth;
          console.log(calcWidthItemTab);

          $this.parents("ul.fedtabs").find(".nav-item").each(function(inn,ee){
            $(ee).width(calcWidthItemTab);
          });
        }
      }, 200);
      
    });
    calcWidthItemTab = calcWidth;
    $fedt.each(function(ind,el){
      var $eltab = $(el);
      if(items <= cantidadMaxTabs ){
        $eltab.width(calcWidthItemTab);
        $eltab.addClass("text-center");
      }
    });
  });
}
function makeTableResponsive($table){
  if($table.length){
    $table.each(function(ind,elm){
      var $this_table=$(elm);
      var arrayText=[];
      $this_table.find(".table-divs-header .table-divs-cell").each(function(i,e){
        arrayText[i]=$(e).text();
      });
      $this_table.find(".table-divs-body .table-divs-tr").each(function(ind,ele){
        var myRow=$(ele);
        var index=ind;
        // debugger;
        myRow.find('.table-divs-cell').each(function(index,element){
          $(element).attr('data-th',arrayText[index]);
        })
      ;}
      );
    });
  }
}
$(document).ready(function(){
	
	fab();

	$(".menu-mars .version > p").text("V "+version);


	

});