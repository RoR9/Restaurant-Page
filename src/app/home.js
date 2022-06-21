export function createHomePage(){
const content=document.querySelector(".content")
content.innerHTML=``    
const div=document.createElement("div")
div.innerHTML=`<div class="home_title">Beer</div>
<div class="home_img"><div class="home_img_pic"></div></div>
<div class="home_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt velit adipisci ipsam aspernatur eveniet? Quam iusto laudantium, adipisci magni itaque incidunt dolorem doloremque, impedit vitae consequuntur similique veniam a porro.</div>`
div.classList.add("home")
content.appendChild(div)

}
