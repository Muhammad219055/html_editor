import express from 'express';
import cors from 'cors'
const app = express();
const PORT = 4000;

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'], 
    credentials: true, 
  };

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions))


// Set the view engine to EJS
app.set('view engine', 'ejs');
let htmlCode = null

app.get("/", (req, res) => {
    res.render("index",{
        code:htmlCode
    });
});

app.post('/compile', (req, res) => {
    htmlCode = req.body.code;  
    res.render('index', {
        code: htmlCode
    });
});

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});
