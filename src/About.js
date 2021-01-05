import React from 'react'

function About (props) {
  return (
    <div>
      <br/>
      <img aria-hidden='true' src="https://i.imgur.com/9MoSuV9.png" className="img-fluid" id="robo" alt="Responsive image"></img><br/><br/>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
      </svg>
      <h4><b>What I bring to the table:</b></h4>
      <b>Languages:</b> JavaScript, HTML, CSS, SaSS, Python, SQL, ShellScripting via CLI for Linux.<br/>
      <b>Tools & Extensions:</b> JSX, Git, JSON, CLI Git, Mongoose, Express, PostgresQL, Lighthouse.<br/>
      <b>Databases:</b> NoSQL, SQL.<br/>
      <b>API Hosting:</b> Heroku.<br/>
      <b>Libraries:</b> Bootstrap, React Bootstrap.<br/>
      <b>Frameworks:</b> React.<br/>
      <b>Runtime Environment:</b> Node.js<br/>
      <b>UI/UX:</b> Wireframes, user stories, Entity Relationship Diagrams.<br/>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
      </svg>
    </div>
  )
}

export default About
