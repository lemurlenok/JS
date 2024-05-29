    // // взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
    let productsBlock = document.getElementById('products');
    fetch('https://dummyjson.com/carts')
        .then((value) => value.json())
        .then((response) => {
            let carts = response.carts;
            for (const cart of carts) {
                for (const product of cart.products) {
                    let divProductsContainer = document.createElement('div');
                    let divDescription = document.createElement('div');
                    divDescription.innerText = `
                        ID: ${product.id}
                        title: ${product.title}
                        price: ${product.price} $
                        quantity: ${product.quantity} units
                        total: ${product.total} $
                        discount percentage: ${product.discountPercentage} %
                        discounted total: ${product.discountedTotal} $
                        `
                    divProductsContainer.appendChild(divDescription);

                    let divThumbnail = document.createElement('div')
                    let productThumbnail = document.createElement('img')
                    productThumbnail.src = product.thumbnail;
                    divThumbnail.appendChild(productThumbnail);

                    divProductsContainer.appendChild(divThumbnail);

                    productsBlock.appendChild(divProductsContainer);
                }
            }
        });
    //     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

    let recipesBlock = document.getElementById('recipes');
    fetch('https://dummyjson.com/recipes')
        .then((value) => value.json())
        .then((response) => {
            let recipes = response.recipes;
            for (const recipe of recipes) {
                let divRecipesContainer = document.createElement('div');

                let recipeName = document.createElement('h2');
                recipeName.innerText = recipe.name;
                divRecipesContainer.appendChild(recipeName);

                let divInstruction = document.createElement('div');
                divInstruction.classList = 'instruction';

                let recipeID = document.createElement('p');
                recipeID.innerHTML = `<strong>ID:</strong> ${recipe.id}`;
                divRecipesContainer.appendChild(recipeID);

                let divImage = document.createElement('div');
                let recipeImage = document.createElement('img');
                recipeImage.src = recipe.image;
                divImage.appendChild(recipeImage);
                divRecipesContainer.appendChild(divImage);

                let ul = document.createElement('ul');
                ul.innerHTML = `<h3>Ingredients:</h3>`;
                for (const ingredient of recipe.ingredients) {
                    let li = document.createElement('li');
                    li.innerText = `${ingredient}`;
                    ul.append(li);
                }

                let ol = document.createElement('ol');
                ol.innerHTML = `<h3> Instruction:</h3>`;
                for (const instruct of recipe.instructions) {
                    let li = document.createElement('li');
                    li.innerText = `${instruct}`;
                    ol.append(li);
                }

                divInstruction.append(ul, ol);
                divRecipesContainer.appendChild(divInstruction);

                let recipeDescription = document.createElement('div');
                recipeDescription.innerHTML = `
                    <p><strong>Prep Time: </strong>${recipe.prepTimeMinutes} minutes</p>
                    <p><strong>Cook Time: </strong>${recipe.cookTimeMinutes} minutes</p>
                    <p><strong>Servings: </strong>${recipe.servings} portions</p>
                    <p><strong>Difficulty: </strong>${recipe.difficulty}</p>
                    <p><strong>Cuisine: </strong>${recipe.cuisine}</p>
                    <p><strong>Calories Per Serving: </strong>${recipe.caloriesPerServing} ckal</p>
                    <p><strong>Tags: </strong>${recipe.tags}</p>`;
                divRecipesContainer.appendChild(recipeDescription);





                recipesBlock.appendChild(divRecipesContainer);
            }
        });

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

