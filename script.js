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

const section = document.querySelector('.card-2');
// const addButtons = document.querySelector(".add-btn");

const handleClick = (e) => {
    const addButtons = e.target.matches('button.add-btn');
    // console.log(addButtons);

    const foodList = foods;
    const id = foods.id;
    const price = foods.price;
    const title = foods.title;
    const spicy = foods.spicy;
    const vegetarian = foods.vegetarian;

    const order = 
`
    <article>
        <ul>
            <li>
                <p>
                    ${title}
                </p>
                <span>
                    
                </span>

                <span>
                    ${price}
                </span>
            </li>
        </ul>
    </article>
`;
section.insertAdjacentHTML('beforeend', order);
    console.log(order);
};

window.addEventListener('click', handleClick);
