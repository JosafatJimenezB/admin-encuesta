const questions = [
  {
    question: "Es usted...",
    responses: [
      { answer: "verde", text: "Empresario persona moral" },
      { answer: "rojo", text: "Empresario persona física" },
      { answer: "azul", text: "No estoy dado de alta en el SAT" },
    ],
  },
  {
    question: "Su negocio es: ",
    responses: [
      { answer: "verde", text: "Venta de servicios" },
      { answer: "rojo", text: "Venta de productos" },
      { answer: "azul", text: "Comercio" },
    ],
  },
  {
    question: "Si le ofrecieran algún crédito ¿Para qué lo usaría?",
    responses: [
      {
        answer: "verde",
        text: "Inversion Fija (muebles, vehículos, equipos, mobiliario...)",
      },
      {
        answer: "rojo",
        text: "Inversion Diferida (instalaciones, remodelaciones, publicidad, anuncios, rentas...)",
      },
      {
        answer: "azul",
        text: "Capital de Trabajo (insumos, mercancías, mano de obra...)",
      },
    ],
  },
  {
    question: "Si puede conectarse via internet, ¿Qué dispositivo podría usar?",
    responses: [
      { answer: "verde", text: "Computadora" },
      { answer: "rojo", text: "Celular" },
      { answer: "azul", text: "Cuento con ambos" },
    ],
  },
  {
    question:
      "¿Usted usaría comercio electrónico via una APP para vender su producto o servicio?",
    responses: [
      { answer: "verde", text: "Si" },
      { answer: "rojo", text: "No" },
      { answer: "azul", text: "No me sirve para mis ventas" },
    ],
  },
  {
    question:
      "¿Usted cuenta con una terminal para el cobro con tarjeta de crédito?",
    responses: [
      { answer: "verde", text: "Si" },
      { answer: "rojo", text: "No" },
      { answer: "azul", text: "No me sirve" },
    ],
  },
  {
    question: "¿Que tipo de capacitación le interesaría más para su negocio?",
    responses: [
      { answer: "verde", text: "Administrar sus finanzas" },
      { answer: "rojo", text: "Comercializacion en linea" },
      { answer: "azul", text: "Ambas" },
    ],
  },
];

export default questions;
