const elBTN = document.querySelector(".btn")
const elClearBTN = document.querySelector(".clearBtn")
let namesList = document.querySelector(".ListOf")
const html = []

const elGenderList = document.getElementById("gender")



elBTN.addEventListener('click', () => {

    let elInput = document.querySelector(".nameOf").value;

    html.push(elInput)
    
    const newArr = html.map((item) => {
        let list = `<li>${item}<span class = "genderbox"></span></li>`
        return list
        
        
    })
    console.log(newArr)

    const list = newArr.join ('');
    console.log(list)

    let namesList = document.querySelector(".ListOf > ol")
    namesList.innerHTML = list;


})

elGenderList.addEventListener('change', (ev) => {

    let GenderChoose = ev.target.value;
    let genderImgBox = document.querySelector("span")
    
    
    if (GenderChoose === 'male'){
        genderImgBox.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Blue_male_symbol.svg/800px-Blue_male_symbol.svg.png'/>"
        genderImgBox.style.backgroundSize = 'contain'
       
    }
    else {
    
        genderImgBox.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Symbol_venus.svg/150px-Symbol_venus.svg.png'/>"
        
    }
})

elClearBTN.addEventListener('click', () => {

    html.length = 0;
    console.log(html)


    namesList.innerHTML = html
})




