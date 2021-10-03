const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
import { Console } from "console";
import UserDB from "./../../src/implements/UserDB";
import UserImp from "./../../src/implements/UserImp";
import { resGen } from "./../../src/models/resGen";
import { requestMock1, responseMock1 } from "./../../test/mocks/httpMocks";

describe("testing User add implementation", function () {
  /* it("Add user OK", async function () {
    let userdb = new UserDB();
    let userimp = new UserImp(userdb);
    //^Mockear respueata de la base de datos
    sinon.stub(userdb, "excuteAddUserDb").returns({
      valid: true,
      message: "OPERATION_SUCCESFULL",
    });
    await userimp.FGUserAdd(requestMock1, responseMock1);
    expect(responseMock1.statusCode).to.equal(200);
  });*/
  /*
  it("Add user error 500", async function () {
    let userdb = new UserDB();
    let userimp = new UserImp(userdb);
    //^Mockear respueata FALLIDA de la base de datos
    sinon.stub(userdb, "excuteAddUserDb").returns({
      valid: false,
      message: "SERVER_ERROR",
    });
    await userimp.FGUserAdd(requestMock1, responseMock1);
    expect(responseMock1.statusCode).to.equal(500);
  });
*/
  /*it("Add user UNCONTROLLER ERROR", async function () {
    let userdb = new UserDB();
    let userimp = new UserImp(userdb);
    //^Mockear respueata FALLIDA de la base de datos
    sinon.stub(userdb, "excuteAddUserDb").returns(undefined);
    await userimp.FGUserAdd(requestMock1, responseMock1);
    console.log(responseMock1.statusCode);
    expect(responseMock1.statusCode).to.equal(500);
  });*/
});
