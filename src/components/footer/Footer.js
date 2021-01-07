import React from 'react'
import "../footer/Footer.css"
const Footer = () => {
    return (
        <div className="fixed-bottom">

            <div className="container-fluid p-0 text-center">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <p> &copy; 2020 FullStack Web Developer, Inc.<br />
                    Made By Philip Kouchner<br />
                            <a href="http://philipkouchner.com/" target="_blank" rel="noreferrer">My Website</a>
                        </p>
                    </div>
                    <div className="col-3"></div>
                </div>



            </div>
        </div>
    )
}

export default Footer
