import Landing from "./components/Landing"
import Navigation from "./components/Navigation";
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    function onEntry(entry) {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer.observe(elm);
    }


}, []);

  return (
    <>
      <main>
        <header>
          <Navigation/>
        </header>
        <section>
          <Landing/>
        </section>
      </main>
    </>
  )
}

export default App
