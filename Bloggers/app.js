import{storage, collection, addDoc ,db,ref ,uploadBytes,getDocs,getDownloadURL  } from "./firebase.js"
let cards = document.getElementById("cards")
let showdata = document.getElementById("showdata")
let adding = document.getElementById("adding");
let Products = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
let image = document .getElementById("file");
let title = document.getElementById("title");
let desc = document.getElementById("decs");
let loader = document.querySelector(".loader");
loader.style.display="none"
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var url;

console.log(url)
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

async function add() {
  allproduct()
  modal.style.display = "none";

    try {


        const files = image.files[0];
        const imagesRef = ref(storage, files.name);
        const snapshot = await uploadBytes(imagesRef, files);
        console.log('Uploaded a blob or file!', snapshot);
        
        const downloadURL = await getDownloadURL(snapshot.ref);
        url = downloadURL;
        console.log('File available at', url);
        
        const docRef = await addDoc(collection(db, "users"), {
            title: title.value,
            description: desc.value,
            imageUrl: url,  
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
   
}


async function allproduct() {
    loader.style.display="block"

  

    cards.innerHTML = ""; 
    const querySnapshot = await getDocs(collection(db, "users"));

    if (querySnapshot.empty) {
      // If no products, show error message or image
      cards.innerHTML += `
        <div class="error-container">
  <img src="./assist/img/image_processing20200301-21017-1lto2wr-ezgif.com-gif-maker.gif" alt="">
        </div>
      `;
      loader.style.display = "none";
      return;
    }
    querySnapshot.forEach((doc) => {
        const data = doc.data();
         cards.innerHTML += ` 
            <div class="mar-t col-md-4 card-container">
              <div class="card">
              <div class="img-content">
                <img src="${data.imageUrl}" alt="">
              </div>
              <div class="content">
                <p class="heading">${doc.data().title}</p>
                <p>
                ${doc.data().description}
                </p>
              </div>
            </div>
            </div>
      `
       
        loader.style.display="none";
    });
   

}





adding.addEventListener("click",add)
showdata.addEventListener("click",allproduct)