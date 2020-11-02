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