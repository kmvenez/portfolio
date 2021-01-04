import React from 'react'

function Contact (props) {
  return (
    <div>
      <h1>Contact</h1>

      <div className="row justify-content-center">

        <div className="col-lg-2 text-center">
          <a href="https://drive.google.com/file/d/1Th7eMsuOUxzfM5gEVaPMXWui8MWQdobJ/view?usp=sharing" rel="noopener noreferrer" target="_blank">
          </a>
          <p>View Resume</p>
        </div>

        <div className="col-lg-2 text-center">
          <a href="https://www.linkedin.com/in/katieveneziano/" rel="noopener noreferrer" target="_blank">
          </a>
          <p>katieveneziano</p>
        </div>

        <div className="col-lg-2 text-center">
          <a href="mailto:kmvenez@gmail.com">
          </a>
          <p>Email Me!</p>
        </div>

        <div className="col-lg-2 text-center">
          <a href="https://github.com/kmvenez" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github fa-4x mb-2"></i>
          </a>
          <p>kmvenez</p>
        </div>
      </div>

    </div>

  )
}

export default Contact
