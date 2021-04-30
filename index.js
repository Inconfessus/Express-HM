const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan')
const app = express();
const pokemon = require('./routes/pokemon')
const user = require('./routes/user')


const auth = require('./middleware/auth')
const notfound = require('./middleware/notfound')
const index = require('./middleware/index')
const cors = require('./middleware/cors')

app.use(morgan('dev'));
app.use(express.json(app.use(express.urlencoded({ extended: true }))));


app.get("/", index)

app.use(cors);

app.use("/user", user);

app.use(auth);

app.use("/pokemon", pokemon);

app.use(notfound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...")
})