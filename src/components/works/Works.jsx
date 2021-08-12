import React from 'react'
import "./works.scss"

function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/globe.png" alt="" />
                                </div>
                                <h2>Sunflower Lab</h2>
                                <p>Contributed to a team of four members to design, implement, and extend a web application for continuous improvement within tight deadlines. </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
