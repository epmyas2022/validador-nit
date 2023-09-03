import { validarNit } from "./helpers/utils.mjs";
import Colors from "./helpers/Colors.mjs";
import inquirer from "inquirer";

console.log("------------------------------------------");
console.log("|    VALIDAR LA VERACIDAD DE UN DOCUMENTO |");
console.log("------------------------------------------");

const Opciones = [
  {
    id: 1,
    opcion: "[1] Validar NIT",
  },
  {
    id: 2,
    opcion: "[2] Validar DUI",
  },
  {
    id: 3,
    opcion: "[3] Validar NUP",
  },
];

const main = async () => {
  const opcion = await inquirer.prompt({
    type: "list",
    name: "opcion",
    message: "Seleccione una opción",
    choices: Opciones.map((opcion) => opcion.opcion),
  });

  const opcionId = Opciones.find(
    (option) => option.opcion === opcion.opcion
  ).id;

  const valor = await inquirer.prompt({
    type: "input",
    name: "valor",
    message: "Ingrese el número a validar",
    validate: (value) => {
      if (value.trim() === "") {
        return "Por favor ingrese un valor";
      }

      return true;
    },
  });


  switch (opcionId) {
    case 1:
      console.log(Colors.FgWhite + 'El nit es : ' + validarNit(valor.valor));
      break;
    case 2:
  }
};

main();
