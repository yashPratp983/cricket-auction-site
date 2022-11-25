const cors = require('cors');

const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
app.use(express.json())
var http = require("http");
app.use(cors());

app.use((error, req, res, next) => {
    res.status(500).send({
        status: false,
        error: error
    })
    next()
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cricket_auction'
});

connection.connect(function (error) {
    if (!!error) console.log(error);
    else console.log('Database Connected!');
});


app.get('/user', (req, res, next) => {

    let sql = "SELECT * FROM user";
    let query = connection.query(sql, (err, rows) => {
        if (err) next(err);
        res.send(rows);

    });
});

app.get('/team', (req, res, next) => {

    let sql = "SELECT * FROM team";
    let query = connection.query(sql, (err, rows) => {
        if (err) next(err);
        res.send(rows);

    });
});

app.get('/unsoldplayers', (req, res, next) => {

    let sql = "SELECT * FROM unsold_players";
    let query = connection.query(sql, (err, rows) => {
        if (err) next(err);
        res.send(rows);
    });

});

app.get('/soldplayers', (req, res, next) => {

    let sql = "SELECT * FROM sold_players";
    let query = connection.query(sql, (err, rows) => {
        if (err) next(err);
        res.send(rows);
    });
});
let price;
app.post('/unsoldplayers', (req, res) => {

    const user = req.body;
    console.log(user);
    price = user.base_price;
    let sql = `DELETE from unsold_players where player_id= ?`;

    connection.query(sql, [user.num], (err, rows) => {
        if (err) next(err);
        res.send(rows);
    });
});

app.post('/soldplayers', (req, res, next) => {

    const user = req.body;
    // res.send(user);
    console.log(user);
    // let sql = `INSERT into sold_players (player_id,player_name,type,runs,wickets,no_of_matches,team_name,nationality) VALUES (${user.player_id},${user.player_name},${user.type},${user.runs},${user.wickets},${user.no_of_matches},${user.team_name},${user.nationality});`;
    let sql = `INSERT into sold_players (player_id,player_name,type,runs,wickets,no_of_matches,team_name,nationality) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;

    connection.query(sql, [user.player_id, user.player_name, user.type, user.runs, user.wickets, user.no_of_matches, user.team_name, user.nationality], (err, rows) => {
        console.log(err)
        return res.status(200).json(rows);
    });
});

app.post('/update', (req, res, next) => {

    const user = req.body;

    console.log(user)
    let sql = `UPDATE team set balance = balance - ? Where team_id = ?;`;
    let query = connection.query(sql, [user.base_price, user.team_id], (err, rows) => {
        if (err) next(err);
        res.send(rows);
    });
});



app.listen(3001, () => {
    console.log('Server is running at port 3001');
});

