import React from "react";
import { useState } from "react";
import kryptKeeper from "../../assets/images/kk-faves.jpg";
import Otr from "../../assets/images/OTRsnap.jpg";
import Zelda from "../../assets/images/zeldaq2.jpg";
import Note from "../../assets/images/note-taker1.jpg";
import { removeHyphensAndCapitalize } from "../../utils/helpers.js";


 
export default function Portfolio() {
  const [projects] = useState([
    {
      name: "Hive",
      description: "add games you've played to your profile and leave reviews",
      deployment: 'https://hive1-03d1291901c2.herokuapp.com/',
      // img: x,
      repo: 'https://github.com/blickenderfer/hive',
    },
    
    {
      name: `Krypt Keeper`,
      description: `Find haunted events near you using Zip Code`,
      deployment: `https://github.com/Pandax19/krypt-keeper`,
      img: kryptKeeper,
      repo: `https://github.com/Pandax19/krypt-keeper`,
    },
    {
      name: `On the Rocks`,
      description: `application that allows you to look up certain alcoholic drinks and gives you the ingredients with a matching picture`,
      deployment: `https://blickenderfer.github.io/ontherocks/`,
      img: Otr,
      repo: `https://github.com/blickenderfer/ontherocks`,
    },
    {
      name: `Zelda Quiz`,
      description: `A quiz to test someones knowledge of the legend of zelda that gives and keeps score`,
      deployment: `https://pandax19.github.io/Zelda-Quiz/`,
      img: Zelda,
      repo: `https://github.com/Pandax19/Zelda-Quiz`,
    },
    {
      name: `Note Taker`,
      description: `App created to keep notes using express.js`,
      deployment: `https://your-favorite-note-taker.herokuapp.com/`,
      img: Note,
      repo: `https://github.com/Pandax19/note-taker`,
    },
  ]);
  
    return (
      <>
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <div className="project" key={idx}>
                <div className="card-image">
                  <figure className="project-image">
                    <img src={project.img} className="project-bg" alt={removeHyphensAndCapitalize(project.name)} />
                  </figure>
                </div>
                <div className="project-text">
                  <div className="card-content">
                    <h3>
                      <a href={project.link}>
                        {removeHyphensAndCapitalize(project.name)}
                      </a>
                      <a href={project.repo}>
                        <i className="fab fa-github" />
                      </a>
                    </h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  