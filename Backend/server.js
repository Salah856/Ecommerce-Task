const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const PORT = 3000;
const cors = require('cors'); 

// routes 
const adminRoutes = require('./routes/adminRoutes'); 
const userRoutes = require('./routes/userRoutes'); 

//  app.use(express.static(__dirname + '/public'));
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/admin', adminRoutes );  
app.use('/api/users ', userRoutes ); 

app.use('/', function (req, res) {
    res.status(200).send("hello everst minds !!"); 
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
}); 


