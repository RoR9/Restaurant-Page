export function createContact(number,address,source){
  const content=document.querySelector(".content")  
  content.innerHTML=``
  const contact=document.createElement("div")
  
  contact.classList.add("contact")
  console.log("created")
  contact.innerHTML=`<div class="contact_nr">${number} </div>
  <div class="contact_address">${address}</div>`
  content.appendChild(contact)
  
  const locationImg=new Image()
  locationImg.classList.add("location_img")
  locationImg.src=source
  const imageDiv=document.createElement("div")
  imageDiv.classList.add("image_container")
  imageDiv.appendChild(locationImg)
  contact.appendChild(imageDiv)


  

}