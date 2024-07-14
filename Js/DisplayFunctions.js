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






function displayMeals(meal) {
    let Void = "";

    for (let i = 0; i < meal.length; i++) {
        Void += `
        <div class="col-md-3">
                <div onclick="getMealDetails('${meal[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${meal[i].strMealThumb}" alt="" srcset="">
                    <div class="foodCardAnimi position-absolute d-flex align-items-center text-black p-2">
                        <h3>${meal[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }

    foodData.innerHTML = Void
}





function displayCategories(category) {
    let Void = "";

    for (let i = 0; i < category.length; i++) {
        Void += `
        <div class="col-md-3">
                <div onclick="getCategoryMeals('${category[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${category[i].strCategoryThumb}" alt="" srcset="">
                    <div class="foodCardAnimi position-absolute text-center text-black p-2">
                        <h3>${category[i].strCategory}</h3>
                        <p>${category[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    foodData.innerHTML = Void
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
      <button id="reload" class="btn  reload position-absolute  border-2 border-danger text-danger">Reload</button>
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
    try {

        rollIn()
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        response = await response.json()
        console.log(response);
        response.meals ? displayMeals(response.meals) : displayMeals([])
        $(".loadingLogo").fadeOut(300)


    } catch {
        console.error(error);
    }

}

async function firstLetterSearch(fLEnter) {
    try {
        rollIn()
        foodData.innerHTML = ""
        $(".loadingLogo").fadeIn(300)

        fLEnter = fLEnter === "" ? "a" : fLEnter;
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fLEnter}`)
        response = await response.json()
        console.log(response);
        response.meals ? displayMeals(response.meals) : displayMeals([])
        $(".loadingLogo").fadeOut(300)


    } catch {
        console.error(error);
    }

}



