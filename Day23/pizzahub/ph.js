function getShopIds() {
    const url = `api/pizzahub`;
    return query(url);
}

function getPizzaList(shopId) {
    const url = `api/pizzahub/pizzas/${shopId}`;
    return query(url);
}

function orderPizza(type, name) {
    getShopIds()
    .then((shopIds) => {getPizzaList(shopIds[0])})
    .then((pizzas) => {console.log(pizzas)})
}

//call the orderPizza method
orderPizza("veg", "Margerita Pizza");