import express from 'express';
import path from 'path';

const app : express.Application = express();

const portti : number = Number(process.env.PORT) || 3101;

app.use(express.static(path.resolve(__dirname, "public")));

app.get('/heippa', (req: express.Request, res : express.Response) : void => {

    let nimi : string = "";
    let email : string = "";
    let kayttoehdot : string = "";
    let virhe : string = "";

    if (typeof req.query.nimi === "string"
        && req.query.nimi != ""
        && typeof req.query.email === "string" 
        && req.query.email != ""
        && req.query.kayttoehdot === "hyvaksytty") {
        nimi = req.query.nimi;
        email = req.query.email;
        kayttoehdot = req.query.kayttoehdot;
        res.send(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <h1>Olet tilannut uutiskirjeemme onnistuneesti. Kiitos!</h1>`);
        } 
    if (req.query.nimi === ""){
        virhe = "Anna nimi!"
        res.send(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <h1>${virhe}</h1>`);
        } 
    if (req.query.email === ""){
        virhe = "Anna sähköpostiosoite!"
        res.send(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <h1>${virhe}</h1>`);   
         }
    if (req.query.kayttoehdot != "hyvaksytty"){
        virhe = "Hyväksy käyttöehdot!"
        res.send(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <h1>${virhe}</h1>`);
        }
});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin : ${portti}`);    

});