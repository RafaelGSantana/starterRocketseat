// Converta as funções nos seguintes trechos de código em Arrow Functions:

// // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });
const arr = [1, 2, 3, 4, 5];

arr.map((item) => item + 10);

// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);
const usuario = { nome: "Diego", idade: 23 };

const mostraIdade = (usuario) => usuario.idade;

mostraIdade(usuario);

// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Rafael", idade = 18) => ({
  nome: "Rafael",
  idade,
});

console.log(mostraUsuario(nome, idade));
// Retorna { nome: "Diego", idade: 23 }

console.log(mostraUsuario(nome));
// Retorna { nome: "Diego", idade: 18 }

console.log(mostraUsuario(idade));
// Retorna { nome: 23, idade: 18 }

console.log(mostraUsuario());
// Retorna { nome: "Rafael", idade: 18 }

console.log(mostraUsuario(_));

// // 3.4
// const promise = function() {
//  return new Promise(function(resolve, reject) {
//  return resolve();
//  })
// }

const promise = () => new Promise((resolve, reject) => resolve());
