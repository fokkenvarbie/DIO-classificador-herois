const testes = [
    { nome: "Ahri", xp: 500 },
    { nome: "Darius", xp: 6000 },
    { nome: "Ezreal", xp: 8500 },
    { nome: "Garen", xp: 1500 },
    { nome: "Jinx", xp: 7500 },
    { nome: "Katarina", xp: 9500 },
    { nome: "Lux", xp: 3000 },
    { nome: "Yasuo", xp: 12000 }
];

function classificarHeroi(nome, xp) {
    let nivel = "";

    if (xp < 1000) nivel = "Ferro";
    else if (xp >= 1001 && xp <= 2000) nivel = "Bronze";
    else if (xp >= 2001 && xp <= 5000) nivel = "Prata";
    else if (xp >= 5001 && xp <= 7000) nivel = "Ouro";
    else if (xp >= 7001 && xp <= 8000) nivel = "Platina";
    else if (xp >= 8001 && xp <= 9000) nivel = "Ascendente";
    else if (xp >= 9001 && xp <= 10000) nivel = "Imortal";
    else if (xp >= 10001) nivel = "Radiante";

    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

testes.forEach(heroi => {
    console.log(classificarHeroi(heroi.nome, heroi.xp));
});