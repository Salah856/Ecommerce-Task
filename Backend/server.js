const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const PORT = 3000;
const cors = require('cors'); 

// routes 
// authentication routes 
const authRoutes = require('./routes/authRoutes'); 
const categoriesRoutes = require('./routes/categoriesRoutes'); 
const usersRoutes = require('./routes/usersRoutes'); 


//  app.use(express.static(__dirname + '/public'));

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// here is middleware logic !!!!!!!!!!!!!!!!!!  access control in controllers 
app.use('./api/auth', authRoutes); 
app.use('/api/categories', categoriesRoutes);  
app.use('/api/users ', usersRoutes  );


app.use('/', function (req, res) {
    res.status(200).send("hello everst minds !!"); 
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
}); 


