/*
   Tooltip (podpowiedzi od IE9+)
    
 */
function createTooltips()
{
    var elementsWithTooltip = document.getElementsByClassName("tooltip");
    
    var tooltipContainer = document.createElement("div");
    tooltipContainer.id = "tooltipContainer";
    document.body.appendChild(tooltipContainer);
    
    var tmpTitles = [];
    
    for (var i = 0; i < elementsWithTooltip.length; i++)
    {
        tmpTitles[i] = elementsWithTooltip[i].title;
        
        elementsWithTooltip[i].tmp_id = i;
        
        elementsWithTooltip[i].addEventListener("mouseover",function(e)
        {
           tooltipContainer.innerHTML = this.title;
           
           this.title = "";
           tooltipContainer.style.left = e.clientX + document.documentElement.scrollLeft + 15 + "px";
           tooltipContainer.style.top = e.clientY + document.documentElement.scrollTop - 15 + "px";
           
           tooltipContainer.style.display = "block";
        });
        elementsWithTooltip[i].addEventListener("mouseout",function(e)
        {
         
           this.title = tmpTitles[this.tmp_id];
           tooltipContainer.innerHTML = this.title;
          
           tooltipContainer.style.display = "none";
        });        
    }
}

window.onload = function()
{
    createTooltips();
    var mainImage = document.getElementById("mainImage");
    var image = new Image();
    
    mainImage.appendChild(image);
    
    var thumbnails = document.getElementsByClassName("thumbnail");
    
    var currentThumbnail = thumbnails[0];
    
    image.src = currentThumbnail.getAttribute("src");
    currentThumbnail.className += " current";
    
    for (var i = 0; i < thumbnails.length; i++)
    {
        thumbnails[i].addEventListener("mouseover",function()
        {
          
            currentThumbnail.className = currentThumbnail.className.replace("current", "");
            currentThumbnail = this;
            currentThumbnail.className += " current";
            
            image.src = this.getAttribute("src");
        });
    }
    
};










