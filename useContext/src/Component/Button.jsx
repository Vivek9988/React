import React from 'react'
import Component from './Component'

const Button = (props) => {
  return (
    <div>
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>DigiYatra</title>
              <link rel="stylesheet" href="style.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                    </head>
                    <body>
                      <div class="video-container">
                        <video autoplay muted loop class="background-video">
                          <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                      </div>
                      <!-----------------------REACT -->

                      <div id=" react-managed-container"></div>
                      <div id="exp-container"></div>


                      <!------------------------------->
                      <div class="nav-bar">
                        <div class="logo"><i>DigiYatra</i></div>
                        <div class="menu">
                          <a href="#">Home</a>
                          <a href="#">My Trips</a>
                          <a href="#">Offers</a>
                          <a href="#">Login</a>
                          <a href="#">Sign up</a>
                        </div>
                      </div>
                      <div class="ai">
                        <a href="https://chatgpt.com/"><img height="80px" width="80px" src="./chatbot.png" alt="Chatbot"></a>
                      </div>
                      <div class="hero">
                        <div class="hero-pic">
                          <img width="100%" height="400px" src="https://images.unsplash.com/photo-1516571137133-1be29e37143a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image">
                        </div>
                        <div class="hero-content">
                          <h3>Welcome to DigiYatra</h3>
                          <div class="search-container">
                            <input class="hero-search" placeholder="  Where to go....">
                              <button id="btn" onclick="search()" class="go">Search</button>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="cities">
                        <a href="./record.html/index.html"><div class="city"><div class="font">Bengalore</div></div></a>
                        <a href="./record.html/index.html"><div class="city"><div class="font">Pune</div></div></a>
                        <a href="./record.html/index.html"><div class="city"><div class="font">Hyderabad</div></div></a>
                        <a href="./record.html/index.html"><div class="city"><div class="font">Goa</div></div></a>
                        <a href="./record.html/index.html"><div class="city"><div class="font">Mumbai</div></div></a>
                        <a href="./record.html/index.html"><div class="city"><div class="font">Delhi</div></div></a>
                        <a href="./record.html/index.html"><div class="city"><div class="font">LPU</div></div></a>
                        <a href="./record.html/index.html"><div class="city"><div class="font">Ranchi</div></div></a>
                      </div> -->
                      <div class="mega-container">
                        <div id="container">  </div>
                      </div>

                      <div class="last"><div class="credit">Created by Ujjwal</div></div>
                    </body>
                    <script src="./index.js"></script>
                    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
                    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                  </html>
    </div>
  )
}

export default Button