import React from 'react';
import Typed from 'typed.js';

export default function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef("Test");

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings:["Principle SDET", "Automation Engineer", "DevOps Engineer"],
      typeSpeed:80,
      backSpeed:80,
      backDelay:1000,
      loop:true,
     // smartBackspace: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
