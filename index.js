'use-strict';

const prpl = require('prpl-server');
const express = require('express');
const fs = require('fs');

const app = express();

let polymerCfg = JSON.parse(fs.readFileSync("build/polymer.json"));

// app.get('/api/launch', (req, res, next) => res.send('boom'));

app.get('/*', prpl.makeHandler("build", polymerCfg));

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=> {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});