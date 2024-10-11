let squadreNull=[
    squad0={
        nome: "Inter",
        punti: 0,
        falliSubiti: 0
    },
    squad1={
        nome: "Milan",
        punti: 0,
        falliSubiti: 0
    },
    squad2={
        nome: "Juve",
        punti: 0,
        falliSubiti: 0
    },
    squad3={
        nome: "Roma",
        punti: 0,
        falliSubiti: 0
    },
    squad4={
        nome: "Napoli",
        punti: 0,
        falliSubiti: 0
    },
    
]

arrayPunti=[]
arrayFalli=[]

for(let i=0; i<squadreNull.length; i++){
    arrayPunti[i]=Math.floor(Math.random() * 10) + 1;
    arrayFalli[i]=Math.floor(Math.random() * 10) + 1;
}

let squadre=[
    squad0={
        nome: "Inter",
        punti: arrayPunti[0],
        falliSubiti: arrayFalli[0]
    },
    squad1={
        nome: "Milan",
        punti: arrayPunti[1],
        falliSubiti: arrayFalli[1]
    },
    squad2={
        nome: "Juve",
        punti: arrayPunti[2],
        falliSubiti: arrayFalli[2]
    },
    squad3={
        nome: "Roma",
        punti: arrayPunti[3],
        falliSubiti: arrayFalli[3]
    },
    squad4={
        nome: "Napoli",
        punti: arrayPunti[4],
        falliSubiti: arrayFalli[4]
    },
]

for(let i=0; i<squadre.length; i++){
    console.log(`La squadra ${squadre[i].nome} ha subito ${squadre[i].falliSubiti} falli`);
    
}

