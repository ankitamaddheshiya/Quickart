import { featureProductNav } from "./Data/featureProductNav.js"
import { imageSlider } from "./Data/imageSlider.js"
import { electronicsProductData } from "./Data/electronicProduct.js"

let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_SearchEl = document.querySelector(".recent_Search")

let recentArray = ["mobile", "phone"]
form_search.addEventListener("submit", (e) => {
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})


function renderRecent() {
    let recent_Search_html = ''
    recentArray.forEach(el => {
        recent_Search_html += `
        <div class="recent_list">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
        </div>
    `
    })

    recent_SearchEl.innerHTML = recent_Search_html;
}
renderRecent()


/**********feature product js***********/
let featureProduct_listEl = document.querySelector(".featureProduct_list")
let featureProductListHTML = ''
// console.log(featureProductNav)

featureProductNav.forEach(el => {
    featureProductListHTML += `
        <div class="featureProduct_item">
            <a href="${el.link}">
                <div class="featureProduct_image">
                    <img src="${el.img}" />
                </div>
                <p class="featureProduct_name">
                    ${el.name}
                  ${el.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""}   
                </p>
            </a>
        </div>
    `
})
featureProduct_listEl.innerHTML = featureProductListHTML
// console.log(featureProductListHTML)


/*******************image Slider code start from hear********************* */

