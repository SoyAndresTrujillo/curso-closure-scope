function greeting() {
    const userName = 'Andrés';

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());