	//script for gallery
	//using kays
	document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        image_close();
        more_info_close();
    }
    else if(evt.keyCode == 39)
    	{
    	image_forward();
    	}
    else if(evt.keyCode == 37)
	{
	image_back();
	}
};
//end of using keys

	// script for gallery show
var a=0;
var now;
var max=6;
	function image(a)
	{
		now=a;
		if(now>1) document.getElementById("back").style.display="block";
		else document.getElementById("back").style.display="none";
		if(now<max) document.getElementById("forward").style.display="block";
		else document.getElementById("forward").style.display="none";
		if(now<=max)document.getElementById("show_image").style.display = "block";
		document.getElementById("picture").innerHTML="<img src='img/"+a+".jpg' alt='image'>";
	}
	function image_close()
	{
		document.getElementById("show_image").style.display = "none";
	}
	function image_forward()
	{
		document.getElementById("back").style.display="block";	
		var b = now+1;
		if(b>=max)
			{
			b=max;
				document.getElementById("forward").style.display="none";
			}
		now=b;
		document.getElementById("picture").innerHTML="<img src='img/"+b+".jpg' alt='image'>";
	}
	function image_back()
	{
		document.getElementById("forward").style.display="block";
		var b = now-1;
		if(b<=1){
			b=1;
			document.getElementById("back").style.display="none";
				}
		now=b;
		document.getElementById("picture").innerHTML="<img src='img/"+b+".jpg'>";
	}