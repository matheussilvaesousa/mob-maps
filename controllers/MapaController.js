const mapaController = {
    viewFormMapa: (req, res) => {
        res.render('mapa', { title: 'Mapa'})
    },
    viewFormEnviarProblema: (req, res) => {
        res.render('mapaEnviarProblema', { title: 'Enviar Problema' })
    }
}

module.exports = mapaController
