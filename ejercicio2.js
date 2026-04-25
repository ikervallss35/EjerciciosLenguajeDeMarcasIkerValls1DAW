let coche = {
  marca: "Seat",
  modelo: "Leon",
  anio: 1999,
};

let cocheJSON = JSON.stringify(coche);
console.log(cocheJSON);

let cocheObjeto = JSON.parse(cocheJSON);
console.log(cocheObjeto.modelo);