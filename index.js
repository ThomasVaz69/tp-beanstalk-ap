const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(''Mise à jour automatique via AWS CodePipeline ! 🎉'');
});

app.listen(port, () => {
    console.log(`Application en cours d'exécution sur le port ${port}`);
});
