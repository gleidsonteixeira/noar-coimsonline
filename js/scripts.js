$(document).ready(function(){
	$('.modal-trigger').leanModal();
	$(".button-collapse").sideNav({
		edge: 'right',
		closeOnClick: true
	});
	$('.slider').slider({
		full_width: true
	});
	$('.carousel').carousel({
		full_width: true,
		indicators: true
	});
	transmissoes();
	dadosExtras();
	slider2();
	login();
	chat();
});
$(window).resize(function(){
	slider2();
})
function transmissoes(){
	$("#mModelos .carrosel").jCarouselLite({
		visible: 5
	});
	$("#mModelos .carrosel li").mouseover(function(){
		var arr = ["#mModelos .carrosel li video"];
		$.each(arr, function(e, val){
			var itens = $(val);
			var qtdItens = itens.length;
			for (var i = 0; i < qtdItens; i++) {
				$(val)[i].currentTime = 0;
			}
		});
		var elem = $(this).find("video").get(0);
		playVid(elem);
	})
	$("#mModelos .carrosel li").mouseleave(function(){
		var elem = $(this).find("video").get(0);
		pauseVid(elem);
	})
}
function playVid(video) { 
    video.play();
}
function pauseVid(video) { 
    video.pause();
}
function dadosExtras(){
	$("#mVenda .cartao a").click(function(){
		var a = $(this).attr("data-cartao");
		if(a != 0){
			$("#mVenda .extras").slideDown("fast");
		}else{
			$("#mVenda .extras").slideUp("fast");
		}
		$("#mVenda .cartao a").removeClass("active");
		$(this).addClass("active");
	})
}
function slider2(){
	var a = $("body").width();
	if(a <= 768){
		$("#mSlider .row").removeClass("valign-wrapper");
		$("#mSlider .col").removeClass("valign");
	}
}
function login(){
	$(".acesso").click(function(){
		$("#mLogin").slideToggle("fast");
		$(".mLogin-overlay").fadeToggle("fast");
	})
	$(".mLogin-overlay").click(function(){
		$(".mLogin-overlay").fadeToggle("fast");
		$("#mLogin").slideToggle("fast");
	})
	$("#mLogin .close").click(function(){
		$(".mLogin-overlay").fadeToggle("fast");
		$("#mLogin").slideToggle("fast");
	})
}

function chat(){
	$("#mChat .mdi-navigation-close").click(function(){
		$("#mChat").toggleClass("active");
	})
	$(".chatbutton").click(function(){
		$("#mChat").toggleClass("active");
	})
}