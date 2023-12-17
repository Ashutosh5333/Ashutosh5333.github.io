import React from "react";
import "./git.css";


export const Gitstat = () => {
  return (
       
    <div className="main-stat">
    
    <h2> Git Stats </h2>
    <br/>
       <div className="disstat">

  
     <div id="github-stats-langs" className="upper" >
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=Ashutosh5333&theme=gruvbox_duo"
        />
      </div>
      <br/>

      <div id="github-stats-card"   className="lower"  >
        <img
          src="https://github-readme-stats.vercel.app/api?username=Ashutosh5333&show_icons=true&locale=en&theme=react&hide_border=true"
        />
      </div>

   </div> 
  
    </div>
  );
};


/**
 * 
 *  <div>
        <img align="left" src="https://github-readme-streak-stats.herokuapp.com?user=Ashutosh5333&theme=gruvbox_duo" alt="Ashutosh5333" width="100%" height="100%"  />
        </div>
        <div>
          <img align="center" src="https://github-readme-stats.vercel.app/api?username=Ashutosh5333&show_icons=true&locale=en" alt="Ashutosh5333" width="100%" height="100%" />
        </div>
        </div>
 */
