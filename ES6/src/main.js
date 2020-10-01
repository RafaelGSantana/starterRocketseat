// Todos os exercícios abaixo necessitam que você esteja com o Webpack configurado.

// 1º exercício
// Crie um arquivo chamado functions.js com o seguinte conteúdo:

// export const idade = 23;
// export default class Usuario {
//  static info() {
//  console.log('Apenas teste');
//  }
// }

// 1.1
// Agora em seu arquivo principal importe apenas a classe Usuario renomeando-a para ClasseUsuario
// e chame a função info();

import ClasseUsuario from "./functions";

ClasseUsuario.info();

// 1.2
// Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;

import { idade } from "./functions";

console.log(idade);

// 1.3
// Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
// para IdadeUsuario.

import Usuario, { idade as IdadeUsuario } from "./functions";
