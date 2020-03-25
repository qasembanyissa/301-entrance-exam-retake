'use strict'
var tabelListContainar = document.getElementById('Containar');
var tabel = document.createElement('table');
tabelListContainar.appendChild(tabel);
var trE1 = document.createElement('tr')
tabel.appendChild(trE1);
var tlE1 = document.createElement('td');
trE1.appendChild(tlE1);
// tlE1.textContent = "hello";

function food (pizza,Mansaf,Maqloubh,adas){
    this.pizza=pizza;
    this.Mansaf=Mansaf;
    this.Maqloubh=Maqloubh;
    this.adas=adas;
    food.all.push(this);

}
food.all=[];






function renderOrder() {
    tabelListContainar.textContent="";
    for(var i=0 ; i<food.all.length ; i++){
        var trE1 = document.createElement('tr')
        tabel.appendChild(trE1);
        var tlE1 = document.createElement('td');
        trE1.appendChild(tlE1);
        tlE1.innerHTMl=food.all[i];
        

    }


    // var x = document.createElement("TABLE");
    // x.setAttribute("id", "myTable");
    // document.body.appendChild(x);
  
    // var y = document.createElement("TR");
    // y.setAttribute("id", "myTr");
    // document.getElementById("myTable").appendChild(y);
  
    // var z = document.createElement("TD");
    // var t = document.createTextNode("hello");
    // z.appendChild(t);
    // document.getElementById("myTr").appendChild(z);
  } 
  function updateFood (){
      var updateString = JSON.stringify("food.all");
      localStorage.setItem("foods" , updateString);
  }
  function getFood (){
      var updateString = localStorage.getItem('foods');
      if (updateString){
          food.all = JSON.parse(updateString);
          renderOrder();
      }
  }
  tabelListContainar.addEventListener('submit' , handleSubmit);
  function handleSubmit(event){
      event.preventDefult();
      var food=event.target;
      var pizza =  food.pizza.value;
      var Mansaf = food.Mansaf.value;
      var Maqloubh = food.Maqloubh.value;
      var adas = food.adas.value;

      new food (pizza,Mansaf,Maqloubh,adas);
      updateFood();
      renderOrder();


  }
  getFood();


