import path from 'path';
import express from 'express';

var app = express();
var avatarsDir = path.join(path.dirname(import.meta.url), 'avatars');
console.log(avatarsDir);

app.use(express.static('avatars'));

app.listen(4000, function () {
    console.log('Listening on http://localhost:4000/');
});