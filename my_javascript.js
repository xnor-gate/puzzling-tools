function makeText() {
    console.log("in the function");
    // alert("Hello Javatpoint");  
    document.getElementById("BodyId").innerText = "Wait it did! Wow!";
    document.querySelector(".button").innerText = "NEW";

    //https://www.quinapalus.com/cgi-bin/qat?pat=cat&ent=Search&dict=0


    let request = new XMLHttpRequest();
    request.open("GET", 'https://cors-anywhere.herokuapp.com/https://nutrimatic.org/?q=OURCAT&go=Go', true);
    request.onload = () => {console.log(request.responseText)}
    request.send();

    // const Http = new XMLHttpRequest();
    // const url='https://www.quinapalus.com/cgi-bin/qat?pat=OURCAT&ent=Search&dict=0';
    // Http.open("GET", url);
    // Http.send();
  }