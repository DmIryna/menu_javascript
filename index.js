import { menu } from "./modules/menu.js"

const getElementOnPage = selectorEl => document.querySelectorAll(selectorEl)


const renderMenu = function (menu) {
    const [dishesContainer] = getElementOnPage(".dishesContainer")
    dishesContainer.innerHTML = ""

    const section = menu.map(dish => {
        const html = `
            <div>
                <img src="${dish.img}" alt="${dish.name}">
                <h3>${dish.name} <span>${dish.price}</span></h3>
                <p>${dish.description}</p>
            </div>
            `

        dishesContainer.insertAdjacentHTML("afterbegin", html)
    })

    return section
}

getElementOnPage(".btn").forEach(btn => btn.addEventListener("click", function () {
    const id = this.getAttribute("data-section")

    const dishes = menu.filter(dish => dish.section === id)

    id === "all" ? renderMenu(menu) : renderMenu(dishes)
}))

renderMenu(menu)