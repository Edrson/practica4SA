const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
import UserDB from "./../../src/implements/UserDB";
import UserImp from "./../../src/implements/UserImp";
import { resGen } from "./../../src/models/resGen";
import { requestMock1, responseMock1 } from "./../../test/mocks/httpMocks";

describe("testing UserDB", function () {
  it("Add user OK", async function () {
    let userdb = new UserDB();
    //let userimp = new UserImp(userdb);/
    let rg = await userdb.DB_AddUser({
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
    });
    expect(rg.valid).to.equal(true);
  });
});
