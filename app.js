const express=require('express'); 
const  mongoose =require("mongoose") 
const dotenv =require('dotenv') 
const cors = require('cors') 
const app = express();
app.use(express.json());         
//config dotenv  
dotenv.config() 
const categorieRouter = require('./routes/categorie.route.js')  
 app.use('/api/categories', categorieRouter);

//Les cors  
app.use(cors()) 
//BodyParser Middleware 
app.use(express.json());  
// Connexion à la base données 
mongoose.connect(process.env.databasecloud) 
.then(() => {console.log("DataBase Successfully Connected");}) 
.catch(err => { console.log("Unable to connect to database", err); 
process.exit(); }); 
// requête    
app.get("/",(req,res)=>{ 
res.send("bonjour");
}); 
app.listen(process.env.PORT, () => { 
console.log(`Server is listening on port ${process.env.PORT}`); }); 
module.exports = app; 