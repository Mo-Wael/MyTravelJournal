// import { useState } from 'react'
import NavBar from './navBar';
import elData from "./data.jsx"
import Content from "./Content.jsx"

function App() {
  const CounryData = elData.map(
    (country) => {
        return (
            <Content 
                key={country.id}
                {...country}
            />
        )
    }
)

  return (
    <div>
      <NavBar />
      <section className="mainSection">
            {CounryData}
        </section>
    </div>
  );
}

export default App
