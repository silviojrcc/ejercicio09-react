export const validarFecha = (value) => {
    const fechaActual = new Date();
    const fechaLimite = new Date();
    fechaLimite.setMonth(fechaActual.getMonth() + 2);
  
    const selectedDate = new Date(value).getTime();
    const fechaMinima = fechaActual.getTime();
    const fechaMaxima = fechaLimite.getTime();
  
    if (selectedDate >= fechaMinima && selectedDate <= fechaMaxima) {
      return true;
    } else {
      return false;
    }
  };
  