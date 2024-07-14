'use strict';

async function getCategories() {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)
        foodSearch.innerHTML = "";

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json()
        console.log(response);
        displayCategories(response.categories)
        $(".loadingLogo").fadeOut(300)
    } catch {
        console.error(error)
    }
}


async function getArea() {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        foodSearch.innerHTML = "";

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        response = await response.json()
        console.log(response);
        displayArea(response.meals)
        $(".loadingLogo").fadeOut(300)

    }
    catch {
        console.error(error);
    }
}



async function getIngredients() {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        foodSearch.innerHTML = "";

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        response = await response.json()
        console.log(response);
        displayIngredients(response.meals.slice(0, 20))
        $(".loadingLogo").fadeOut(300)
    } catch {
        console.error(error);
    }
}


async function getCategoryMeals(category) {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        response = await response.json()
        console.log(response);

        displayMeals(response.meals.slice(0, 20))
        $(".loadingLogo").fadeOut(300)
    } catch {
        console.error(error);
    }

}

async function getAreaMeals(areaMeal) {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaMeal}`)
        response = await response.json()
        console.log(response);
        displayMeals(response.meals.slice(0, 20))
        $(".loadingLogo").fadeOut(300)
    } catch {
        console.error(error);
    }


}



async function getIngredientsMeals(ingredients) {
    try {

        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
        response = await response.json()
        console.log(response);
        displayMeals(response.meals.slice(0, 20))
        $(".loadingLogo").fadeOut(300)

    } catch {
        console.error(error);
    }

}



async function getMealDetails(mealID) {
    try {
        rollIn()
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        foodSearch.innerHTML = "";
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
        response = await response.json();
        console.log(response);
        displayMealDetails(response.meals[0])
        $(".loadingLogo").fadeOut(300)

    } catch {
        console.error(error);

    }


}
