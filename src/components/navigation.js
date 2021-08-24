import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'


export default function Nav() {

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <Link className="nav-link" to="/main">
          Main
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/scoring">
          Scoring
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/standings">
          Standings
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/admin">
          Administrative
        </Link>
      </li>
    </ul>
  )
}