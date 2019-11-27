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
  document.getElementById('expansions').appendChild(document.createElement("br"));
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
  document.getElementById('veto').innerHTML='';
  for(var i=0;i<10;i++)
  {
   var nextCard=rand(0,allCards.length-1);
   var text=document.createElement("text");
   text.innerHTML=allCards[nextCard];
   allCards.splice(nextCard,1);
   document.getElementById('kingdom').appendChild(text);
   document.getElementById('kingdom').appendChild(document.createElement("br"));
  }
  var playersSelector=document.getElementById("playersCount");
  var playersCount=playersSelector.options[playersSelector.selectedIndex].value;
  for(var i=0;i<playersCount;i++)
  {
   var nextCard=rand(0,allCards.length-1);
   var text=document.createElement("text");
   text.innerHTML=allCards[nextCard];
   allCards.splice(nextCard,1);
   document.getElementById('veto').appendChild(text);
   document.getElementById('veto').appendChild(document.createElement("br"));
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
