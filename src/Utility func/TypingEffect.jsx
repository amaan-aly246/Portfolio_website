import React from 'react'
import Typing from 'typewriter-effect';

function TypingEffect() {
  return (
    
<Typing
  onInit={(typewriter) => {
    typewriter
      .typeString("I'm Amaan Aly!")
      .pauseFor(2000)
      .deleteAll()
      .typeString(', a newbie-developer 💻')
      .pauseFor(2000)
      .deleteAll()
      .typeString(
        'an enthusiastic learner, passionate about exploring various technologies.😉 '
      ).pauseFor(3000).deleteAll()
      .start();
  }}
  options={{
    loop: true,
    autoStart: true,
    cursor: '$',
  }}
/>
  )
}

export default TypingEffect

