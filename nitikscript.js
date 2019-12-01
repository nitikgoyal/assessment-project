
function f3()
{
var nutrition=document.getElementById('nutrition');   
nutrition.innerHTML="";    
var e=document.getElementById('food');
var url2="https://api.edamam.com/api/food-database/parser?app_id=2d1172f8&app_key=10666723e9c90cb72b5a3222a094bdd8&ingr="
url2=url2+e.value;    
//   url2=encodeURI(url2);
//    console.log(url2);
    var xhr2 = new XMLHttpRequest()
xhr2.open("GET", url2);
    
    xhr2.onreadystatechange=test2

    function test2()
    {
        
     if(this.status==200 && this.readyState==4){
         console.log(this.responseText);
    var obj=JSON.parse(this.responseText)
    var div1=document.createElement('div');
    div1.setAttribute("id","div1");     
    var h1=document.createElement('h1');
    h1.setAttribute("style","margin-top:5px;");
    h1.setAttribute("style","margin-bottom:5px;");     
    h1.innerHTML=obj.hints[2].food.brand;
    div1.append(h1);
    var h11=document.createElement('h1');
    h11.setAttribute("style","margin-top:5px;");
    h11.setAttribute("style","margin-bottom:5px;");     
    h11.innerHTML=obj.hints[2].food.category;
    div1.append(h11);
    nutrition.append(div1);
//          var h111=document.createElement('h1');
//    h111.setAttribute("style","margin-top:5px;");
//    h111.setAttribute("style","margin-bottom:5px;");     
//    h111.innerHTML=obj.hints[2].food.nutrients[0].ENERC_KCAL;
//    div1.append(h11);
   // nutrition.append(div1);
    var div2=document.createElement('div');
    div2.setAttribute("id","div2");
    var img=document.createElement('img');
    img.setAttribute('src',obj.hints[2].food.image);
    div2.append(img);
         nutrition.append(div2);         
        
         
            }}
    xhr2.send();
}