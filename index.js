const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Bienvenue sur Elastic Beanstalk !');
});

app.listen(port, () => {
    console.log(`Application en cours d'exécution sur le port ${port}`);
});
