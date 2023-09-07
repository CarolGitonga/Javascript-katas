class Dog {
    //This is the constructor for the class.
    //It is called whenever a Dog object is created.
    //takes 5 parameters
    constructor(name, month, day, year, sound){
    this.name = name;
    this.month = month;
    this.year = year;
    this.day =day;
    this.sound = sound;
}

speak(){
    return `${this.name} says ${this.sound}`;
}
get_name(){
    return this.name;
}
birth_date(){
    return `${this.month}/${this.day}/${this.year}`;
}
change_bark(new_sound){
    this.sound = new_sound;
}
//add a custom combine_dogs method to combine two dogs and create a puppy.
combine_dogs(other_dog){
    const puppyName = `Puppy of ${this.name} and ${other_dog.name}`;
    const puppySound = this.sound + other_dog.sound;
    return new Dog(puppyName, this.month,this.day, this.year + 1, puppySound);

}
}

//Instances of the Dog class are created using the new keyword.
const boyDog = new Dog("Bingo", 2, 5, 2020, "WOOFWOOF");
const girlDog = new Dog("Katey", 13, 7, 2020, " barkbark ");
console.log(boyDog.speak());
console.log(girlDog.speak());

// Access the birth_date method
console.log(boyDog.birth_date());
console.log(girlDog.birth_date());

boyDog.change_bark("woofywoofy");
console.log(boyDog.speak());

const puppy = boyDog.combine_dogs(girlDog);
console.log(puppy.speak());
console.log(puppy.get_name());
console.log(puppy.birth_date());

/*
Output
Bingo says WOOFWOOF
Katey says  barkbark 
2/5/2020
13/7/2020
Bingo says woofywoofy
Puppy of Bingo and Katey says woofywoofy barkbark 
Puppy of Bingo and Katey
2/5/2021
*/