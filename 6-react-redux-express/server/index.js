import express from 'express'
import path from 'path'

let app = express();

app.get('/*', (req, res) => {
    res.sendfile(path.join(__dirname, './index.html'));
    //res.send('hello world');
}); 

app.listen(3000, () => console.log('Runnign on localhost:3000'));