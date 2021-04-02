$(document).ready(function(){
	var limit = 0;
	var contador1=0;
	var contador2=0;

	$('#a30').on('click', function(){mJuego(30);})
	$('#a24').on('click', function(){mJuego(24);})
	$('#play').on('click', function(){
		if ($('#equipo1').val() == "") {
			$('#team1').val('EQUIPO 1');
		} else {
			$('#team1').val($('#equipo1').val());
		}
		if ($('#equipo2').val() == "") {
			$('#team2').val('EQUIPO 2');
		} else {
			$('#team2').val($('#equipo2').val());
		}

		console.log('Equipo 1: '+$('#team1').val());
		console.log('Equipo 2: '+$('#team2').val());
		$('#max').val($('input.Selected').val());
		console.log('Modo: '+$('#max').val());
		IniciarGame();
	});

	$('#fin').on('click', FinGame);
	$('#se1').on('click', SumaE1);
	$('#re1').on('click', RestaE1);
	$('#se2').on('click', SumaE2);
	$('#re2').on('click', RestaE2);
	//$('#re2').on('click', RestaE2);


 // FUNCIONESSS

	function mJuego(modo) {
		if ($('#a'+modo).hasClass('notSelected')) {
				$('input.Selected').removeClass('Selected').addClass('notSelected');
				$('#a'+modo).removeClass('notSelected').addClass('Selected');
		}
	}	

	function IniciarGame() {
		$('#main').removeClass('visible').addClass('oculto');
		$('#inGame').removeClass('oculto').addClass('visible');
		limit = $('#max').val();
		limit = limit.replace('a ', '');
		limit = parseInt(limit);
		/*limit-=1;*/
		console.log(limit);
	}

	function SumaE1() {
		if (contador1<limit && contador2<limit) {
			contador1++;
		} else if (contador1==limit){
			/*contador1++;*/
			alert('FIN DE LA PARTIDA - GANO EL EQUIPO: '+$('#team1').val());
		}
		ContarE1();
	}

	function SumaE2() {
		if (contador2<limit && contador1<limit) {
			contador2++;
		} else if (contador2==limit){
			/*contador2++;*/
			alert('FIN DE LA PARTIDA - GANO EL EQUIPO: '+$('#team2').val());
		}
		ContarE2();
	}

	function RestaE1() {
		if (contador1<limit && contador1>0 && contador2<limit) {
			contador1--;
		} else if (contador1==0){
			alert('NO SE PUEDEN RESTAR MAS PUNTOS');
		}
		ContarE1();
	}
	function RestaE2() {
		if (contador2<limit && contador2>0 && contador1<limit) {
			contador2--;
		} else if (contador2==0){
			alert('NO SE PUEDEN RESTAR MAS PUNTOS');
		}
		ContarE2();
	}

	function ContarE1() {
		$('#p1').val(contador1);
		var pad1 = contador1;
		if (limit==24) {
			for (var i=1; i <=6; i++) {
				if (pad1>=4) {
					$('#f1'+i).attr('src', 'img/4.png');
					pad1= pad1 - 4;
				} else	{ // si es menor a 4, osea 3 o 2 o 1 o 0
					$('#f1'+i).attr('src', 'img/'+pad1+'.png');
					pad1 = 0;
				}
			}
		} else {
			for (var i=1; i <=6; i++) {
				if (pad1>=5) {
					$('#f1'+i).attr('src', 'img/5.png');
					pad1= pad1 - 5;
				} else	{ // si es menor a 5, osea 4 o 3 o 2 o 1 o 0
					$('#f1'+i).attr('src', 'img/'+pad1+'.png');
					pad1 = 0;
				}
			}
		}
	}

	function ContarE2() {
		$('#p2').val(contador2);
		var pad2 = contador2;
		if (limit==24) {
			for (var i=1; i <=6; i++) {
				if (pad2>=4) {
					$('#f2'+i).attr('src', 'img/4.png');
					pad2= pad2 - 4;
				} else	{ // si es menor a 4, osea 3 o 2 o 1 o 0
					$('#f2'+i).attr('src', 'img/'+pad2+'.png');
					pad2 = 0;
				}
			}
		} else {
			for (var i=1; i <=6; i++) {
				if (pad2>=5) {
					$('#f2'+i).attr('src', 'img/5.png');
					pad2= pad2 - 5;
				} else	{ // si es menor a 5, osea 4 o 3 o 2 o 1 o 0
					$('#f2'+i).attr('src', 'img/'+pad2+'.png');
					pad2 = 0;
				}
			}
		}
	}
	function FinGame() {
		for (var i = 1; i <= 6; i++) {
			$('#f1' + i).attr('src', 'img/0.png');
			$('#f2' + i).attr('src', 'img/0.png');
		}
		limit = 0;
		contador1=0;
		contador2=0;
		$('#p1').val(contador1);
		$('#p2').val(contador2);
		$('#inGame').removeClass('visible').addClass('oculto');
		$('#main').removeClass('oculto').addClass('visible');
	}

})