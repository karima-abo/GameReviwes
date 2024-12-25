export class Ui{
    constructor(){

    }



    displayData(datagame){
        let cartona=``;
        for(let i=0; i<datagame.length; i++){
            cartona += `
            
 <div class=" col-md-3">
     <div data-id="${datagame[i].id}"  class=" card  h-100 ">
           <div class="card-body">
              <img src="${datagame[i].thumbnail}" alt="" class="w-100">
              <figcaption class=" d-flex justify-content-between align-items-center mt-3">
                <h3>${datagame[i].title}</h3>
    
                 
                <button class="btn btn-primary ">free</button>
              </figcaption>
              <p class="card-text small text-center opacity-50 mt-2">
                         ${datagame[i].short_description.split(" ", 8)}
                      </p>
            </div>

            <div class="card-footer d-flex justify-content-between align-items-center m-2">
              <p class="m-0  py-1 px-2">${datagame[i].genre}</p>
              <p class="m-0  py-1 px-2">${datagame[i].platform}</p>
      
            </div>
    </div>
 </div>
            `
        }
        document.getElementById('gameData').innerHTML=cartona;
    }

     displayDetailsData(x){
        let cartona=` 
     
          <div class="col-md-4 ">
          
                 <img class="w-100" src=" ${x.thumbnail}" alt="">
             </div>
             <div class="col-md-8 text-white bg-detials-ob ">
                 <h2> Title:${x.title}</h2>
                
               
                 <p>category: <span>${x.genre}</span>  </p>
                 <p>Platform:  <span>${x.platform}</span></p>
                   <p>Status:  <span>${x.status}</span></p>
                 <p>${x.description}</p>
                 <a class="btn btn-outline-warning " href="${x.game_url}" target="_blank"> Show Game</a>
             </div>
            
         
         `
         document.getElementById("detialsData").innerHTML =cartona;
     
     }


}