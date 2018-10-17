const express = require('express')
const router = express.Router()
const mysql = require('mysql')

router.get('/users/', (req, res) => {

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '@#1234',
        database: 'estagio'
    });

    connection.connect();

    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        res.send(results)
    });

    connection.end();
    connection = null;
})

router.get('/users/new', (req, res) => {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '@#1234',
        database: 'estagio'
    });

    connection.connect();
    res.json(req.query)
    connection.query(`INSERT INTO users (username, email, password, displayname, usertype_id) VALUES ('${req.query.username}','${req.query.email}','${req.query.password}','${req.query.displayname}',${req.query.usertype_id})`, (error, results) => {
        if (error) throw error;
        console.log(results)
        res.json(results)
    });

    connection.end();
    connection = null;

})


module.exports = router