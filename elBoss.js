const elBoss = {

    nombre: "Jose Luis",
    edad: 194,
    poderes: [
        {
            nombre: "Paranoia",
            description: "intentandome escapar de esta paranoia",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la paranoia"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la paranoia"
                    }
                }
            ]
        },
        {
            nombre: "Petrificasió",
            description: "Te mira y te petrifica",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la petrificasió"
                    },
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la petrificasió"
                    }
                }
            ]
        },
        {
            nombre: "Fuego",
            description: "Pues eso, fuego",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen del fueguito"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen del fueguito"
                    }
                }
            ]
        }
    ],
    familiares: [
        {
            nombre: "Julian",
            edad: 342,
            parentesco: "Primo"
        },
        {
            nombre: "Paquito",
            edad: 312,
            parentesco: "Tío"
        },
        {
            nombre: "Emma",
            edad: 13,
            parentesco: "Sobrina"
        },
        {
            nombre: "Julia",
            edad: 100,
            parentesco: "Hermana"
        }
    ],//________________________________
    reto: [
        [
            {
                sigueElReto: [
                    {
                        sigueElReto2: {
                            sigueElReto3: {
                                pareceQueSabesBucearEntreObjetos: {
                                    definitivamenteSabes: ["Jose","Luis,","te", "miro", "y", 23121, "te","destruyo", { mensajeFinal: "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!" } ]
                                }
                            }
                        }
                    }
                ]
            }
        ]
    ]
}
let cont = 1;
let cont2 = 0;
let muerteAJoseLuis;
let mensajeFinalArray;
let posiciones = ["primer", "segundo" , "tercer"];
//___________Nombre y Poderes__________________________________________
console.log(elBoss.nombre+", te conozco y no me das ningún miedo!");
console.log("conozco tus poderes y lo que hacen!")
for (let index = 0; index < elBoss.poderes.length; index++) {
    const poder = elBoss.poderes[index];
    console.log("tu "+posiciones[index]+" poder es "+poder.nombre+" y hace: "+poder.description);
}//_______________Familiares_________________________________________
console.log("También se tu punto más debil, tus familiares, y les conozco...")

let ultimoFamiliar = elBoss.familiares.pop();
for (let index = 0; index < elBoss.familiares.length; index++) {
    const familiar = elBoss.familiares[index];
    console.log("conozco a tu "+familiar.parentesco+" "+familiar.nombre);
}
console.log("y conozco a tu "+ultimoFamiliar.parentesco+" "+ultimoFamiliar.nombre);
//_________________Reto_______________________________________________
for (let index = 0; index < elBoss.reto.length; index++) {
    const element = elBoss.reto[index];
    for (let i = 0; i < element[0].sigueElReto.length; i++) {
        let elementsss = element[0].sigueElReto[i]
        let xxxx = elementsss.sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes;
        console.log(xxxx[0],xxxx[1],xxxx[2],xxxx[3],xxxx[4],xxxx[6],xxxx[7]);
    }
}//________________________BONUS--URL/PODERES_____________
console.log("*****BONUS*****");
for (let index = 0; index < elBoss.poderes.length; index++) {
    const poder2 = elBoss.poderes[index];
    let urls = poder2.imagenes;
    for (const imgs of urls) {
        console.log(imgs.imagen.url);
    }  
}//____________________MEDIA EDADES_________________________
let sumatoria = 0;
for (let index = 0; index < elBoss.familiares.length; index++) {
    const familiar = elBoss.familiares[index];
    sumatoria +=  familiar.edad;
}
console.log("Lamedia de edad de los familiares es: "+sumatoria/elBoss.familiares.length);
//________________________MENSAJE FINAL_______________________________________-
for (let index = 0; index < elBoss.reto.length; index++) {
    const element = elBoss.reto[index];
    for (let i = 0; i < element[0].sigueElReto.length; i++) {
        let elementsss = element[0].sigueElReto[i]
        let xxxx = elementsss.sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes;
        console.log(xxxx[8].mensajeFinal);
    }
}




// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// _______1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";
// _______2: le vamos a decir "conozco tus poderes y lo que hacen!"
// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"
// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"
// ______5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// _______mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".

//__________ Por último, como bonus, mostraremos por pantalla las urls de todas ___________las imágenes de los poderes.

// _______haremos la media de las edades de los familiares de elBoss.

// y mostraremos por pantalla el mensajeFinal.

/*for (const iterator of elBoss.reto) {
    for (const iterator2 of iterator) {
        for (const sigueElReto2 of iterator2.sigueElReto) {
            for (const reto3 in sigueElReto2) {
                for (const pareceQueSi in sigueElReto2[reto3]) {
                    for (const ohhhSiSeBuscar in sigueElReto2[reto3][pareceQueSi]) {
                        for (const siuuuu in sigueElReto2[reto3][pareceQueSi][ohhhSiSeBuscar]) {
                            for (const rafaPutoGenio in sigueElReto2[reto3][pareceQueSi][ohhhSiSeBuscar][siuuuu]) {
                                console.log(sigueElReto2[reto3][pareceQueSi][ohhhSiSeBuscar][siuuuu][rafaPutoGenio])
                            }
                        }
                    }
                }
            }
        }
    }
}*/
