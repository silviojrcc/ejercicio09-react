export const validarFecha = (value) => {
    // Obtén la fecha actual y calcula la fecha límite (2 meses a partir de hoy)
    const fechaActual = new Date();
    const fechaLimite = new Date();
    fechaLimite.setMonth(fechaActual.getMonth() + 2);
  
    // Convierte los valores de la fecha en milisegundos para compararlos
    const selectedDate = new Date(value).getTime();
    const fechaMinima = fechaActual.getTime();
    const fechaMaxima = fechaLimite.getTime();
  
    // Comprueba si la fecha seleccionada es válida
    if (selectedDate >= fechaMinima && selectedDate <= fechaMaxima) {
      return true;
    } else {
      return false;
    }
  };
  