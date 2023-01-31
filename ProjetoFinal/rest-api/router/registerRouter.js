var express = require('express');
var router = express.Router();
var usuariosModel = require('../model/UsuariosModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, resp, next){
  usuariosModel.getTodos(function(erro, retorno){
    let resposta = new RespostaClass();

    if(erro){
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro.';
    }
    else {
      resposta.dados = retorno;
    }

    resp.json(resposta);
  });
  
});

module.exports = router;