const alunas = require('../model/alunas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}
exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 17 || id <= 0) {
        res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")//qualquer site
    }
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna) {
        res.send("Não encontrei essa aluna!")
    }
    const livrosAluna = aluna.livros
    const livrosLidos = livrosAluna.filter(livro => livro.leu == "true")
    const tituloLivros = livrosAluna.reduce(livro => livro.titulo)
    res.status(200).send(livrosLidos)
}

exports.getSp = (req, res) => {
    const Sp = alunas.filter(nasceuSp => nasceuSp.nasceuEmSp == "true")
    const nomesSp = []
    Sp.map(aluna => nomesSp.push(aluna.nome))
    res.status(200).send(nomesSp)
}


