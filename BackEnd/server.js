const app = require('./src/app');
require('dotenv').config(); // to load environment variables from the .env file
const connectDB = require('./src/DB/db');




connectDB();
app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})



module.exports = app;