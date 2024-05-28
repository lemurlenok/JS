    // // взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
    // let productsBlock = document.getElementById('products');
    // fetch('https://dummyjson.com/carts')
    //     .then((value) => value.json())
    //     .then((response) => {
    //         let carts = response.carts;
    //         for (const cart of carts) {
    //             for (const product of cart.products) {
    //                 let divProductsContainer = document.createElement('div');
    //                 let divDescription = document.createElement('div');
    //                 divDescription.innerText = `
    //                     ${product.id}
    //                     ${product.title}
    //                     ${product.price} $
    //                     ${product.quantity} units
    //                     ${product.total} $
    //                     ${product.discountPercentage} %
    //                     ${product.discountedTotal} $
    //                     `
    //                 divProductsContainer.appendChild(divDescription);
    //
    //                 let divThumbnail = document.createElement('div')
    //                 let productThumbnail = document.createElement('img')
    //                 productThumbnail.src = product.thumbnail;
    //                 divThumbnail.appendChild(productThumbnail);
    //
    //                 divProductsContainer.appendChild(divThumbnail);
    //
    //                 productsBlock.appendChild(divProductsContainer);
    //             }
    //         }
    //     });
    // //     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
    //
    // let recipesBlock = document.getElementById('recipes');
    // fetch('https://dummyjson.com/recipes')
    //     .then((value) => value.json())
    //     .then((response) => {
    //         let recipes = response.recipes;
    //         for (const recipe of recipes) {
    //             let divRecipesContainer = document.createElement('div');
    //
    //             // Назва рецепту
    //             let recipeName = document.createElement('h2');
    //             recipeName.innerText = recipe.name;
    //             divRecipesContainer.appendChild(recipeName);
    //
    //             // Опис рецепту
    //             let recipeDescription = document.createElement('div');
    //             recipeDescription.innerText = `
    //                 ID: ${recipe.id}
    //                 Ingredients: ${recipe.ingredients}
    //                 Instructions: ${recipe.instructions}
    //                 Prep Time: ${recipe.prepTimeMinutes} minutes
    //                 Cook Time: ${recipe.cookTimeMinutes} minutes
    //                 Servings: ${recipe.servings} portions
    //                 Difficulty: ${recipe.difficulty}
    //                 Cuisine: ${recipe.cuisine}
    //                 Calories Per Serving: ${recipe.caloriesPerServing} calories
    //                 Tags: ${recipe.tags}`;
    //             divRecipesContainer.appendChild(recipeDescription);
    //
    //
    //             let divImage = document.createElement('div');
    //             let recipeImage = document.createElement('img');
    //             recipeImage.src = recipe.image;
    //             divImage.appendChild(recipeImage);
    //             divRecipesContainer.appendChild(divImage);
    //
    //             recipesBlock.appendChild(divRecipesContainer);
    //         }
    //     });


//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

