"use strict";
let e1 = { nom: "nom1", prenom: "prenom1", age: 21 };
let e2 = { nom: "nom2", prenom: "prenom2", age: 22 };
let e3 = { nom: "nom3", prenom: "prenom3", age: 23 };
let etudiants = [
    { nom: "Etudiant1" },
    { nom: "Etudiant2" },
    { nom: "Etudiant3" }
];
let etudiantJohn = { nom: "John", prenom: "DOE", age: 30 };

function f1() {
    console.log(e1.nom + "-" + e1.prenom + "-" + e1.age);
    console.log(e2.nom + "-" + e2.prenom + "-" + e2.age);
    console.log(e3.nom + "-" + e3.prenom + "-" + e3.age);
}
function f2() {
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i].nom);
    }
}
function f3() {
    console.log(etudiantJohn);
}