
const { Pool, Client } = require('pg')

class ConexionDB {

  constructor() {}

  conectar(){
    var client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'Intento',
      password: '123',
      port: 5432,
    })
    client.connect()
    return client
  }

  consultar(consulta){
    var client = this.conectar()
    client.query(consulta, (err, res) => {
      console.log(err, res)
      client.end()
    })
  }

  ejecutar(text, values){
    var client = this.conectar()

    client
      .query(text, values)
      .then(res => {
        //console.log('resultado '+ res[0])
        client.end()
      })
      .catch(e =>{
        console.error(e.stack)
        client.end()
      } )

  }

}
module.exports = ConexionDB


/*
class Singleton {

  constructor() {
      if (!Singleton.instance) {
          Singleton.instance = new ConexionDB();
      }
  }

  getInstance() {
      return Singleton.instance;
  }

}

module.exports = Singleton;

module.export = Singleton;

//const con = new ConexionDB();
var instance1 = Singleton.getInstance();
//con.conectar();
var text3 = 'insert into sucursal(nombre, direccion) VALUES($1, $2)'
var text = 'select * from sucursal'
var values = ['f','f']
instance1.ejecutar(text3, values);
//console.log("1!")
//con.ejecutar('select * from sucursal limit 1');
//console.log("3!")
//console.log("2!")
*/
