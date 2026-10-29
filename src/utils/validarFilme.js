function validarFilme(nome, genero, ano) {
    if (!nome) {
        return "O Nome não pode ser vazio";
    }

    if (!genero) {
        return "O Gênero não pode ser vazio";
    }

    if (!ano) {
        return "O Ano não pode ser vazio";
    }

    const anoNumerico = Number(ano);

    if (
        Number.isNaN(anoNumerico) ||
        !Number.isInteger(anoNumerico) ||
        anoNumerico <= 0
    ) {
        return "Ano deve ser um valor inteiro positivo";
    }

    if (anoNumerico < 1888) {
        return "Não existem filmes com Ano anterior a 1888";
    }

    if (anoNumerico > new Date().getFullYear()) {
        return `Ano inválido. Ano atual: ${new Date().getFullYear()} Ano inserido: ${ano}`;
    }

    return null;
}

export default validarFilme;
