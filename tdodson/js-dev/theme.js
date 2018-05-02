jQuery(document).ready(function($) {
    var $isEditorialArticle = $('body').hasClass('single-bueditorialarticle');
    if ($isEditorialArticle = true) {
    	$( '.related-content-full > .bu-sharing' ).remove(); // remove social icons at bottom of page in related content box 
    } // end article page if statement
}); // end document.ready