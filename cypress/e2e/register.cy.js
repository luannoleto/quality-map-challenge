/// <reference types="cypress" />

import Access from '../support/pages/Access';
import Registro from '../support/pages/Registro';

describe('Criar Registro', () => {
  beforeEach(() => {
    Access.acessarPagina();
    Access.verificarAcesso();
  });

  it('deve realizar o cadastro do usuário', () => {
    Registro.preencherFormulario();
    Registro.buttonSubmit();
    Registro.validarMensagemDeSucesso('Your registration completed');
  });

  it('deve validar campos obrigatórios', () => {
    Registro.buttonSubmit();
    Registro.validarMensagemDeErroFillRequired('First name is required.');
    Registro.validarMensagemDeErroFillRequired('Last name is required.');
    Registro.validarMensagemDeErroFillRequired('Email is required.');
    Registro.validarMensagemDeErroFillRequired('Password is required.');
    Registro.validarMensagemDeErroFillRequired('Password is required.');
  });

  it('deve validar email já cadastrado', () => {
    Registro.preencherEmailInvalido()
    Registro.buttonSubmit();
    Registro.validarMensagemEmailJaCadastrado('The specified email already exists')
  });

  it('deve validar senhas diferentes', () => {
    Registro.preencherSenhasDiferentes();
    Registro.buttonSubmit();
    Registro.validarMensagemPasswordDiferentes('The password and confirmation password do not match.')
  });

  it('deve validar senha com tamanho inferior a 6 caracteres', () => {
    Registro.preencherSenhaPequena();
    Registro.buttonSubmit();
    Registro.validarMensagemPasswordPequena('Password must meet the following rules: must have at least 6 characters')
  });
});
