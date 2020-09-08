var btn = document.getElementsByClassName("btn")[0];
var spaceGame = document.getElementsByClassName("spaceGame")[0];
btn.onclick = function addElements(event){
spaceGame.style.display= "block";
var number = document.getElementsByClassName("rows").value;
var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  for(var i =0; i<=99; i++)
  {
 var tr = x.insertRow();
    for (var y =1; y<=10; y++)
    {
  var td = tr.insertCell();
  td.setAttribute("id",i++);
  td.style.backgroundImage= "url('./vs/tenor.gif')";

    }

  }
document.getElementById("zoneTable").appendChild(x);
}  
   /*var td = document.getElementsByTagName("td");
   td.onclick = function exp(){
    var tm = document.getElementsByTagName("td");
    tm.style.backgroundImage= "url('./vs/tenor.gif')";
   }  */