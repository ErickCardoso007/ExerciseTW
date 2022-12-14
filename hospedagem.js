class Hospedagem {
    constructor(name, idade) {
        this.name = name
        this.idade = idade
    }

    valida() {
        if (this.idade < 18) {
            return "Acesso negado, " + this.name + "!"
        } else {
            return "Você tem acesso a este conteúdo, " + this.name + "!"
        }
    }
}

const parqueDasFlores = new Hospedagem('Gui', 29)
const jardimBotanico = new Hospedagem('Will', 10)
const marAtlantico = new Hospedagem('Leo', 22)

console.log(parqueDasFlores.valida());
console.log(jardimBotanico.valida());
console.log(marAtlantico.valida());
