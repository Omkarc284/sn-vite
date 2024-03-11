import React from 'react'

const About = () => {
  return (
    <section className="aboutus" id="about">
        <div className="heading">
            <h2 className="text-[64px] leading-[80.64px] tracking-[9px]">About the Studios </h2>
        </div>
        <div className="aboutcontent">
            <h3>At studios now, we're on a mission to transform ideas into captivating realities.</h3>
            <div className="linecontainer">
                <div className="square"></div>
                <div className="line"></div>
                <div className="square"></div>
            </div>
            <h3>
                We understand the power of imagination and 
                the impact of a fresh, attractive brand identity.
            </h3>
            <div className="linecontainer">
                <div className="square"></div>
                <div className="line"></div>
                <div className="square"></div>
            </div>
            <h3>
                Our team of creative visionaries is dedicated to taking your concepts and giving them life in the most innovative and visually stunning ways.
            </h3>
        </div>
    </section>
  )
}

export default About