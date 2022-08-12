import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import route from './route/bookRoute.js';
import cors from 'cors';

const app = express();
const PORT = 4000;

//MONGO DB CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/projThetaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

route(app);

app.get('/', (req, res) => 
    res.send(`Application is started running on Port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Node Started Running on Port ${PORT}`)
);