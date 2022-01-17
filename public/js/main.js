$('.flip').click(function () {
    var $card = $(this).find('.card');
    if ($card.hasClass("flipped")) {
        $card.removeClass('flipped');
        //.addClass('unflipped');
    } else {
        $card.addClass('flipped');
        //.removeClass('unflipped');
    }
});

var coin = document.getElementById('coin');
var coinHeight = coin.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var coinPosition = coin.getBoundingClientRect().top + scrollY + coinHeight - 150;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > coinPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
function animate() {
    // is element in view?
    if (inView()) {
        // element is in view, add class to element
        coin.classList.add('animate');
    }
}