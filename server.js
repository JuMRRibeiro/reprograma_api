const app = require('./src/app')
const port = 3333

app.listen(port, function(){
    console.log(`app esta rodando na porta ${port}`)
})