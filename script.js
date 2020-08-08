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

// Grab some of the elments that are needed.
const container = document.querySelector('.card');
const order = document.querySelector('.order');
const list = document.querySelector('.food-list');
const confirmBtn = document.querySelector('.btn-confirm');
const modalOuter = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');


// Generate the object to html.
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


// Put the html in the dom.
container.insertAdjacentHTML('beforeend', listOfFood);



// A function for the spicy food checkbox.
const spice = document.querySelector('#spicy');
const checkbox = (checkbox) => {
    if (checkbox.checked === true) {
        const spicyFood = foods.filter(food => food.spicy === true);
        console.log(spicyFood);
        const foodSpicy = spicyFood.map(food => 
        `<ul>
            <li class="food-list">
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
        `);
        container.innerHTML = foodSpicy.join('');
    }
};



// A function the vegetariane food checkbox.
const vegetarian = document.querySelector('#vegetarian');
const checkbox2 = (checkbox) => {
    if (checkbox.checked === true) {
        const vegetaranFood = foods.filter(food => food.vegetarian === true);
        const foodForVegetaran = vegetaranFood.map(food => 
        `<ul>
            <li class="food-list">
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
        `);
        container.innerHTML = foodForVegetaran.join('');
    }
};

// window.addEventListener('click', (e) => {
//     const addBtns = e.target.matches('button.add-btn');
//     console.log(addBtns);
// });


// A functon to create the modal.
const handleClick = (e) => {
    const myModal = `
        <section>
            <header>
                <h2>
                    Thank you!
                </h2>
            </header>

            <div>
                <p>
                    Your order is confirmed. We will prepare your food, and deliver it to you when it's rieady.
                </p>
                <p>
                    The total amount is
                </p>
            </div>

            <button type="button" class="close-button">Close</button>
        </section>
    `;
    innerModal.insertAdjacentHTML("beforeend", myModal);
    modalOuter.classList.add('open');
};
confirmBtn.addEventListener('click', handleClick);

// A functcion for closing the modal.
const closeModal = (e) => {
	modalOuter.classList.remove('open');
};


// Event listeners for closing the modal by clicking outside or pressing escape key.

modalOuter.addEventListener('click', (e) => {
	const isOutside = !e.target.closest('.inner-modal');
    if (isOutside) {
		closeModal();

	}
});

window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
});


// window.addEventListener('click', (e) => {
//     const closeBtn = e.target.matches('button.close-button');
//     console.log(closeBtn)
//     modalOuter.classList.remove('open');
// });










