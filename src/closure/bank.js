function bank() {
    let saveCoins = 0;

    function saving(coins) {
        saveCoins += coins;
        console.log(`My account: $${saveCoins}`);
    }

    return saving;
}

const myBank = bank();
myBank(5);
myBank(10);
myBank(20);

const danielBank = bank();
danielBank(15);
danielBank(15);
danielBank(25);


// Exercise

function validateHoursWorked() {
    const hourLaw = 8;
    let hoursWorked = 0;

    function workedEmployee(hours) {
        hoursWorked += hours;

        const lackHours = hourLaw - hoursWorked;

        if (hoursWorked < hourLaw) {
            console.log(`Al empleado le faltan ${lackHours} horas laborales.`);
        } else if (hoursWorked > hourLaw) {
            console.log(`El empleado trabajó ${hoursWorked} horas laborales.`);
        } else {
            console.log(`El empleado cumplió con las ${hoursWorked} horas laborales.`);
        }
    }

    return workedEmployee;
}

const employee1 = validateHoursWorked();
employee1(4);

const employee2 = validateHoursWorked();
employee2(8);

const employee3 = validateHoursWorked();
employee3(10);

function createPetList() {
    // Tu código aquí 👈
    const arrayPet = [];

    return function addPet(pet) {
        if (pet) {
            arrayPet.push(pet);
        }

        console.log(arrayPet);
    }
}

const pet1 = createPetList();
pet1('cat');
pet1('dog');
pet1(undefined);

const pet2 = createPetList();
pet2('pelican');
pet2('bird');
pet2();