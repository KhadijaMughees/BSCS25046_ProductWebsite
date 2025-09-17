

function greet(){
    alert("Hey Hi Hello")
}
window.onload=greet();
document.getElementById("home").onclick = "hi";


document.getElementById("dynamicfooter").innerHTML = new Date().getFullYear();

function stock(id){
    if(id=="In stock"){
        alert("In stock :)")

    }
    else{
        alert("Out of stock :(")
    }
}

function validateForm() {
  let email = document.forms["myForm"]["email"].value;
 

  if (email == "") {
    alert("Fill out everything loser");
    return false;

  }
  else{
    alert('Yay Email!')
  }
  
}

function chatbox(){
    let message=document.forms["myForm"]["Message"].value;

    if (message=="how long does it take for the order to be delivered?"){
        alert("5 to 7 working days")
    }
    else if(message=="are there any discount codes?"){
        alert("use code: meow10 for 10% off your order")
    }
    else{
        alert("bye.")
    }
    return false;
}


