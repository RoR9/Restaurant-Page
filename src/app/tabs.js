import { createHomePage } from "./home"
import { createMenuPage,createCard} from "./menu"
import { createContact } from "./contact"
import lager from "../assets/lager.png"
import cider from "../assets/cider.png"
import paleAle from "../assets/pale ale.png"
import classicWheat from "../assets/classic wheat.png"
import pilsner from "../assets/pilsner.png"
import brownAle from "../assets/brown ale.png"
import Madison from "../assets/Madison.jpg"

export function tabs(e){
  const home=document.querySelector("#home") 
  const menu=document.querySelector("#menu")
  const contact=document.querySelector("#contact")
 
  home.addEventListener("click",function(e){
    createHomePage()
    e.preventDefault()
  })
  menu.addEventListener("click",function(e){
    createMenuPage()
    createCard("Lager",lager)
    createCard("Cider",cider)
    createCard("Pale Ale",paleAle)
    createCard("Classic Wheat",classicWheat)
    createCard("Pilsner",pilsner)
    createCard("Brown Ale",brownAle)
    
    e.preventDefault()
})

contact.addEventListener("click",function(e){
     createContact("3167173179","Madison Square Garden",Madison)
    e.preventDefault()

})

  


}