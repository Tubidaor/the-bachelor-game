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
        <div className="admin-contestant-checkboxes">
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
          <ul className="legend-ul">
            <li className="legend-li">
              Bachelor-ett Proposes (BPS)
            </li>
            <li className="legend-li">
              Confirmed Sex (SEX)
            </li>
            <li className="legend-li">
              Bachelor-ett Says I Love You (BLY)
            </li>
            <li className="legend-li">
              Physical Altercation (PAL)
            </li>
            <li className="legend-li">
              One on One Date (OOO)
            </li>
            <li className="legend-li">
              Receives a Rose Pre-ceremony (PCR)
            </li>
            <li className="legend-li">
              Destroys Property (DPR)
            </li>
            <li className="legend-li">
              Receives a Rose (RRS)
            </li>
            <li className="legend-li">
              Interrupts Alone Time (IAT)
            </li>
            <li className="legend-li">
              DRUNK (DRK)
            </li>
            <li className="legend-li">
              Discusses Another Contestant (DAC)
            </li>
            <li className="legend-li">
              Group Date (GDT)
            </li>
            <li className="legend-li">
              Bachelor-ett says "I can see myself with them" (ISM)
            </li>
            <li className="legend-li">
              Refers to Sexual Anatomy (SXA)
            </li>
            <li className="legend-li">
              Group Setting 1 on 1 (GOO)
            </li>
            <li className="legend-li">
              Parent Take Home Category 1 (PTO)
            </li>
            <li className="legend-li">
            Parent Take Home Category 2 (PTT)
            </li>
            <li className="legend-li">
              Cries in Limo (CIL)
            </li>
            <li className="legend-li">
              Fights With Bachelor-ett (FWB)
            </li>
            <li className="legend-li">
              Is Too Sensitive (ITS)
            </li>
            <li className="legend-li">
              Contestant Says "I Love You" first (SIY)
            </li>
            <li className="legend-li">
              Leaves Outside of Rose Ceremony (LOR) 
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
              <span className="category-column-label">
                BPS
              </span>
              <span className="category-column-label">
                SEX
              </span>
              <span className="category-column-label">
                BLY
              </span>
              <span className="category-column-label">
                PAL
              </span>
              <span className="category-column-label">
                OOO
              </span>
              <span className="category-column-label">
                PCR
              </span>
              <span className="category-column-label">
                DPR
              </span>
              <span className="category-column-label">
                RRS
              </span>
              <span className="category-column-label">
                IAT
              </span>
              <span className="category-column-label">
                DRK
              </span>
              <span className="category-column-label">
                DAC
              </span>
              <span className="category-column-label">
                GDT
              </span>
              <span className="category-column-label">
                ISM
              </span>
              <span className="category-column-label">
                SXA
              </span>
              <span className="category-column-label">
                GOO
              </span>
              <span className="category-column-label">
                PTO
              </span>
              <span className="category-column-label">
                PTT
              </span>
              <span className="category-column-label">
                CIL
              </span>
              <span className="category-column-label">
                FWB
              </span>
              <span className="category-column-label">
                ITS
              </span>
              <span className="category-column-label">
                SIY
              </span>
              <span className="category-column-label">
                LOR
              </span>
            </div>
          </li>
          {loadContestants}
        </ul>
      </div>
    )
  }
}