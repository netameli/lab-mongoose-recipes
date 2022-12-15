const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
      Recipe.create({ title, level, ingredients, cuisine, dishType, image, duration, creator, created } )
      console.log(title)
  })
  
  Recipe.findOneAndUpdate(query, { title: 'Rigatoni alla Genovese' }, options, callback)
  Recipe.findOneAndUpdate(query, { $set: { duration: '100' }}, options, callback)
  Recipe.deleteOne({ title: 'Carrot Cake' })
  .then(successCallback)
  .catch(errorCallback);
   
    mongoose.connection.close();
    
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
