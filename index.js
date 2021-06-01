const express=require('express')
require('dotenv').config();
bodyParser = require('body-parser');
const mongoose=require('mongoose')
const uri=process.env.DB
const app=express().use(express.static(__dirname + '/'));
var cors = require('cors')
const itemController=require(__dirname+'/Controllers/ItemController')
app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})

app.use(express.urlencoded({ extended: true }))

mongoose.connect(uri,
    { useNewUrlParser: true, 
      useUnifiedTopology: true}
    )
.then(console.log("Connected to DB"))
.catch(err=>console.log(err));

app.get('/',(req,res)=>{
  itemController.GetAll
})


const itemRouter=require(__dirname + '/Routes/Item_routes')
itemRouter.routesConfig(app);
