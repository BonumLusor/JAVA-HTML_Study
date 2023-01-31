const db = require('../Banco/dbConexao');

module.exports = class UsuariosModel {
  
  static getTodos(callback){
    return db.query("SELECT * FROM usuarios", callback); 
  };

  static getId(Id, callback){
    return db.query("SELECT * FROM usuarios WHERE id_usuarios = ?", [Id] , callback); 
  }
}