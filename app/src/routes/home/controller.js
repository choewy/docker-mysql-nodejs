"use strict";

const connection = require('../../models/Connection');

// RENDER CONTROLLER
const render = {
    home: (req, res) => {
        const repo = "https://github.com/choewy/docker-mysql-nodejs";
        return res.send(`<h1>Welcome!</h1>
        <a href="${repo}">GitHub Repository</a>`);
    }
};

// PROCESS CONTROLLER
const process = {};

module.exports = { render, process };