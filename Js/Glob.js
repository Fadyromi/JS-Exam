'use strict';

let foodData = document.getElementById("foodData");
let foodSearch = document.getElementById("foodSearch");
let subButton;

$(document).ready(() => {
    nameSearch("").then(() => {
        $(".loading-screen").fadeOut(500)
        $("body").css("overflow", "visible")

    })
})






function displayMeals(area) {
    let Void = "";

    for (let i = 0; i < area.length; i++) {
        Void += `
        <div class="col-md-3">
                <div onclick="getMealDetails('${area[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${area[i].strMealThumb}" alt="" srcset="">
                    <div class="foodCardAnimi position-absolute d-flex align-items-center text-black p-2">
                        <h3>${area[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }

    foodData.innerHTML = Void
}



async function getCategories() {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)
        foodSearch.innerHTML = "";

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json()

        displayCategories(response.categories)
        $(".loadingLogo").fadeOut(300)
    } catch {
        console.error(error)
    }
}

function displayCategories(arr) {
    let Void = "";

    for (let i = 0; i < arr.length; i++) {
        Void += `
        <div class="col-md-3">
                <div onclick="getCategoryMeals('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strCategoryThumb}" alt="" srcset="">
                    <div class="foodCardAnimi position-absolute text-center text-black p-2">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    foodData.innerHTML = Void
}


async function getArea() {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        foodSearch.innerHTML = "";

        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        respone = await respone.json()
        displayArea(respone.meals)
        $(".loadingLogo").fadeOut(300)

    }
    catch {
        console.error(error);
    }
}


function displayArea(area) {
    let Void = "";

    for (let i = 0; i < area.length; i++) {
        Void += `
        <div class="col-md-3">
                <div onclick="getAreaMeals('${area[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${area[i].strArea}</h3>
                </div>
        </div>
        `
    }

    foodData.innerHTML = Void
}


async function getIngredients() {
    try {
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        foodSearch.innerHTML = "";

        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        respone = await respone.json()

        displayIngredients(respone.meals.slice(0, 20))
        $(".loadingLogo").fadeOut(300)
    } catch {
        console.error(error);
    }
}


function displayIngredients(ingre) {
    let Void = "";

    for (let i = 0; i < ingre.length; i++) {
        Void += `
        <div class="col-md-3">
                <div onclick="getIngredientsMeals('${ingre[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${ingre[i].strIngredient}</h3>
                        <p>${ingre[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
        </div>
        `
    }

    foodData.innerHTML = Void
}


async function getCategoryMeals(category) {
    foodData.innerHTML = ""
    $(".loadingLogo").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 20))
    $(".loadingLogo").fadeOut(300)

}



async function getAreaMeals(area) {
    foodData.innerHTML = ""
    $(".loadingLogo").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 20))
    $(".loadingLogo").fadeOut(300)

}


async function getIngredientsMeals(ingredients) {
    foodData.innerHTML = ""
    $(".loadingLogo").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 20))
    $(".loadingLogo").fadeOut(300)

}

async function getMealDetails(mealID) {
    rollIn()
    foodData.innerHTML = ""
    $(".loadingLogo").fadeIn(300)

    foodSearch.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();

    displayMealDetails(respone.meals[0])
    $(".loadingLogo").fadeOut(300)

}


function displayMealDetails(meal) {

    foodSearch.innerHTML = "";


    let ingredients = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")

    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }



    let Void = `
<div class="w-100 bg-danger d-flex position-relative ">
      <button class="btn  reload position-absolute  border-2 border-danger text-danger">Reload</button>
    </div>

    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

    foodData.innerHTML = Void
}


function goToSearch() {
    foodSearch.innerHTML = `
    <div class="w-100 bg-danger d-flex position-relative ">
      <button class="btn  reload position-absolute  border-2 border-danger text-danger">Reload</button>
    </div>
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input onkeyup="nameSearch(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="firstLetterSearch(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`

    foodData.innerHTML = ""
}

async function nameSearch(name) {
    rollIn()
    foodData.innerHTML = ""
    $(".loadingLogo").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".loadingLogo").fadeOut(300)

}

async function firstLetterSearch(fLEnter) {
    rollIn()
    foodData.innerHTML = ""
    $(".loadingLogo").fadeIn(300)

    fLEnter == "" ? fLEnter = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fLEnter}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".loadingLogo").fadeOut(300)

}



$('.reload').click(
    function () { location.relo