const DUF = document.querySelector('.pages-item1')
const FORD = document.querySelector('.pages-item2')
let cards = document.querySelectorAll('.content-block')
let button = document.querySelector('.form-button')
let parametrPower1 = document.querySelectorAll('.find-parametr1__input')
let parametrYear = document.querySelectorAll('.find-parametr2__input')
let parametrPriceMin =document.querySelectorAll('.find-parametr3_input--min')
let parametrPriceMax =document.querySelectorAll('.find-parametr3_input--max')
let parametrBlocks = document.querySelectorAll('.find-parametr')
let parametrTitles = document.querySelectorAll('.title_wrap')
let parametrImages = document.querySelectorAll('.find-parametr img')
let parametrInputs = document.querySelectorAll('.find-parametr label')
let findTitleInner = document.querySelector('.find--title_inner')
let cardsLenght = []
let lenghtArray = []

function click(triger) {
   triger.addEventListener('click', function(){
      let dafName = triger.textContent
      console.log(dafName)
      cards.forEach(card => {
         let filter = card.querySelector('.content-box__make').textContent
         if(String(dafName) == String(filter)) {
            card.style.display ='flex'
         } else {
            card.style.display ='none'
         }
      })
   })
}
click(DUF)
click(FORD)
setTitleNumb()

function setTitleNumb() {
   findTitleInner.innerHTML = String(lenghtArray.length)
}
parametrTitles.forEach((title, ind) => {
   title.addEventListener('click', function(e) {
      let parametrImage = title.querySelector('img') 
      parametrImage.classList.toggle('active')
      parametrBlocks.forEach((block, num) => {
         let parametrInput = block.querySelectorAll('.find-parametr label')
         if(ind == num){
            block.classList.toggle('active')
            parametrInput.forEach(input => {
               input.classList.toggle('active')
            })
         } 
      })
   })
})

function setPower() {
   minMax = ''
   parametrPower1.forEach(item => {
      if(item.checked) {
         minMax = item.value
      }
   })
   if(String(minMax) == 'min'){
      cards.forEach(elem => {
         let powerIndicator = elem.querySelector('.indicators__item--power').innerHTML
         let powerIndicatorNumb = Number(powerIndicator)
         if(powerIndicatorNumb > 400 ){
            elem.style.display = 'none'
         } else{
            elem.style.display = 'flex'
            if(elem.style.display = 'flex') {
               lenghtArray.push(elem)
            }
         }
      })
   } else if(String(minMax) == 'max'){
      cards.forEach(elem => {
         let powerIndicator = elem.querySelector('.indicators__item--power').innerHTML
         let powerIndicatorNumb = Number(powerIndicator)
         if(powerIndicatorNumb < 400 ){
            elem.style.display = 'none'
         } else {
            elem.style.display = 'flex'
            if(elem.style.display = 'flex') {
               lenghtArray.push(elem)
            }
         }
      })
   } else if (String(minMax) == 'min'&& 'max'){
      cards.forEach(elem => {
         elem.style.display = 'flex'
         if(elem.style.display = 'flex') {
            lenghtArray.push(elem)
         }
      })
   }
   setTitleNumb()
}

function setYear() {
   year = ''
   parametrYear.forEach( item => {
      if(item.checked){
         year = item.value
      }
   }) 
   if( Number(year) == 2021){
      cards.forEach(elem => {
         let yearIndicator = elem.querySelector('.indicators__item--year').innerHTML
         let yearIndicatorNumb = Number(yearIndicator)
         if(yearIndicatorNumb == 2021 ){
            elem.style.display = 'flex'
            if(elem.style.display = 'flex') {
               lenghtArray.push(elem)
            }
         } else{
            elem.style.display = 'none'}
      })
   } 
   else if(Number(year) > 2015 && Number(year) <= 2020){
      cards.forEach(elem => {
         let yearIndicator = elem.querySelector('.indicators__item--year').innerHTML
         let yearIndicatorNumb = Number(yearIndicator)
         if(yearIndicatorNumb > 2015 && yearIndicatorNumb <= 2020 ){
            elem.style.display = 'flex'
            if(elem.style.display = 'flex') {
               lenghtArray.push(elem)
            }
         } else {
            elem.style.display = 'none'}
      })
   }
   else if(Number(year) > 2010 && Number(year) <= 2015){
      cards.forEach(elem => {
         let yearIndicator = elem.querySelector('.indicators__item--year').innerHTML
         let yearIndicatorNumb = Number(yearIndicator)
         if(yearIndicatorNumb > 2010 && yearIndicatorNumb <= 2015 ){
            elem.style.display = 'flex'
            if(elem.style.display = 'flex') {
               lenghtArray.push(elem)
            }
         } else {
            elem.style.display = 'none'}
      })
   }
   else if(Number(year) > 2000 && Number(year) <= 2010){
      cards.forEach(elem => {
         let yearIndicator = elem.querySelector('.indicators__item--year').innerHTML
         let yearIndicatorNumb = Number(yearIndicator)
         if(yearIndicatorNumb > 2000 && yearIndicatorNumb <= 2010 ){
            yearIndicatorNumb
            elem.style.display = 'flex'
            if(elem.style.display = 'flex') {
               lenghtArray.push(elem)
            }
         } else {
            elem.style.display = 'none'}
      })
   } 
   else if( minMax == true ) {
      setPower()
   }
   setTitleNumb()
}
function setPrice() {
   let parametrPriceMin = document.querySelector('.find-parametr3_input--min').value
   let parametrPriceMax = document.querySelector('.find-parametr3_input--max').value
   cards.forEach(card => {
      let priceCard = card.querySelector('.content-price').textContent
      let priceCardNnmb = Number(priceCard)
      if(priceCardNnmb > parametrPriceMin && priceCardNnmb < parametrPriceMax){
         card.style.display = 'flex'
         if(elem.style.display = 'flex') {
            lenghtArray.push(elem)
         }
      } else if(priceCardNnmb < parametrPriceMin && priceCardNnmb > parametrPriceMax){
         card.style.display = 'none'
         if(elem.style.display = 'flex') {
            lenghtArray.push(elem)
         }
      }  
   })
   setTitleNumb()
}

button.addEventListener('click', function() {
   setPower()
   setYear()
   setPrice()
   setTitleNumb()
})






