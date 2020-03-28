const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        "evento": 'Semana onistack 11',
        "aluno": 'lucas'
    })
});

app.listen(3333);