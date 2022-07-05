const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 3000

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors());
    next();
});

app.post('/somar', (req, res) => {
    res.status(200)
    const result = req.body.firstNumber + req.body.secondNumber

    return res.json({
        'result': result
    })

});

app.post('/subtrair', (req, res, next) => {
    res.status(200)
    const result = req.body.firstNumber - req.body.secondNumber

    return res.json({
        'result': result
    })
})

app.post('/multiplicar', (req, res, next) => {
    res.status(200)
    const result = req.body.firstNumber * req.body.secondNumber

    return res.json({
        'result': result
    })
    
})

app.post('/dividir', (req, res) => {
    res.status(200)
    const result = req.body.firstNumber / req.body.secondNumber

    return res.json({
        'result': result
    })

})

app.all('*', (req, res) => {
    res.status(404)
    return res.json({
        'error': 'Page not found.'
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))