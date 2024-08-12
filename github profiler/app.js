let input = document.getElementById("input");
let search = document.getElementById("search");
let card = document.getElementById("card")
    function github(){
        if (input.value === "") {
            alert("Please enter a GitHub username");
            return;
        }
        fetch(`https://api.github.com/users/${input.value}`)
        .then((res) =>{
         return res.json();
        })
        .then((data) =>{
            card.innerHTML = `   
            <img class="card-img-top" src="${data.avatar_url}" alt="...">
             <div class="card-body">
               <h5 class="card-title">${data.name}</h5>
                 <span class="card-title-2">${data.login}</span>
             <hr/>
             <p>${data.bio}<p/>
                <img src="./assest/img/followers.png" alt="">
             <span class="card-title-3">${data.followers}    followers <span/>
               <span class="card-title-4">${data.following}    following <span/> <br/>
                 <a href="${data.html_url}"><button>Follow</button></a>
              
             </div>`
             input.value = "";
     
        })
        .catch((error) =>{
         alert(error.meassage)
         console.log(error)
        })
        
    }
    search.addEventListener("click",github)
input.addEventListener("keyup",(e)=>{
     if(e.key === "Enter"){
        github();
    }
})



          
  
   

