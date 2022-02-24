"use strict";

const connection = require('../../models/Connection');

// RENDER CONTROLLER
const render = {};

// PROCESS CONTROLLER
const process = {
    users: (req, res) => {
        connection.query('SELECT * FROM users;', (error, rows) => {
            if (error) return res.json({ success: false, error });
            return res.json({ success: true, rows });
        })
    }
};

module.exports = { render, process };