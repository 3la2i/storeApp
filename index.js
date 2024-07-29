
const express = require('express')

const app = express()



app.get('/products', async (req, res) => {
    const responseData = await fetch('https://fakestoreapi.com/products');
    const data = await responseData.json();
    res.json(data)
});





// هون شغلنا السيرفر اول شي سويناه
app.listen(3000, ()=>{
console.log('server is working')
})












// const express = require('express')

// const app = express()



// app.get('/products', (req, res) => {
//     res.json({name:'number1'});
// });





// // هون شغلنا السيرفر اول شي سويناه
// app.listen(3000, ()=>{
// console.log('server is working')
// })