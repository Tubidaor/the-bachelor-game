import React, { Component } from 'react'
import { players } from '../Data'
import './administrative-page.css'

export default class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contestants: []
    }
  }
  componentDidMount() {
    const availableContestants = players

    this.setState({
      contestants: availableContestants
    })
  }
  render() {

    // function loadContestants(contenstants) {
    //   const contestants = []
    //   for(let i = 0; i < contenstants.length; i++) {
    //     const row = <li>
    //       <span>
    //         {contestants.firstName}
    //         {contestants.lastName}
    //       </span>
    //     </li>
    //     contenstants.push(row)
    //   }
    //   return contenstants
    // }
    const loadContestants = this.state.contestants.map((contestant, index) => 
      <li className="admin-contestant-li">
        <div className="admin-contestant-name">
          <span>
            {contestant.firstName}
            &nbsp;
            {contestant.lastName}
          </span>
        </div>
        <div className="admin-contestant-categories">
          <label for={`${contestant.id}-bachelor-ett-proposes`}>
            <input
              type="checkbox"
              id={`${contestant.id}-bachelor-ett-proposes`}
              name={`${contestant.id}-bachelor-ett-proposes`}
            />
          </label>
          <label for={`${contestant.id}-sex-confirmed`}>
            <input
              type="checkbox"
              id={`${contestant.id}-sex-confirmed`}
              name={`${contestant.id}-sex-confirmed`}
            />
          </label>
          <label for={`${contestant.id}-bachelor-ett-says-iloveyou`}>
            <input
              type="checkbox"
              id={`${contestant.id}-bachelor-ett-says-iloveyou`}
              name={`${contestant.id}-bachelor-ett-says-iloveyou`}
            />
          </label>
          <label for={`${contestant.id}-physical-altercation`}>
            <input
              type="checkbox"
              id={`${contestant.id}-physical-altercation`}
              name={`${contestant.id}-physical-altercation`}
            />
          </label>
          <label for={`${contestant.id}-oneonone-date`}>
            <input
              type="checkbox"
              id={`${contestant.id}-oneonone-date`}
              name={`${contestant.id}-oneonone-date`}
            />
          </label>
          <label for={`${contestant.id}-pre-ceremony-rose`}>
            <input
              type="checkbox"
              id={`${contestant.id}-pre-ceremony-rose`}
              name={`${contestant.id}-pre-ceremony-rose`}
            />
          </label>
          <label for={`${contestant.id}-destroys-property`}>
            <input
              type="checkbox"
              id={`${contestant.id}-destroys-property`}
              name={`${contestant.id}-destroys-property`}
            />
          </label>
          <label for={`${contestant.id}-Rose`}>
            <input
              type="checkbox"
              id={`${contestant.id}-Rose`}
              name={`${contestant.id}-Rose`}
            />
          </label>
          <label for={`${contestant.id}-interrupts-alone-time`}>
            <input
              type="checkbox"
              id={`${contestant.id}-interrupts-alone-time`}
              name={`${contestant.id}-interrupts-alone-time`}
            />
          </label>
          <label for={`${contestant.id}-drunk`}>
            <input
              type="checkbox"
              id={`${contestant.id}-drunk`}
              name={`${contestant.id}-drunk`}
            />
          </label>
          <label for={`${contestant.id}-talks-about-contestant`}>
            <input
              type="checkbox"
              id={`${contestant.id}-talks-about-contestant`}
              name={`${contestant.id}-talks-about-contestant`}
            />
          </label>
          <label for={`${contestant.id}-group-date`}>
            <input
              type="checkbox"
              id={`${contestant.id}-group-date`}
              name={`${contestant.id}-group-date`}
            />
          </label>
          <label for={`${contestant.id}-bachelor-ett-could-see-themselves-with-contestant`}>
            <input
              type="checkbox"
              id={`${contestant.id}-bachelor-ett-could-see-themselves-with-contestant`}
              name={`${contestant.id}-bachelor-ett-could-see-themselves-with-contestant`}
            />
          </label>
          <label for={`${contestant.id}-refers-to-sexual-anatomy`}>
            <input
              type="checkbox"
              id={`${contestant.id}-refers-to-sexual-anatomy`}
              name={`${contestant.id}-refers-to-sexual-anatomy`}
            />
          </label>
          <label for={`${contestant.id}-oneonone-time-group`}>
            <input
              type="checkbox"
              id={`${contestant.id}-oneonone-time-group`}
              name={`${contestant.id}-oneonone-time-group`}
            />
          </label>
          <label for={`${contestant.id}-parent-take-home-category-one`}>
            <input
              type="checkbox"
              id={`${contestant.id}-parent-take-home-category-one`}
              name={`${contestant.id}-parent-take-home-category-one`}
            />
          </label>
          <label for={`${contestant.id}-parent-take-home-category-two`}>
            <input
              type="checkbox"
              id={`${contestant.id}-parent-take-home-category-two`}
              name={`${contestant.id}-parent-take-home-category-two`}
            />
          </label>
          <label for={`${contestant.id}-cries-in-limo`}>
            <input
              type="checkbox"
              id={`${contestant.id}-cries-in-limo`}
              name={`${contestant.id}-cries-in-limo`}
            />
          </label>
          <label for={`${contestant.id}-fights-with-bachelor-ett`}>
            <input
              type="checkbox"
              id={`${contestant.id}-fights-with-bachelor-ett`}
              name={`${contestant.id}-fights-with-bachelor-ett`}
            />
          </label>
          <label for={`${contestant.id}-is-too-sensitive`}>
            <input
              type="checkbox"
              id={`${contestant.id}-is-too-sensitive`}
              name={`${contestant.id}-is-too-sensitive`}
            />
          </label>
          <label for={`${contestant.id}-says-iloveyou`}>
            <input
              type="checkbox"
              id={`${contestant.id}-says-iloveyou`}
              name={`${contestant.id}-says-iloveyou`}
            />
          </label>
          <label for={`${contestant.id}-leave-outside-rose-ceremony`}>
            <input
              type="checkbox"
              id={`${contestant.id}-leave-outside-rose-ceremony`}
              name={`${contestant.id}-leave-outside-rose-ceremony`}
            />
          </label>
        </div>
      </li>
    )

    return(
      <div>
        <h1>Administrative page</h1>
        <h2>week 1</h2>
        <div>
          Legend
          <ul>
            <li>
              Bachelor-ett Proposes (BPS)
            </li>
            <li>
              Confirmed Sex (SEX)
            </li>
            <li>
              
            </li>
            <li>
            
            </li>
            <li>
              
            </li>
            <li>
            
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>

          </ul>
        </div>
        <ul>
        <li className="admin-contestant-li">
        <div className="admin-contestant-name">
          <span>
           Contestants
          </span>
        </div>
        <div className="admin-contestant-categories">
          <div className="category-column-label">

          </div>
          <label for={`-sex-confirmed`}>
  
          </label>
          <label for={`-bachelor-ett-says-iloveyou`}>
    
          </label>
          <label for={`-physical-altercation`}>

  
          </label>
          <label for={`-oneonone-date`}>
    
          </label>
          <label for={`-pre-ceremony-rose`}>
      
          </label>
          <label for={`-destroys-property`}>
    
          </label>
          <label for={`-Rose`}>
    
          </label>
          <label for={`-interrupts-alone-time`}>
    
          </label>
          <label for={`-drunk`}>
    
          </label>
          <label for={`-talks-about-contestant`}>
  
          </label>
          <label for={`-group-date`}>
  
          </label>
          <label for={`-bachelor-ett-could-see-themselves-with-contestant`}>
  
          </label>
          <label for={`-refers-to-sexual-anatomy`}>
 
          </label>
          <label for={`-oneonone-time-group`}>
  
          </label>
          <label for={`-parent-take-home-category-one`}>

          </label>
          <label for={`-parent-take-home-category-two`}>

          </label>
          <label for={`-cries-in-limo`}>
 
          </label>
          <label for={`-fights-with-bachelor-ett`}>
    
          </label>
          <label for={`-is-too-sensitive`}>
  
          </label>
          <label for={`-says-iloveyou`}>

          </label>
          <label for={`-leave-outside-rose-ceremony`}>

          </label>
        </div>
        </li>
          {loadContestants}
        </ul>
      </div>
    )
  }
}