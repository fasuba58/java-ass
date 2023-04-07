const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const profileData = {
        name: 'Fasuba',
        age: 95,
        profession: 'Architect',
        location: 'Lagos, Nigeria'
      };
  res.render('index', {profileData});
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});