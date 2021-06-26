import express from 'express';
import {startGame, mov} from './Game.js';

const app  = express();

app.listen(process.env.PORT || 3001, () =>{
    console.log('Start ...');
});

app.get('/', (req, res)=>{
    let getheaders = new URLSearchParams(req.url.substring(1));
    const turno = getheaders.get("turno");
    const estado = getheaders.get("estado");
    console.log("Turno en matriz " + turno);
    console.log("Estado en matriz " + estado);

    startGame()

    res.send(mov);

});
