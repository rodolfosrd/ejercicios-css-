function calcularNotas(){
	let notas = document.getElementsByName("nota");
	let suma=0;
	var notaMayor;
	for (var i = 0; i < notas.length; i++) {
		suma=suma+parseInt(notas[i].value);
		if(parseInt(notas[i].value)<0 || parseInt(notas[i].value)>20){
			alert("La nota "+(i+1)+" no exite --- coloque una nota de 0 a 20");
			return false;
		}
	}
	promedio=suma/notas.length;
	console.log(notas.length);
	salida="La suma de las notas es: "+suma+"<br>"+"El promedo de las notas es:"+promedio+"<br>";
	document.getElementById("resultado").innerHTML=salida;
}
function validarNumero(){
	let n1=document.getElementById("nu1").value;
	let n2=document.getElementById("nu2").value;
	if(n1<0 || n1>20){
		document.getElementById("nu1").value=0;
		document.getElementById("nu1").focus();
	}else if(n2<0 || n2>20){
		document.getElementById("nu2").value=0;
		document.getElementById("nu2").focus();
	}

}
function validarNumeros(){
	let n1=document.getElementById("n1").value;
	let n2=document.getElementById("n2").value;
	let n3=document.getElementById("n3").value;
	let n4=document.getElementById("n4").value;
	let n5=document.getElementById("n5").value;
	let n6=document.getElementById("n6").value;
	let n7=document.getElementById("n7").value;
	let n8=document.getElementById("n8").value;
	let n9=document.getElementById("n9").value;
	let n10=document.getElementById("n10").value;
	if(n1<0 || n1>20){
		document.getElementById("n1").value=0;
		document.getElementById("n1").focus();
	}else if(n2<0 || n2>20){
		document.getElementById("n2").value=0;
		document.getElementById("n2").focus();
	}else if(n3<0 || n3>20){
		document.getElementById("n3").value=0;
		document.getElementById("n3").focus();
	}else if(n4<0 || n4>20){
		document.getElementById("n4").value=0;
		document.getElementById("n4").focus();
	}else if(n5<0 || n5>20){
		document.getElementById("n5").value=0;
		document.getElementById("n5").focus();
	}else if(n6<0 || n6>20){
		document.getElementById("n6").value=0;
		document.getElementById("n6").focus();
	}else if(n7<0 || n7>20){
		document.getElementById("n7").value=0;
		document.getElementById("n7").focus();
	}else if(n8<0 || n8>20){
		document.getElementById("n8").value=0;
		document.getElementById("n8").focus();
	}else if(n9<0 || n9>20){
		document.getElementById("n9").value=0;
		document.getElementById("n9").focus();
	}else if(n10<0 || n10>20){
		document.getElementById("n10").value=0;
		document.getElementById("n10").focus();
	}

}
function comparar(){
	let n1=document.getElementById("nu1").value;
	let n2=document.getElementById("nu2").value;

	if(n1>n2){
		mayor="La nota mayor es: "+n1+"<br>"+" y la nota menor es: "+n2;
	}else{
		mayor="La nota mayor es: "+n1+"<br>"+" y la nota menor es: "+n2;
	}
	document.getElementById("Resul").innerHTML=mayor;

}
function sumar(){
	let a=document.getElementById("numero1").value;
	let b=document.getElementById("numero2").value;
	let c="La suma de los valores es: "+ (parseInt(a)+parseInt(b));
	document.getElementById("sumado").innerHTML=c;
}
var s=0;
var m=0;
var h=0;
var timer;
function iniciar(){
	timer= setInterval(function(){
		document.getElementById("s").innerHTML=(s+1);
		s++;
		if(s==60){
			s=0;
			m++;
		}
		if(s<10){
			document.getElementById("s").innerHTML=("0"+s);
		}if(m<10){
				document.getElementById("m").innerHTML=("0"+m);
			}else{
				document.getElementById("m").innerHTML=(m);
			}
		if(m==60){
			m=0;
			h++;
			document.getElementById("h").innerHTML=(h);
		}if(h<10){
			document.getElementById("h").innerHTML=("0"+h);
		}
	},1000);
}
function reiniciar(){
	s=0;
	h=0;
	m=0;
}
function stop(){
		clearInterval(timer);
}
