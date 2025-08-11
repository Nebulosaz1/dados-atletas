class Atleta {
  constructor(nome, idade, peso, altura, notas = []) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    this.categoria = this.calculaCategoria();
    this.imc = this.calculaIMC();
    this.mediaValida = this.calculaMediaValida();
  }

  calculaCategoria() {
    const i = this.idade;
    if (i >= 9 && i <= 11) return "Infantil";
    if (i === 12 || i === 13) return "Juvenil";
    if (i === 14 || i === 15) return "Intermediário";
    if (i >= 16 && i <= 30) return "Adulto";
    return "Sem categoria";
  }

  calculaIMC() {
    if (!this.altura || this.altura <= 0) return 0;
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    const notas = Array.isArray(this.notas) ? [...this.notas] : [];
    if (notas.length <= 2) {
      if (notas.length === 0) return 0;
      const soma = notas.reduce((s, n) => s + n, 0);
      return soma / notas.length;
    }

    notas.sort((a, b) => a - b);
    const notasFiltradas = notas.slice(1, notas.length - 1);
    const soma = notasFiltradas.reduce((s, n) => s + n, 0);
    const media = soma / notasFiltradas.length;
    return media;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.categoria;
  }

  obtemIMC() {
    return this.imc;
  }

  obtemMediaValida() {
    return this.mediaValida;
  }

  imprimeDados() {
    const notasTexto = this.notas.join(",");
    const imcTexto = this.imc;
    const mediaFormatada = typeof this.mediaValida === "number"
      ? this.mediaValida.toFixed(8).replace(".", ",")
      : this.mediaValida;

    console.log(`Nome: ${this.obtemNomeAtleta()}`);
    console.log(`Idade: ${this.obtemIdadeAtleta()}`);
    console.log(`Peso: ${this.obtemPesoAtleta()}`);
    console.log(`Altura: ${this.obtemAlturaAtleta()}`);
    console.log(`Notas: ${notasTexto}`);
    console.log(`Categoria: ${this.obtemCategoria()}`);
    console.log(`IMC: ${imcTexto}`);
    console.log(`Média válida: ${mediaFormatada}`);
  }
}

const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

atleta.imprimeDados();
