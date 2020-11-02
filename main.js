function addHighlightClass() {
    $('div.poem-stanza').addClass('highlight');
}

function removeHighlightClass() {
    $('div.poem-stanza').removeClass('highlight');
}

$(document).ready(addHighlightClass);


$(document).ready(function() {
    $('#selected-plays > li').addClass('horizontal')
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');
    $('img[alt]').attr("width", "400px")
})

/**
 * $('#selected-plays li:not(.horizontal)')
 * Selecciona <li> que son descendientes del elemento
 * con ID:selected-plays, que no tienen la clase horizontal
 * (:not(.horizontal))
 * */


$(document).ready(function() {
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"').addClass('pdflink');
    $('a[href^="http"][href*="henry"]').addClass('henrylink'); // href que inicia con http y contiene henry
})

/** al igual q REGEX ^ -> inicia con mailto, $->termina con .pdf */

/** Custom Selectors -> propios de jQuery */
$('div.horizontal:eq(1)') /* elegira el 2do, se cuenta desde 0 por que los arrays de JS comienzan en 0 */
$('div:nth-child(1)') /* elegira el primer div hijo es propio de CSS */
