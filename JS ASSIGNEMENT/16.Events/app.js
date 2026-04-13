// 1. Show an alert box on click on a link.

let link = document.getElementById("link1");

link.addEventListener("click" , (e)=>{
    alert("You clicked it")
})

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.


let image = document.getElementById("img1");

image.addEventListener("click" , (e)=>{
    alert("You clicked it again")
})

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted ,Before delete After click on delete button on “Mark ” row

let button  = document.querySelectorAll(".del");

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click" , (e) => {
  let row = e.target.closest("tr");
    row.remove() ;
    
    })
    
}

// 4. Dislay an image in browser. Change the picture on mouseover and set the first picture on mouseout.

let pic = document.getElementById("img2");
let original = new Image();
original.src = "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/6/house-vs-home_0_1200.jpg.webp";

let hover = new Image();
hover.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9TgJ3s_8vKqA3TKUK4Z_CcMeNG6qhpsgow&s";
pic.addEventListener("mouseout" , (e)=>{
    pic.src = original.src; // on mouseout
});
pic.addEventListener("mouseover" , (e)=>{
    pic.src = hover.src; // on mouseover
});
 pic.style.width = "200px"
 pic.style.height = "200px"



 // 5. Show a counter in browser. Counter should increase on click on increase// value in browser.// button and decrease on click on decrease button. And show updated counter


let Btn = document.getElementById("btn1");
let Btn2 = document.getElementById("btn2");

Btn.addEventListener("click" , (e)=>{
    let count = Number(document.getElementById("num").value);
    count++;
    document.getElementById("num").value = count;
});
Btn2.addEventListener("click" , (e)=>{
    let count = Number(document.getElementById("num").value);
    count--;
    document.getElementById("num").value = count;
});
