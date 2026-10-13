let navbar = document.getElementById("totalnav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("load", function () {
  increaseNumberAnimation("nbr1", 10000, 1);
  increaseNumberAnimation("nbr2", 2500, 15 );
  increaseNumberAnimation("nbr3", 800, 50)
  increaseNumberAnimation("nbr4", 20, 500);
});

function increaseNumberAnimation(elementId, endNumber, speed = 5) {
  const element = document.getElementById(elementId);

  if (!element) return;

  const animationRunning = JSON.parse(
    element.dataset.animationRunning ?? false
  );

  if (animationRunning) return;

  element.dataset.animationRunning = true;

  incNbrRec(0, endNumber, element, speed);
}

function incNbrRec(currentNumber, endNumber, element, speed) {
  if (currentNumber <= endNumber) {
    element.innerHTML = currentNumber;

    setTimeout(function () {
      incNbrRec(currentNumber + 10, endNumber, element, speed);
    }, speed);

  } else {
    element.dataset.animationRunning = false;
  }
}

jQuery(document).ready(function(){
    jQuery('.testimonials-slider').owlCarousel({
        loop:true,
        margin:24,
        stagePadding: 0,
        autoplay:false,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1100:{
                items:3,
            },
        }
    });

    // Equalize testimonial content heights
    function equalizeTestimonialHeights() {
        const contents = jQuery('.testimonials-slider .testimonial-content');
        let maxHeight = 0;
        
        // Reset heights
        contents.css('height', 'auto');
        
        // Find max height
        contents.each(function() {
            const height = jQuery(this).outerHeight();
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        
        // Apply max height to all
        contents.css('height', maxHeight + 'px');
    }
    
    // Run on init, resize, and carousel refresh
    equalizeTestimonialHeights();
    jQuery(window).on('resize', equalizeTestimonialHeights);
    
    // Re-run after Owl transitions (important!)
    jQuery('.testimonials-slider').on('changed.owl.carousel', function() {
        setTimeout(equalizeTestimonialHeights, 100);
    });
});