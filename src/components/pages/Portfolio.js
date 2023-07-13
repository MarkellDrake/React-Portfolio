import React from "react";
import Players from '../../PlayersParadise.png';
import Recipes from '../../OnlyRecipesScreenshot.png';
import Team from '../../TeamProfileGenerator.png';
import Scheduler from '../../WorkDayScheduler.png';
import Manager from '../../EmployeeManager.png';
import Horesion from '../../Screenshot 2023-02-06 at 4.41.02 PM.png';
import Mernia from '../../chronicleOfMernia.png';

export default function Portfolio() {
  return (
    <div>
      
      <h1>Portfolio</h1>
    
       <br></br>
       <br></br>
          <a href="https://github.com/MarkellDrake/Horesion" target="_blank" rel="noreferrer">
        <img src={Horesion} alt="Horesion screenshot"></img>
      </a>
      <h4> Horesion  </h4>
      
        <br></br>
        <br></br>
        <br></br>

        <a href="https://github.com/MarkellDrake/OnlyRecipes" target="_blank" rel="noreferrer">
        <img src={Recipes} alt="Only Recipes"></img>
      </a>
      <h4> Only Recipes </h4>
       
        

      <br></br>
      <br></br>
      <br></br>

      <a href="https://markelldrake.github.io/Players-paradise" target="_blank" rel="noreferrer">
        <img src={Players} alt="Players Paradise"></img>
      </a>

      <h4> Players Paradise </h4>
       
      <br></br>
      <br></br>
      <br></br>

        <a href="https://github.com/MarkellDrake/work-day-scheduler" target="_blank" rel="noreferrer">
        <img src={Scheduler} alt="Work Day Scheduler"></img>
      </a>

      <h4> Work Day Scheduler </h4>

      <br></br>
      <br></br>
      <br></br>

        <a href="https://github.com/MarkellDrake/EmployeeTracker" target="_blank" rel="noreferrer">
        <img src={Manager} alt="Employee Manager"></img>
      </a>

      <h4> Employee Manager </h4>

      <br></br>
      <br></br>
      <br></br>

        <a href="https://github.com/MarkellDrake/teamProfileGenerator" target="_blank" rel="noreferrer">
        <img src={Team} alt="Team Profile Generator"></img>
      </a>
      <h4> Team Profile Generator </h4>

<br></br>
<br></br>
<br></br>

      <a href="https://github.com/kpetrosky/Chronicles-of-Mernia" target="_blank" rel="noreferrer">
        <img className='Mernia'src={Mernia} alt="Chronicles of Mernia"></img>
      </a>
      <h4> Chronicles od MERNia </h4>

      
    </div>
  );
}
