"use strict";

let students = [
    { matricule: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
    { matricule: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
    { matricule: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

function B(note) {
    return note >= 10; 
}
function A() {

    for (let i = 0; i < students.length; i++) {
        let student = students[i];        
        let admis = B(student.note1);
        let decision = admis ? "ADMIS" : "AJOURNE";
        console.log(student.matricule + ": " + decision);
    }
}