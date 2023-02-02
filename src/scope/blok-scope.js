function fruits() {
    if(true) {
        var fruit1 = 'Banana'; // function scope
        let fruit2 = 'Apple'; // block scope
        const fruit3 = 'Pine'; // block scope
        
        console.log(fruit2);
        console.log(fruit3);    
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();