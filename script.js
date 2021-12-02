var content = document.getElementById('content');
var picker = document.querySelectorAll('.picker');

var print = document.querySelector('.print');
 var cookie0;
 var cookie1;



function Realchange(){
    content.style.background = content.style.background = 
	"linear-gradient(to right, " 
	+ picker[0].value 
	+ ", " 
	+ picker[1].value 
	+ ")";

    
print.textContent = content.style.background;


cookie0 = document.cookie = picker[0].value;
cookie1 = document.cookie = picker[1].value;

content.style.background = content.style.background = 
	"linear-gradient(to right, " 
	+ cookie0 
	+ ", " 
	+ cookie1 
	+ ")";

    
picker[0].value = cookie0;
picker[1].value = cookie1;


}
  

picker[0].addEventListener('input', Realchange);
picker[1].addEventListener('input', Realchange);