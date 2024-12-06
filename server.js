const express = require ('express'); 
const fs = require('fs').promises;

const path = require('path');
const app = express();

// Servir les fichiers statiques à partir de 'src/vue/js'
app.use('/js', express.static(path.join(__dirname, 'ressources/js')));
app.use(express.static(path.join(__dirname, 'src'))); // Sert tout dans 'src'
app.use('/ressources', express.static(path.join(__dirname, 'ressources')));


app.get('/', async (req, res) => {

  try {
    
    res.send(await lireFichier('src/map/map.html'));
      
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
    res.send(await lireFichier(fichier));
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