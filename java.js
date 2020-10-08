const navslide=()=>{
	const burger= document.querySelector('.burger');
	const nav= document.querySelector('.nav-link');
	const navlink= document.querySelectorAll('.nav-link li');
	
	burger.addEventListener('click', () => {
		//toggle nav
		nav.classList.toggle('nav-active');

		//animate link
	navlink.forEach((link, index) => {
		if (link.style.animation) {
			link.sytle.animation='';
		}
			else{
				link.style.animation= `navlinkfade 0.5s ease forwards ${index/ 7+0.5}s`;
			}

	});

});
}

		
navslide();
	var counter=1;
setInterval(function()
{
	document.getElementById('radio'+counter).checked=true;
	counter++;
	if (counter>4) {
		counter=1;
	}
},
5000);

 
      $(window).load(function() {
        $('.flexslider').flexslider({
          animation: "slide",
          slideshow: false,
          prevText: "&#xf104;",
          nextText: "&#xf105;"
        });

        // Remove preloader
        // https://ihatetomatoes.net/create-custom-preloading-screen/
        $('body').addClass('loaded');
      });
function scrollDown(){
  window.scroll({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
}

function multiply1( value){
				num1=document.getElementById('qty1').value;
				document.getElementById('prc1').value= num1*500;
			}
function multiply2( value){
				num1=document.getElementById('qty2').value;
				document.getElementById('prc2').value= num1*600;
			}
			function multiply3( value){
				num1=document.getElementById('qty3').value;
				document.getElementById('prc3').value= num1*100;
			}
			function multiply4( value){
				num1=document.getElementById('qty4').value;
				document.getElementById('prc4').value= num1*200;
			}
			function multiply5( value){
				num1=document.getElementById('qty5').value;
				document.getElementById('prc5').value= num1*200;
			}
			function multiply6( value){
				num1=document.getElementById('qty6').value;
				document.getElementById('prc6').value= num1*200;
			}
			function multiply7( value){
				num1=document.getElementById('qty7').value;
				document.getElementById('prc7').value= num1*300;
			}
			function multiply8( value){
				num1=document.getElementById('qty8').value;
				document.getElementById('prc8').value= num1*200;
			}

$(document).ready(function(){
	$("input").change(function(){
		var sum=0;
		$("input[name=gider]").each(function(){
			sum=sum+ parseInt($(this).val());
		})
		$("input[name=subt]").val(sum);
	});
});
$(document).ready(function(){
	$("input").change(function(){
		var sum=50;
		$("input[name=subt]").each(function(){
			sum=sum+ parseInt($(this).val());
		})
		$("input[name=subt1]").val(sum);
	});
});