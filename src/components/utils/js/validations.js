// Email function validate
export const validarEmail = campo => {
    var patron = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
    if(patron.test(campo)) {
      return true
    } else {
      return false
    }
}

// Phone function validate
export const validarNumero = campo => {
  var patron = /^[0-9\s]+$/
  if(patron.test(campo)) {
    return true
  } else {
    return false
  }
}