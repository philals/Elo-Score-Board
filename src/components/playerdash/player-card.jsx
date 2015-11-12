import React from 'react';
import Firebase from 'firebase';
import FirebaseLib from '../../utils/FirebaseLib.js';
import utils from '../../utils/utilities.js';


import { Link } from 'react-router';

module.exports = React.createClass( {

  componentWillMount() {
    this.firebase = new FirebaseLib();
  },

  render() {
    const { name, image, league, score, topScore, wins, losses,
                id, bottomScore, streak, bestStreak, worstStreak} = this.props.player;

    return (
        <div className="panel panel-default">
          <table className="table">
            <thead>
              <tr>
                <th><img src={image} className="img-circle img-thumbnail" />{name} - {league} League</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rating</td>
                <td>{score}</td>
              </tr>
              <tr>
                <td>Best Rating</td>
                <td>{topScore}</td>
              </tr>
              <tr>
                <td>Worst Rating</td>
                <td>{bottomScore}</td>
              </tr>
              <tr>
                <td>Current Streak</td>
                <td>{streak}</td>
              </tr>
              <tr>
                <td>Best Streak</td>
                <td>{bestStreak}</td>
              </tr>
              <tr>
                <td>Worse Streak</td>
                <td>{worstStreak}</td>
              </tr>
              <tr>
                <td>Losses</td>
                <td>{losses}</td>
              </tr>
              <tr>
                <td>Wins</td>
                <td>{wins}</td>
              </tr>
              <tr>
                <td>Percent</td>
                <td>        
              <span>{utils.percent(wins, losses)}%</span>
              </td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
});
