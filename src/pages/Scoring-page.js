import React, { Component } from 'react'
import { players } from '../Data'

export default class Scoring extends Component {

  render() {

    const contestants = players.map((player,index) => {
      return (
        <li>
          <span>{player.firstName} {player.lastName}</span>
          <label for={`${player.lastName}kiss`}></label>
          <input
            type="number"
            id={`${player.lastName}kiss`}
            name={`${player.lastName}kiss`}
          />
          <label for={`${player.lastName}chaos`}></label>
          <input
            type="number"
            id={`${player.lastName}chaos`}
            name={`${player.lastName}chaos`}
          />
          <label for={`${player.lastName}service`}></label>
          <input
            type="number"
            id={`${player.lastName}service`}
            name={`${player.lastName}service`}
          />
        </li>
      )
    })


    return (
      <ul>
        <li className="li-categories-label">
          Categories
        </li>
        <li className="li-categories">
          <span className="categories-contestant-label">Contestant</span>
          <span className="categories-kiss-label">Kiss</span>
          <span className="categories-Chaos-label">Chaos Points</span>
          <span className="categories-service-label">Service</span>
        </li>
      {contestants}

      </ul>
    )
  }
}