import express from 'express';

var app = express();

app.use(express.static('src/images'));

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:/${port}`);
});