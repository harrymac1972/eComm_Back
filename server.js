const express = require('express');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// TEMP put POST here to put a bit of data to confirm connection, etc.
// (look up Ali's FROM SCRATCH demonstration)


app.use(routes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
