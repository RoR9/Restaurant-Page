export class Card{
    constructor(img,title){
    const cards=[]
    this.img=img
    this.title=title
    this.insertCards=function(){
        cards.push({img,title})
        return cards
    }
    }
    
  }
  


const cards=[]






export function createMenuPage(){
const content=document.querySelector(".content")
content.innerHTML=""
const menu=document.createElement("div")
menu.classList.add("menu")
content.appendChild(menu)
}

export function createCard(title,source){
    const menu=document.querySelector(".menu")
    let card=document.createElement("div")
    card.classList.add("menu_card")

    let menuCardImg=document.createElement("div")
    menuCardImg.classList.add("menu_card_img")
    cards.push(new Card(title))

    const myIcon = new Image();
    myIcon.src = source;
    
    let menuCardTitle=document.createElement("div")
    menuCardTitle.classList.add("menu_card_title")
    menuCardTitle.textContent=`${title}`

    menu.appendChild(card)
    
    menuCardImg.appendChild(myIcon)
    card.appendChild(menuCardImg)
    card.appendChild(menuCardTitle)
    
   
   
  
  
  
  
 
   
   
  
  
  

}

export function displayCards(cards){

}
console.log(cards)


