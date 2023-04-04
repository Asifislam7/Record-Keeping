import React from 'react'

function About() {
  return (
    <div className='About'>
        <p>This is about the home page of the website and then we have to make the call.
        </p>
      <label>Enter your feedback for the website:</label><br></br><br></br>
      <textarea cols={40} rows={5} placeholder="Enter the text you want to enter"></textarea>
      <div><button type='submit' className='btn'>Click the button to submit the form</button></div>
      {/* from now onwards we have to learn about the get and posr */}
    </div>
  )
}

export default About
