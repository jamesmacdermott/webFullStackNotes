// We could use functions

let baseSalary = 30000;
let rate = 20;
let overtime = 5;

const getOvertimeSalary = (baseSalary,rate,overtime) => {
    return (baseSalary + rate*overtime)
};
console.log("Salary:" + getOvertimeSalary(baseSalary,rate,overtime));

// But a better way is to use an object

let employee = {
    baseSalary: 30000,
    overtime: 5,
    rate: 25,
    getOvertimeSalary2: function(){
        return this.baseSalary + this.overtime * this.rate;
    }
};
console.log("Salary:" + employee.getOvertimeSalary2())



////////////////////


function createCircle(radius){ // This is called a factory function -- creates objects
    let circle = {
        radius, // Property // same as : radius: radius
        draw: function(){
            console.log('Circle Drawn')
        } // Methods
    }
    return circle
}

let circle1 = createCircle(1);
let circle2 = createCircle(5);

// Constructor Function

function CircleConstructor(radius){ // Uppercase first letter, helping to indicate class
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
};

const circle3 = new CircleConstructor(2);

// Adding & Removing Properties

circle3.location = {
    x: 1,
    y: 1
};

for (let key in circle3){
   console.log(circle3[key]);
}

// Abstraction

function Circle(radius){
    this.radius = radius;
    this.defaultLocation = {
        x: 0,
        y: 0
    };
    this.computeOptimumLocation = function(){

    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('Drawn')
    };
}

let circle = new Circle(10);
circle.draw();


function ScopeCircle(radius){
    this.radius = radius;

    let defaultLocation = {x: 0,y: 0};
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    // We can also use
    Object.defineProperty(this,'defaultLocation',{ // (this, property/method Name, get/set methods)
        get: function(){
            return defaultLocation
        },
        set: function(value){
            if (!value.x || !value.y){
                throw new Error('Invalid location')
            }
            defaultLocation = value;
        }
    })
}
const scopeCircle =  new ScopeCircle(5)
console.log("defaultLocation: ",scopeCircle.defaultLocation);
scopeCircle.defaultLocation = {x:1,y:2};
console.log("defaultLocationUpdated: ",scopeCircle.defaultLocation);
