// var myAds = document.createElement("div");

  
//   myAds.setAttribute("style","width:500px; height:300px; background-color:gray;position:absolute; top:20%; left:calc(50% - 250px); border-radius:30px; font-family:sans-serif; font-size:30px; line-height:300px;text-align:center;transition:3s ease;")
//   myAds.innerHTML = "Google Advertising";


//   var bodys = document.getElementsByTagName("body")[0];


  

// var b = 5000;

//   function cavo(){
 
//      myAds.style.opacity = "0";
//   	 myAds.style.visibility = "hidden";
//   }

//   setInterval(cavo,b);





 
// document.body.appendChild(myAds);
var myArea = document.getElementById("container");










var ball = document.createElement("div");


ball.setAttribute("style","width:70px; height:70px; border-radius:50%; background-color:green;position:absolute; transition:1s ease-in;");

myArea.appendChild(ball);


myArea.setAttribute("click",function(e){
 var aX = e.clientX;
     var aY = e.clientY;
     
     console.log(aX);
     console.log(aY);

});




function hoppan(){

   ball.style.left = Math.random() * 1000 + "px";
   ball.style.top = Math.random() * 1000 + "px";   
   // ball.style.right = Math.random() * 600 + "px";
   // ball.style.bottom = Math.random() * 600 + "px"; 

   if (ball.style.width == myArea.height) {

     alert("r");
   }
}

setInterval(hoppan,1000);



    // var x = e.clientX;
    // var y = e.clientY;
    

    // ball.style.left = Math.random() * 1000 + "px";
    // ball.style.top = Math.random() * 1000 + "px";
   
    // if (ball.style.top ) {

    // 	alert("g");
    // }








