import Colors from "./Colors.mjs";
const validarNit = (nit) => {

  let validacion = false;

  console.log("Nit a validar : " + nit);

  const digitoValidador = +String(nit).substring(nit.length, nit.length - 1);

  const correlativo = +String(nit).substring(10, nit.length - 1);

  const digitos = String(nit)
    .slice(0, nit.length - 1)
    .split("");

  console.log(Colors.FgYellow + "Digito validador : " + digitoValidador);
  console.log(Colors.FgYellow + "Correlativo : " + correlativo),
  console.log(Colors.FgYellow + "Digitos : " + digitos);


  if(nit.length !== 14) 
      return  Colors.FgRed +'El nit debe tener 14 digitos'

  if (correlativo <= 100) {
    const suma = digitos.reduce((total, digito, index) => {
      return total + digito * (14 - index);
    }, 0);

    const residuo = suma % 11;

    const validador = residuo === 10 ? 0 : residuo;

    validacion = validador === digitoValidador;
  } else {
    let suma = digitos.reduce((total, digito, index) => {
      return (
        total + digito * (3 + (6 * Math.floor((index + 5) / 6) - (index + 1)))
      );
    }, 0);

    const residuo = suma % 11;

    const validador = residuo > 1 ? 11 - residuo : 0;

    validacion = validador === digitoValidador;
  }
  return validacion ? Colors.FgGreen + "valido" : Colors.FgRed + "invalido";
};

export { validarNit };
