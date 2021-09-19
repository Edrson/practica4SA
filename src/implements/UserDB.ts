import { IAddUser } from "../interfaces/IAddUser";
import { resGen } from "./../models/resGen";
//paquete de mongodb
const { MongoClient } = require("mongodb");
//uri de la BD, user, pass en mongodb
const uri = "mongodb+srv://admin:451432@cluster0.1fct6.mongodb.net/retryWrites=true&w=majority";
const client = new MongoClient(uri);

class UserDB implements IAddUser {
  //^Agegar usuario a la base de datos
  async DB_AddUser(item: any): Promise<resGen> {
    let rg = new resGen();
    await client.connect();
    rg = await this.excuteAddUserDb(client, item);
    return rg;
  }

  //^Ejecutar llamada a la base de datos para insertar usuario
  async excuteAddUserDb(client: any, objeto: any): Promise<resGen> {
    let rg = new resGen();
    const result = await client.db("SAProject").collection("Usuario").insertOne(objeto);
    console.log(result);
    rg.valid = true;
    rg.data = result;
    rg.message = `Usuario agregado con el siguiente _id: ${result.insertedId}`;
    return rg;
  }
}

export default UserDB;
