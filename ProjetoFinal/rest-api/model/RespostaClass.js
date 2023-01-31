const mysql = require('mysql');

const conexao = class RespostaClass {
  constructor(){
    this.erro = false;
    this.msg = null;
    this.dados = null;
  };
};

module.exports = conexao;