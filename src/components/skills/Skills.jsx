import React from 'react'
import "./skills.scss";

function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="container">
                <h1>Skills</h1>
                <h2>languages</h2>
                <div className="skill">
                    <div className="wrapper">
                        <img src= {process.env.PUBLIC_URL + "/assets/javascript.svg"} alt="javascript" />
                        <h3>JavaScript</h3>
                    </div>
                    <div className="wrapper">
                        <img src= {process.env.PUBLIC_URL + "/assets/mysql.svg"} alt="mysql" />
                        <h3>mySql</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/html5.svg"} alt="html5" />
                        <h3>HTML 5</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/css.svg"} alt="css3" />
                        <h3>CSS 3</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/sass.svg"} alt="sass" />
                        <h3>SASS</h3>
                    </div>
                </div>

                <h2>Frameworks</h2>
                <div className="skill">
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/react.svg"} alt="react" />
                        <h3>ReactJS</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/bootstrap.svg"} alt="bootstrap" />
                        <h3>Bootstrap</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/tailwind-css.svg"} alt="taiwind" />
                        <h3>TailWind CSS</h3>
                    </div>  
                </div>

                <h2>Tools & Others</h2>
                <div className="skill">
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/git.svg"} alt="git" />
                        <h3>GitHub</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL +"/assets/adobe-xd.svg"} alt="adobexd" />
                        <h3>Adobe XD</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/visual-studio-code.svg"} alt="vscode" />
                        <h3>VS Code</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/npm.svg"} alt="npm" />
                        <h3>NPM</h3>
                    </div>
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + "/assets/nodejs.svg"} alt="nodejs" />
                        <h3>NodeJS</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Skills
