// arrays of first names and last names
const firstNames = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack'
];

const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'
];

// function to generate a random name
function generateRandomName() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`; // combines the first and last name
}

// get references to the display and button elements
const nameDisplay = document.getElementById('name-display');
const generateBtn = document.getElementById('generate-btn');

// event listener for the button
generateBtn.addEventListener('click', function() {
    nameDisplay.textContent = generateRandomName(); // update the display with a new random name
});
