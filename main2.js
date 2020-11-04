/** SELECTORES PROPIOS DE JQUERY */

$(document).ready(function(){
  /** pinta los pares 0,2,4 Cuenta desde Cero */
  /* $('tr:even').addClass('alt') /* lo malo es que toma todos los tr de todas las tablas  */
  $('tr:nth-child(odd)').addClass('alt') /* este es mejor, cada tabla es independiente */
})

/** ENCONTRANDO ELEMENTOS POR EL CONTENIDO TEXTUAL */
$(document).ready(function(){
  $('td:contains(Henry)').addClass('highlight') // .contains() is CaseSensitive
})

/** Metodos de Recorrido */

/** Es equivalente a lo anterior pero filter()
 * es muy poderoso por que puede recibir funciones
 */
$(document).ready(function(){
  $('tr').filter(':nth-child(even)').addClass('nalt');
  $('a').filter(function(){
    console.log(`This hostname: ${this.hostname}`)
    console.log(`Location hostname: ${location.hostname}`)
    return this.hostname != location.hostname
  }).addClass('external')
})

/**
 * Explicacion del filtrado anterior
 * <a> debe cumplir con 2 criterios:
 * href debe tener un nombre de dominio
 * debe ser diferente a la pagina actual(location.hostname)
 * filter() Itera atraves de todos los elementos coincidentes
 */

/** STYLING SPECIFIC CELLS */
$(document).ready(function(){
  //$('td:contains(Henry)').next().addClass('highlight')
  $('td:contains(Henry)').nextAll().addClass('highlight')

  // addBack(), selecciona todos los hermanos posteriores
  // incluido el que hace match(el q contiene Hamlet)
  $('td:contains(Hamlet)').nextAll().addBack().addClass('highlight')

  // Muy descriptivo 
  $('td:contains(Comedy)').parent().children().addClass('highlight')
})

/**
 * next() -> selecciona al hermano inmediato
 * nextAll() -> selecciona a todos los hermanos siguientes
 */

/**
 * prev() -> contraparte de next
 * prevAll() -> contraparte de nextAll
 * .siblings() -> Selecciona todos los hermanos antes o despues
 */


/** ENCADENAMIENTO - CHAINING */
/**
 * How chaining works
 * Almost all jQuery methods return a jQuery object and so
 * can have more jQuery methods applied to the result.
 */

 /**
  * Every selector expression and most jQuery methods
  * return a jQuery object.
  * This is almost always what we want, because of the
  * implicit iteration and chaining capabilities that it affords.
  */
/** Multiples lineas para una mejor lectura, ejemplo de encadenamiento */
$(document).ready(function(){
  $('td:contains(Henry)').parent().find('td:eq(1)')
      .addClass('highlight').end().find('td:eq(2)')
                            .addClass('highlight')
})

$(document).ready(function(){
  $('td:contains(Henry)')
      .parent()
      .find('td:eq(1)')
      .addClass('highlight')
      .end()
      .find('td:eq(2)')
      .addClass('highlight')
})
