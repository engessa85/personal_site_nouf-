const button_back = document.querySelector(".button-back")

const HandelBackHome = ()=> {
  window.location.href = "index.html"
}

button_back.addEventListener("click", HandelBackHome)


const button_details = document.querySelector(".button-details")

const HandelGoDetails = ()=> {
    window.location.href = "resume.html"
}

button_details.addEventListener("click", HandelGoDetails)