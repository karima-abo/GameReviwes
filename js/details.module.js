import { Ui } from "./Ui.module.js";


// const cid=location.search;
// const params= new URLSearchParams(cid)

// console.log(params.get("id"));
// let currentid=params.get("id");



// getDtails()







export class Details{

    constructor(id){
   this.ui=new Ui();

   document.getElementById("close").addEventListener("click", () => {
    console.log("closeeeeee");
    document.querySelector('.homebage').classList.remove("d-none");
    document.querySelector('.Detailspage').classList.add("d-none");
 });

   this.getDtails(id);
    }

    async  getDtails(currentid){
        const loader=document.getElementById('lodeerr');
        loader.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f0b1f9dd7cmsh3d5a4d334972aaep1a970ajsn9c8465063f7a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        
     const res= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${currentid}`,options)
    
     const final =await res.json();
    
     console.log(final);
    
    
     
     this.ui.displayDetailsData(final)
       loader.classList.add("d-none")
       
     
     
    }
}

















