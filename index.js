

const express = require("express");
const axios = require('axios');
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/products", async (req, res) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  res.json(data);
});


// هون منعمل سيرفر
app.listen(5000, () => {
  console.log("Server is working on port 5000");
});














// const express = require("express");
// const axios = require('axios')
// const app = express();

// const cores = require("cors");
// app.use(cores());

// app.get("/products", async (req, res) => {
//   const responseData = await fetch("https://fakestoreapi.com/products");
//   const data = await responseData.json();
//   res.json(data);
//   // res.json(data)
// });

// // هون شغلنا السيرفر اول شي سويناه
// app.listen(5000, () => {
//   console.log("server is working");
// });

// const express = require('express')

// const app = express()

// app.get('/products', (req, res) => {
//     res.json({name:'number1'});
// });

// // هون شغلنا السيرفر اول شي سويناه
// app.listen(3000, ()=>{
// console.log('server is working')
// })
