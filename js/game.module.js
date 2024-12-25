
import { Details } from "./details.module.js";
import { Ui } from "./Ui.module.js";



export class Game{
    constructor( ){
        
       this.getGames("mmorpg");

       document.querySelectorAll(".menu a").forEach((link) => {
        link.addEventListener("click", (e) => {
           document.querySelector(".menu .active").classList.remove("active");
           e.target.classList.add("active");
           console.log(e.target.dataset.cat)
           this.getGames(e.target.dataset.cat);

        });
     });


       this.ui =new Ui();
    }
    async  getGames(cataegory){
        const loader=document.getElementById('lodeerr');
        loader.classList.remove("d-none")
      
          const options = {
              method: 'GET',
              headers: {
                  'x-rapidapi-key': 'f0b1f9dd7cmsh3d5a4d334972aaep1a970ajsn9c8465063f7a',
                  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                  Accept: "application/json",
                  "Content-Type": "application/json",
              }
          };
          const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cataegory}`, options);
          const response = await api.json(); 
          console.log(response,"hello");
           this.ui.displayData(response)

           this.startEvent();
         loader.classList.add("d-none")
      
        
      }
      

      startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              const id = item.dataset.id;
              console.log(item.dataset.id);
              this.showDetails(id);
           });
        });
     }
      

      showDetails(idGame) {
      
        const details = new Details(idGame);
        console.log(idGame);
        document.querySelector('.homebage').classList.add("d-none")
        document.querySelector('.Detailspage').classList.remove("d-none")

     }
}
