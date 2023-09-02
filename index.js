document.getElementById("btn").addEventListener("click",function(){
  const mail = document.getElementById("mail")
  mail.value = ""
  const name = document.getElementById("name")
  name.value = ""
  window.open('https://docs.google.com/forms/d/e/1FAIpQLScZiQxombLdWzD2iCHWAua-63F7SFkow_yC1wSzS8_tY2C3mw/viewform?usp=sf_link')
})
document.getElementById("cv").addEventListener("click",function(){
   var src = './img/untitled.png'
   window.open(src,"_blank");
})