import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from "meteor/meteor";
import {Players, calculatePlayerPositions} from "../imports/api/player";
import {Tracker} from "meteor/tracker";
import App from "../imports/ui/App";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let positionPlayer = calculatePlayerPositions(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionPlayer} />, document.getElementById('app'));
  });
});

