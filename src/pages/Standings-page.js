import React, { Component } from 'react'
import { teams } from '../Data'

export default class Standings extends Component {

  render() {
    const arrangeStandings = teams.sort(
      (a,b) => {
        return b.totalScore - a.totalScore
      }
    )

    const standings = arrangeStandings.map((teams, index) => 
      <tr>
        <td>
          {index+1}
        </td>
        <td>
          {teams.owner}
        </td>
        <td>
          {teams.teamName}
        </td>
        <td>
          {teams.totalScore}
        </td>
      </tr>

    )

    return (
      <div>
        <h1>Standings</h1>
        <table>
          <tbody>
            <tr>
              <td><span> Rank </span></td>
              <td><span> Owner </span></td>
              <td><span> Team </span></td>
              <td><span> Score </span></td>
            </tr>
            {standings}
          </tbody>
        </table>
      </div>
    )
  }
}