import React from 'react'
import Card from 'react-bootstrap/Card'

function Home (props) {
  return (
    <div>
      <img src="https://i.imgur.com/ZhOGxki.png" className="img-fluid" id="homepage" alt="image of girl waving"></img>

      <h1>Hi, I’m Katie. 👋</h1>

      <p id="bio">I’m a former Shakespearean-trained actress turned Full-Stack Software Engineer (I studied at and completed the Software Engineering Immersive at General Assembly).  I’ve done everything from leading tours at Radio City Music Hall to tech recruiting for a startup acquired by Microsoft.  If you’re looking for someone who knows web development and the hiring process with technical expertise – let’s chat.</p>

      <div className="container">
        <div className="row row-cols-2">
          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body id="card">
                <Card.Title id="cardtitle1"><b>Front End Engineering </b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                </svg></Card.Title>
                <Card.Subtitle id="subtitle" className="mb-2 text-muted"><i>What does that mean?</i></Card.Subtitle>
                <Card.Text>
                  <p id="cardbody1">{'Bootstrap? Check.  High quality vector images you don\'t even have to pay for? Double check.'}</p>
                </Card.Text>
                <Card.Link href="#about">My Skills</Card.Link>

              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body id="card">
                <Card.Title id="cardtitle2"><b>Back End Engineering </b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-terminal-fill" viewBox="0 0 16 16">
                  <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z"/>
                </svg></Card.Title>
                <Card.Subtitle id="subtitle" className="mb-2 text-muted"><i>What does that mean?</i></Card.Subtitle>
                <Card.Text>
                  <p id="cardbody2">{'MongoDB? More like Mongo Don\'t Bother. (Yes, my dad jokes get worse than that) There\'s no documentation I can\'t figure out.'}</p>
                </Card.Text>
                <Card.Link href="#portfolio">My Work</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body id="card">
                <Card.Title id="cardtitle3"><b>Consultative Approach </b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                  <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                </svg></Card.Title>
                <Card.Subtitle id="subtitle" className="mb-2 text-muted"><i>What does that mean?</i></Card.Subtitle>
                <Card.Text>
                  <p id="cardbody3">{'I began my career in tech recruiting for NYC, Seattle and Switzerland\'s top startups.  It\'ll get done on time and with a smile.'}</p>
                </Card.Text>
                <Card.Link href="#resume">My Resume</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
