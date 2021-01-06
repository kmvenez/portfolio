import React from 'react'

function Portfolio (props) {
  return (
    <div>
      <br/><h1><b>General Assembly Projects</b></h1>
      <p>Please note if prompted, <b>dummy login info:</b> user - katie@katie.com, PW - katie</p>
      <div className="card-deck">
        <div className="card">
          <img src="https://i.imgur.com/uD7JOxI.png" className="img-fluid" alt="screenshot of login page"></img>
          <div className="card-body">
            <h5 className="card-title"><b>Project One (Capstone)</b></h5>
            <p className="card-text"><b>Summary:</b> Merchzoid was created with user needs at the top of the list. With a few clicks of a button, upload your old merch and pocket the spare change.</p>
            <p><b>Tech:</b> React, React Router, Bootstrap, Heroku, Express, MongoDB, IntelliTicks, Javascript, HTML, SCSS.</p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://kmvenez.github.io/merchzoid-client/#/">GitHub: Merchzoid Live</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kmvenez/merchzoid-client">GitHub: Merchzoid Client-Side Repo</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kmvenez/merchzoid-api">GitHub: Merchzoid API-Side Repo</a></p>
          </div>
        </div>

        <div className="card">
          <img src="https://i.imgur.com/gra5PhU.png" className="img-fluid" alt="screenshot of login page"></img>
          <div className="card-body">
            <h5 className="card-title"><b>Project Two (Team)</b></h5>
            <p className="card-text"><b>Summary:</b> Reviewflix is your one-stop-shop for all things Netflix.  View fellow film junkie’s thoughts who already took the time to watch that show or movie before you.</p>
            <p><b>Tech:</b> React, React Router, Express, Heroku, MongoDB, Javascript, HTML, SCSS.</p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://did-you-restart.github.io/reviewflix-client/#/">GitHub: REVIEWFLIX Live</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kmvenez/reviewflix-client">GitHub: REVIEWFLIX Client-Side Repo</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kmvenez/reviewflix-api">GitHub: REVIEWFLIX API-Side Repo</a></p>
          </div>
        </div>

        <div className="card">
          <img src="https://i.imgur.com/iS3yVSi.png" className="img-fluid" alt="screenshot of login page"></img>
          <div className="card-body">
            <h5 className="card-title"><b>Project Three</b></h5>
            <p className="card-text"><b>Summary:</b> Running an animal shelter is hard enough as it is.  Running an animal shelter in a high traffic, Metropolitan area is even harder.  Meet info ark.io - the database that makes it easy to keep track of Fluffy, Fido and everyone in between.</p>
            <p><b>Tech:</b> Express, MongoDB, jQuery, Javascript, HTML, SCSS.</p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://kmvenez.github.io/info-ark-client/">GitHub: info ark.io Live</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kmvenez/info-ark-client">GitHub: info ark.io Client-Side Repo</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kmvenez/info-ark-api">GitHub: info ark.io API-Side Repo</a></p>
          </div>
        </div>

        <div className="card">
          <img src="https://i.imgur.com/xBTDVso.png" className="img-fluid" alt="screenshot of login page"></img>
          <div className="card-body">
            <h5 className="card-title"><b>Project Four</b></h5>
            <p className="card-text"><b>Summary:</b> Remember when playing Tic-Tac-Toe was the most stressful part of your day? Yeah, me too.  Nostalgia meets functionality in this 80s Arcade-themed version of the classic.</p>
            <p><b>Tech:</b> Javascript, HTML, CSS, jQuery.</p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://kmvenez.github.io/tictactoe-client/">GitHub: Tic-Tac-Toe (80s Arcade)</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kmvenez/tictactoe-client">GitHub: info ark.io Client-Side Repo</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
