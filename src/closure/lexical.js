const myGlobal = 1;

function myFunctionFather() {
    const myVariableFather = 2;

    console.log(myGlobal);

    function child() {
        const myVariableChild = 3;

        console.log(myGlobal, myVariableFather);

        function child2() {
            console.log(myGlobal, myVariableFather, myVariableChild);
        }

        return child2();
    }
    return child();
}

myFunctionFather();