const express = require ('express'); 
const fs = require('fs').promises;

const path = require('path');
const app = express();

// Servir les fichiers statiques à partir de 'src/vue/js'
app.use('/js', express.static(path.join(__dirname, '../vue/js')));

app.get('/', async (req, res) => {

    try {
      res.send(await lireFichier('./index.html'));
    }
    catch (err) {
      console.error(err);
      res.status(500).send('Error reading file'); 
    }
});

app.get('/:fichier', async (req, res) =>{

    const { fichier } = req.params;

    if (fichier === "favicon.ico"){return;}

    try {
        res.send(await lireFichier(`../vue/${fichier}.html`));
    }
    catch (err){
        console.error(err);
        res.status(500).send('Error reading file');
    }
});

async function lireFichier(url){
    return await fs.readFile(url, 'utf8');
}

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});