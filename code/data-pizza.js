export const pizzaBD = {
    size: [
        { name: "small", price: 40 },
        { name: "mid", price: 55 },
        { name: "big", price: 70 }
    ],
    topping: [
        { name: "cheese_1", price: 40, productName: "Сир звичайний", secondName: "cheese_ordinary", buttonKey: "cheese_ordinary_button"},
        { name: "cheese_2", price: 40, productName: "Сир фета", secondName: "feta_cheese", buttonKey: "feta_cheese_button"},
        { name: "cheese_3", price: 40, productName: "Моцарелла", secondName: "mozzarella", buttonKey: "mozzarella_button"},
        { name: "telya", price: 65, productName: "Телятина", secondName: "beef", buttonKey: "beef_button"},
        { name: "tom", price: 35, productName: "Помiдори", secondName: "tomatoes", buttonKey: "tomatoes_button"},
        { name: "mush", price: 37, productName: "Гриби", secondName: "mushrooms", buttonKey: "mushrooms_button"}
    ],
    sauce: [
        { name: "sauceClassic", price: 30, productName: "Кетчуп" },
        { name: "sauceBBQ", price: 30, productName: "BBQ" },
        { name: "sauceRikotta", price: 30, productName: "Рiкотта" }
    ]
}

export const pizzaUser = {
    size: { name: "big", price: 70 },
    sauce: "",
    topping: [],
    price: "",
    userPhone: "",
    userEmail: "",
    userName: "",
    data: ""
}

export const topping_count = {
    cheese_1: 0,
    cheese_2: 0,
    cheese_3: 0,
    telya: 0,
    tom: 0,
    mush: 0
}
