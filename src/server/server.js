const express = require ('express'); 
const fs = require('fs').promises;

const app = express();

// src/vue/test.html

// Ajouter une route de base
app.get('/', async (req, res) => {

    try {
      const data = await fs.readFile('./index.html', 'utf8'); 
      res.send(data); 
    }
    catch (err) {
      console.error(err);
      res.status(500).send('Error reading file'); 
    }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
