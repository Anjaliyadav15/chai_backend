require('dotenv').config();
console.log('Hello, world!');
const express = require('express');
const app = express(); //app is a variable made using express by writing const express = require('express') we have acquired express;
const port = 3000;
//the below code shows a .get method which is used to send a response to the client when the client requests the server. req is request and res is response.
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.get('/twitter',(req,res)=>{
  res.send('<h1>Welcome to Twitter</h1>');
})
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});