import React from 'react'

function Portfolio (props) {
  return (
    <div className="container">

      <br/><h1 id="name">General Assembly Projects</h1>
      <p><i>Note: if promoted, dummy login info is - user: katie@katie.com, PW: katie</i></p>
      <div className="row row-cols-1">

        <div className="col">
          <h2>Project One (Capstone)</h2>
          <p>The first of its kind - Merchzoid was created with user needs at the top of the list. With a few clicks of a button, upload your old merch and pocket the spare change. Utilizing a secure Stripe connection, youll never have to think twice about your information - its in safe hands (our rock hands, that is.)</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://kmvenez.github.io/merchzoid-client/#/">Merchzoid</a></p><br/>
          <img src="https://i.imgur.com/uD7JOxI.png" className="img-fluid" alt="Responsive image"></img>
        </div>

        <div className="col">
          <h2>Project Two</h2>
          <p>Have you ever wished you could get those 30 minutes back after watching a new show on Netflix? Why not save them in the first place? Reviewflix is your one-stop-shop for all things Netflix.  View fellow film junkie’s thoughts who already took the time to watch that show or movie before you.
          </p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://did-you-restart.github.io/reviewflix-client/#/">REVIEWFLIX</a></p><br/>
          <img src="https://i.imgur.com/gra5PhU.png" className="img-fluid" alt="Responsive image"></img>
        </div>

        <div className="col">
          <h2>Project Three</h2>
          <p>Running an animal shelter is hard enough as it is.  Running an animal shelter in a high traffic, Metropolitan area is even harder.  Meet info ark.io - the database that makes it easy to keep track of Fluffy, Fido and everyone in between.  We do the leg work so you can save time and boop some noses.</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://kmvenez.github.io/info-ark-client/">info ark.io</a></p><br/>
          <img src="https://i.imgur.com/iS3yVSi.png" className="img-fluid" alt="Responsive image"></img>
        </div>

        <div className="col">
          <h2>Project Four</h2>
          <p>Remember when playing Tic-Tac-Toe was the most stressful part of your day? Yeah, me too.  Nostalgia meets functionality in this 80s Arcade-themed version of the classic.</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://kmvenez.github.io/tictactoe-client/">Tic-Tac-Toe (80s Arcade)</a></p><br/>
          <img src="https://i.imgur.com/xBTDVso.png" className="img-fluid" alt="Responsive image"></img><br/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
