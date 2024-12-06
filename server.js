const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

// Servir les fichiers statiques
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/ressources', express.static(path.join(__dirname, 'ressources')));
//app.use('/js', express.static(path.join(__dirname, 'ressources/js')));

app.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'src/map/map.html');
    const contenu = await fs.readFile(filePath, 'utf8');
    res.send(contenu);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading file');
  }
});

app.get('/:fichier', async (req, res) => {
  const { fichier } = req.params;

  if (fichier === "favicon.ico") {
    return;
  }

  const filePath = path.join(__dirname, 'src', fichier);

  try {
    const contenu = await fs.readFile(filePath, 'utf8');
    res.send(contenu);
  } catch (err) {
    console.error(err);
    res.status(404).send('File not found');
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
