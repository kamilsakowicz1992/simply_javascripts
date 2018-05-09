/*
   Slideshow - pokaz slajdów
    
 */

window.onload = function()
{
    var slideShow = document.getElementById("slideShow");
  
    var imagesSrc = ["screen1.jpg", "screen2.jpg", "screen3.jpg"];
    
    for (var i = 0; i < imagesSrc.length; i++)
    {
        var image = new Image();
        
        image.src = "images/" + imagesSrc[i];
        
        slideShow.appendChild(image);
    }
    
    slideShow.childNodes[0].setAttribute("class", "current");
    var i = 0;
    
    setInterval(function()
    {
        slideShow.childNodes[i % imagesSrc.length].setAttribute("class", "");
        
        slideShow.childNodes[(i+1) % imagesSrc.length].setAttribute("class", "current");
        
        i++;
        
    }, 1000);
};










