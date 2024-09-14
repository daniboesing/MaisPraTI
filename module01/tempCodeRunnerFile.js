
let serie = {
    nome: "The Boys",
    genero: ["Ação", "Paródia", "Heróis"],
    nrTemporadas: 4,
    status: "Em andamento",
    classificao: 18,
    nrEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 50
    },
    mostrarCaracteristicas: function() {
        return `O nome da série é: ${this.nome} e sua classificação é +${this.classificao}`;
    }
};

// console.log(serie.mostrarCaracteristicas())

// iterando

for(let key in serie){
    console.log(`${key}: ${serie[key]}`)
    for (let key2 in serie.nrEpisodios) {
        console.log(`  ${key2}: ${serie.nrEpisodios[key2]}`)
    }    
}