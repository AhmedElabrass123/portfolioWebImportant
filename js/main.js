const sections=document.querySelectorAll(".section")
const secBtns=document.querySelectorAll(".controlls")
const secBtn=document.querySelectorAll(".control")
const allSections=document.querySelector(".main-content")

function pageTransitions(){
    //button click active class
    for(let i=0; i<secBtn.length;i++){
        secBtn[i].addEventListener("click", (e) =>{
            document.querySelector(".controlls i.btn-active").classList.remove("btn-active")
             secBtn[i].classList.add("btn-active")   
        })
    }
    //section active class
    allSections.addEventListener("click", (e) =>{
        const id=e.target.dataset.id;
        // console.log(id)
        if(id){
            secBtns.forEach((btn)=>{
                btn.classList.remove("active")
            })
            e.target.classList.add("active")
            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove("active")
            })
            const element=document.getElementById(id)
            element.classList.add("active")
        }
    })
}
pageTransitions()