const user1 = {
    cart: [],
};
const user2 = {
    cart: [
        { 
            productName: "meat", 
            price: 25 
        },
        { 
            productName: "milk", 
            price: 15 
        },
    ],
};

//method 1//===============================================//
console.log("//method 1//===============================================//")
function method1(user) {
    try {
        console.log(user.cart[0].price);
    } catch (error) {
        console.log(error);
    }
}

method1(user1);
method1(user2);

//method 2//===============================================//
console.log("//method 2//===============================================//")
function method2(user){
    if (user?.cart[0]?.price) {
        console.log(user.cart[0].price);
    } else {
        console.log("Error");
    }
}

method2(user1);
method2(user2);

//method 3//===============================================//
console.log("//method 3//===============================================//")
function method3(user){
    if (user && user.cart[0] && user.cart[0].price) {
        console.log(user.cart[0].price);
    } else {
        console.log("Error");
    }
}

method3(user1);
method3(user2);


