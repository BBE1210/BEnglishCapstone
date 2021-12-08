/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
var slideIndex = [1,2];
        var slideId = ["mySlides1", "mySlides2", "mySlides3"]
        showSlides(1, 0);
        showSlides(1, 1);
        showSlides(1, 2);
       
        function plusSlides(n, no) 
        {
        showSlides(slideIndex[no] += n, no);
        }

        function currentSlide(n, no) 
        {
        showSlides(slideIndex[no] += n, no);
        }
        
        function showSlides(n, no) 
        {
          var i;
          var x = document.getElementsByClassName(slideId[no]);
          if (n > x.length) {slideIndex[no] = 3}    
          if (n < 1) {slideIndex[no] = x.length}
          for (i = 0; i < x.length; i++) 
          {
            x[i].style.display = "none";  
          }
  x[slideIndex[no]-1].style.display = "block";  
          }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) 
{
  acc[i].addEventListener("click", function() 
  {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") 
    {
      panel.style.display = "none";
    } else 
    {
      panel.style.display = "block";
    }
  });
}