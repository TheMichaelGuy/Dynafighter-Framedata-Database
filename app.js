//      CONST
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const Superuser = require('./models/Superuser');
const session = require('express-session');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dffddb2', 'root', 'H3x4Cy^nRed', {
  host: 'localhost',
  dialect: 'mysql'
});

const initModels = require('./models/init-models');
const models = initModels(sequelize);

//The models, modules, controllers, etc are giving me trouble
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'root',
  password: "H3x4Cy^nRed",
  database: "dffddb2"
});

//    DATABASE CONNECTION

db.connect((err) => {
  if (err) {
    throw err;//If it fails here, open task manager, go to Services, find MySQL, right click and hit start
  }
  console.log('Connected to MySQL');
});

// Sync models with database 
sequelize.sync() 
  .then(() => {
    console.log('Database synced'); })
  .catch(err => { 
    console.error('Unable to sync database:', err); 
});

///     USE

// Serve static files from the "public" directory 

app.use(express.static(path.join(__dirname, 'public')));
// Middleware to parse JSON bodies 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Session middleware
app.use(session({
  secret: 'H3x4Cy^nRed',
  resave: false,
  saveUninitialized: true
}));

///     GET

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

//      FRAME DATA

// Frame data page route
app.get('/frame-data', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'frame-data.html'));
});

// Now a route for each character
app.get('/frame-data/:characterName', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'databoard.html'));
});

/*// API endpoint for frame data
app.get('/api/frame-data/:characterName', async (req, res) => {
  const characterName = req.params.characterName;
  try {
    const frameData = await models.moveframedata.findAll({
      include: [{
        model: models.moveidentifier,
        where: { CharacterName: characterName }
      }]
    });
    res.json(frameData);
  } catch (err) {
    console.error('Error fetching frame data:', err);
    res.status(500).json({ error: err.message });
  }
});*/

app.get('/api/move-search', async (req, res) => {
  const moveName = req.query.name;

  try {
    const moves = await models.moveidentifier.findAll({
      where: {
        name: moveName, // Adjust "name" to the actual column name in your database
      },
    });

    res.json(moves);
  } catch (err) {
    console.error('Error fetching moves:', err);
    res.status(500).json({ error: 'Failed to fetch moves' });
  }
});

const framedatadisplayRoutes = require('./routes/framedatadisplay')(sequelize);
app.use(framedatadisplayRoutes);

// Battle calculator page route
app.get('/battle-calculator', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'battle-calculator.html'));
});

// Now a route for each character
app.get('/battle-calculator/:characterName', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'battleboard.html'));
});

app.get('/battle-calculator-ruby/:characterName', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'battleboard.html'));
});

const battlecalculatorRoutes = require('./routes/battlecalculator')(sequelize);
app.use(battlecalculatorRoutes);

// Move search page route
app.get('/move-search', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'move-search.html'));
});

///     ADMIN

// Login route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Handle login
app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  const superuser = await Superuser.findOne({ where: { username } });
  if (superuser && password === superuser.password) {
    req.session.superuser = superuser;
    res.redirect('/admin/dashboard');
  } else {
    res.send('Invalid username or password');
  }
});

// Admin dashboard route
app.get('/admin/dashboard', (req, res) => {
  if (req.session.superuser) {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
  } else {
    res.redirect('/admin');
  }
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

///     DATA TABLES & ROUTING

const moveidentifierRoutes = require('./routes/moveidentifier')(sequelize);//This line here seemed to have finally made things work
app.use(moveidentifierRoutes);

const moveframedataRoutes = require('./routes/moveframedata.js')(sequelize);//This line here seemed to have finally made things work
app.use(moveframedataRoutes);

const movementRoutes = require('./routes/movement')(sequelize);//This line here seemed to have finally made things work
app.use(movementRoutes);

const movestatsRoutes = require('./routes/movestats')(sequelize);//This line here seemed to have finally made things work
app.use(movestatsRoutes);

const movestatsrubyRoutes = require('./routes/movestatsruby')(sequelize);//This line here seemed to have finally made things work
app.use(movestatsrubyRoutes);

const movesearchRoutes = require('./routes/movesearch')(sequelize); //This ones for movesearch stuff
app.use(movesearchRoutes);


app.use('/js', express.static(path.join(__dirname, 'public/js'), {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  }
}));

///     LISTEN

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
