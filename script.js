console.log("Let's do this!!!");

const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];

// const foodList = document.querySelector('.food-list');
// const section = document.querySelector('.card-2');



const container = document.querySelector('.card');
const generateButton = document.querySelector('.generate-btn');

const listOfFood = foods.map(food => `
<ul>
    <li class="food-list spicy">
        <p class="title">
            ${food.title}
        </p>
        <span class="price">
            ${food.price} Ar
        </span>
        <button 
        type="button"
        class="add-btn"
        >Add</button>
    </li>
</ul>
`)
.join();

container.insertAdjacentHTML('beforeend', listOfFood);



const spicyFood = foods.filter(food => food.spicy === true);
console.log(spicyFood);

function checkbox() {
    const spice = document.querySelector('#spicy');
    if (spice.checked == true) {
        const spicyFoods = `
        <ul>
            <li>
                <p class="title">
                    ${foods[i].title}
                </p>
                <span class="price">
                    ${foods[i].price} Ar
                </span>
                <button 
                type="button"
                class="add-btn"
                >Add</button>
            </li>
            <li></li>
        </ul>
        `;
    }
}


const foodForVegetarian = foods.filter(food => food.vegetarian === true);
console.log(foodForVegetarian);







