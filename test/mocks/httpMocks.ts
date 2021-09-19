var httpMocks = require("node-mocks-http");

export const requestMock1 = httpMocks.createRequest({
  method: "POST",
  url: "",
  params: {},
  body: {
    nombre: "Ederson",
    apellido: "Ramirez",
    foto: "N/A",
    correo: "ederson.r@gmail.com",
    password: "123",
    tipo: "C",
    tarjetas: [
      { titular: "Ederson Ramirez", numero: "475015245895219565", vencimiento: "08/2023" },
      { titular: "Ederson Ramirez", numero: "8888888888888888", vencimiento: "08/2024" },
    ],
  },
});

export const responseMock1 = httpMocks.createResponse({
  statusCode: 200,
});
