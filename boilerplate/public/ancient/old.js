var down = false 
var easterEgg = false
$(document).on('keydown', function(e) {

    var type = e.which
    console.log(type)
    if ((type == 13 || type == 40 || type == 32) && !down) {
        reveal()
    } else if (type == 38 && down) {
        hide()
    }
})
$('#down').on('click', reveal)
$('#up').on('click', function() {
    hide()
})
$(".hidden-surprise").hover(function() {
    $(this).css('cursor','pointer');
}, function() {
    $(this).css('cursor','auto');
});   
$(".hidden-surprise").on('click', function() {
    if (easterEgg) {
        easterIsOver()
    } else {
        easterIsHere()
    }
})   

function reveal() {
    $('#g0').css('animation-duration','1s')
    $('.night').css('animation-name', 'nightUp')  
    $('.day').css('animation-name', 'dayUp')
    $('.fader').css('animation-name', 'nightUp')  
    $('.move').css('animation-iteration-count', 'one')
    $('.move').css('animation-fill-mode', 'both')
    $('.move').css('animation-timing-function', 'linear')
    $('#up').css('animation-name', 'lateFadeIn')
    down = true
}
function hide() {
    $('.night').css('animation-name', 'nightDown')  
    $('.day').css('animation-name', 'dayDown')
    $('#down').css('animation-name', 'nightDown')
    $('.fader').css('animation-name', 'nightDown') 
    down = false
}

function easterIsHere() {
    $('#g0').css('background-image', 'url("../static/old/z1.svg")')
    $('#g1').css('background-image', 'url("../static/old/z0.svg")')
    $('#g2').css('background-image', 'url("../static/old/z2.svg")')
    $('#g3').css('background-image', 'url("../static/old/z3.svg")')
    $('#g4').css('background-image', 'url("../static/old/z4.svg")')
    $('#g5').css('background-image', 'url("../static/old/z5.svg")')
    $('#g6').css('background-image', 'url("../static/old/z6.svg")')
    $('#g7').css('background-image', 'url("../static/old/z7.svg")')
    down = false
    $('.night').css('animation-name', 'none')
    $('.fader').css('animation-name', 'none')
    $('.night').css('animation-name', 'start')
    $('.fader').css('animation-name', 'start')
    $('.day').css('transform', 'translateY(100%)')
    $('.day').css('animation-name', 'none')
    easterEgg = true
}

function easterIsOver() {
    $('#g0').css('background-image', 'url("../static/old/a1.lo.svg")')
    $('#g1').css('background-image', 'url("../static/old/a2.lo.svg")')
    $('#g2').css('background-image', 'url("../static/old/a3.lo.svg")')
    $('#g3').css('background-image', 'url("../static/old/a4.lo.svg")')
    $('#g4').css('background-image', 'url("../static/old/a5.lo.svg")')
    $('#g5').css('background-image', 'url("../static/old/a6.lo.svg")')
    $('#g6').css('background-image', 'url("../static/old/a7.lo.svg")')
    $('#g7').css('background-image', 'url("../static/old/a8.lo.svg")')
    down = false
    $('.night').css('animation-name', 'start')
    $('.fader').css('animation-name', 'start')
    $('.day').css('transform', 'translateY(100%)')
    $('.day').css('animation-name', 'none')
    easterEgg = false
}