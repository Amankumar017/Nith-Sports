const express = require('express');
const app = express();
const getTournamentData = require('./db');


app.get('/TournamentData', function(req, res) {
  getTournamentData(function(data) {
    res.render('TournamentData', { tournamentData: data });
  });
});
