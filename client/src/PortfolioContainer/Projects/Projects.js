import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

import ecommerce from "../../assets/Projects/ecommerce.JPG";
import blogist from "../../assets/Projects/blogist.JPG";
import auction from "../../assets/Projects/auction.jpg";
import maze from "../../assets/Projects/maze.gif";
import scrabble from "../../assets/Projects/scrabble.gif";
import dominoes from "../../assets/Projects/dominoes.gif";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"Projects"}
          subHeading={"My Recent Projects"}
          color={"white"}
        />
        <div class="cards">
          <div class="card">
            <img src={ecommerce} alt="BookBrewery_Image" />
            <p className="project-par">E-Commerce Application</p>
            <div class="hidden-open-btn">
              <button>
                <a href="https://calm-cove-90906.herokuapp.com/" target="blank">
                  Open
                </a>
              </button>
            </div>
          </div>
          <div class="card">
            <img src={blogist} alt="blogist_Image" />
            <p className="project-par">Blogging Application</p>
            <div class="hidden-open-btn">
              <button>
                <a
                  href="https://agile-forest-48815.herokuapp.com/login"
                  target="blank"
                >
                  Open
                </a>
              </button>
            </div>
          </div>
          <div class="card">
            <img src={auction} alt="Auction_Image" />
            <p className="project-par">Auction House</p>
            <div class="hidden-open-btn">
              <button>
                <a
                  href="https://github.com/Saphal7702/Distributed-Auction"
                  target="blank"
                >
                  Open
                </a>
              </button>
            </div>
          </div>
          <div class="card">
            <img src={maze} alt="Maze_Image" />
            <p className="project-par">Maze</p>
            <div class="hidden-open-btn">
              <button>
                <a href="https://github.com/Saphal7702/Maze" target="blank">
                  Open
                </a>
              </button>
            </div>
          </div>
          <div class="card">
            <img src={scrabble} alt="Scrabble_Image" />
            <p className="project-par">Scrabble</p>
            <div class="hidden-open-btn">
              <button>
                <a href="https://github.com/Saphal7702/scrabble" target="blank">
                  Open
                </a>
              </button>
            </div>
          </div>
          <div class="card">
            <img src={dominoes} alt="Dominoes_Image" />
            <p className="project-par">Dominoes</p>
            <div class="hidden-open-btn">
              <button>
                <a
                  href="https://github.com/Saphal7702/domino-game"
                  target="blank"
                >
                  Open
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
