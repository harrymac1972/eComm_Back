

// const sequelize = require('./config/connection');
// const { Category, Product } = require('./models/Category');


const express = require('express');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// TEMP put POST here to put a bit of data to confirm connection, etc.
// (look up Ali's FROM SCRATCH demonstration)

// app.post('/category/new/',async(req,res) => {
//   try {
//     const category_new = await Category.create(req.body);
//     res.status(200).json(category_new);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });



app.use(routes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
