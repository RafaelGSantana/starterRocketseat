"use strict";

// Converta as funções nos seguintes trechos de código em Arrow Functions:
// // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);

var usuario = {
  nome: "Diego",
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

mostraIdade(usuario); // // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Rafael";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: "Rafael",
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade)); // Retorna { nome: "Diego", idade: 23 }

console.log(mostraUsuario(nome)); // Retorna { nome: "Diego", idade: 18 }

console.log(mostraUsuario(idade)); // Retorna { nome: 23, idade: 18 }

console.log(mostraUsuario()); // Retorna { nome: "Rafael", idade: 18 }

console.log(mostraUsuario(_)); // // 3.4
// const promise = function() {
//  return new Promise(function(resolve, reject) {
//  return resolve();
//  })
// }

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
