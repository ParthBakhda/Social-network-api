
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });


  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
  const port = 3000; // Replace with the desired port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const userController = require('./controllers/userController');
const thoughtController = require('./controllers/thoughtController');
const reactionController = require('./controllers/reactionController');
const friendshipController = require('./controllers/friendshipController');

// Define the routes
app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// Define more routes for thoughts, reactions, and friendships
``

