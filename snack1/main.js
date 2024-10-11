const biciclette=[
    bici0={
        nome: "Fulmine",
        peso: 50
    },
    bici1={
        nome: "Saetta",
        peso: 45
    },
    bici2={
        nome: "Turbo",
        peso: 90
    },
    bici3={
        nome: "Sprint",
        peso: 67
    },
    bici4={
        nome: "Velocezza",
        peso: 38
    },
]

const pesoArray = [];
for (let i=0; i<biciclette.length; i++){
    pesoArray[i] = biciclette[i].peso
}

const pesoMinore = Math.min(...pesoArray);

for(let i=0; i<biciclette.length; i++){
    if(biciclette[i].peso==pesoMinore){
        console.log(`La bici più leggera è ${biciclette[i].nome} con un peso di ${pesoMinore} libbre`);
    }
}



