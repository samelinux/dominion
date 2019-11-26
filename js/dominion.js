'use strict';

function generateExpansion()
{
 for(var key in cards)
 {
  var checkbox=document.createElement("input");
  checkbox.type='checkbox';
  checkbox.name='expansions';
  checkbox.value=key;
  checkbox.checked=true;
  document.getElementById('expansions').appendChild(checkbox);
  var text=document.createElement("text");
  text.innerHTML=key;
  document.getElementById('expansions').appendChild(text);
  var br=document.createElement("br");
  document.getElementById('expansions').appendChild(br);
 }
 return expansions;
}

function generateKingdom()
{
 var allCards=[];
 var childrens=document.getElementById('expansions').children;
 for(var i=0;i<childrens.length;i++)
 {
  if(childrens[i].type=='checkbox' && childrens[i].checked)
  {
   for(var j=0;j<cards[childrens[i].value].length;j++)
   {
    allCards.push(cards[childrens[i].value][j]);
   }
  }
 }
 if(allCards.length>0)
 {
  document.getElementById('kingdom').innerHTML='';
  for(var i=0;i<10;i++)
  {
   var nextCard=rand(0,allCards.length-1);
   var text=document.createElement("text");
   text.innerHTML=allCards[nextCard];
   allCards.splice(nextCard,1);
   document.getElementById('kingdom').appendChild(text);
   var br=document.createElement("br");
   document.getElementById('kingdom').appendChild(br);
  }
  document.getElementById('result').style.display='block';
 }
 else
 {
  document.getElementById('result').style.display='none';
  alert('Devi selezionare almeno un set di carte!');
 }
}

function rand(min, max)
{
 return (Math.random()*(max-min)+min)|0;
}
