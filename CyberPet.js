
// import inquirer
import inquirer from 'inquirer'

let myPet;
let pet;


// Questions
const init = () => {
    inquirer
        .prompt(

            [
                {
                    type: 'input',
                    name: 'pet_name',
                    message: 'What is the name of your pet nick name, please?',
                },
                {
                    type: 'list',
                    name: 'selectPet',
                    message: 'Select a pet you want from the list below',
                    choices: ['Dog', 'Cat', 'Rabbit'],
                },
                {
                    type: 'input',
                    name: 'pet_fname',
                    message: 'What is the first name of your pet, please?',
                },
                {
                    type: 'input',
                    name: 'pet_lname',
                    message: 'What is the name of last your pet, please?',
                },
                {
                    type: 'number',
                    name: 'pet_age',
                    message: 'How old is your pet, please?',
                }
            
            ])
    .then((response) =>{
        response.selectPet == "Dog" ? myPet = Dog
        : response.selectPet == "Cat" ? myPet = Cat
        : myPet = Rabbit;

        pet = createAnimal(response.pet_name, myPet, response.pet_fname, response.pet_lname, response.pet_age);
        console.log(`Your pet details are ${pet.details}`);
          
    })
    .then(() =>{gamePlay();});

}  

function createAnimal(animalName, animalClass, first_name, last_name, age){
    return animalName = new animalClass(first_name, last_name, age);
}

//Game Questions
function gamePlay(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "actions",
                message: "What do you want to do with your pet?",
                choices: ["play", "feed", "give_drink", "put_to_bed", "allow_to_fight"]
            }
        ])
        
        .then((answer) =>{
            answer.actions = "play" ? pet.playing()
            : answer.actions = "feed" ? pet.eating()
            : answer.actions = "give_drink" ? pet.thirsty()
            : answer.actions = "put_to_bed" ? pet.sleeping()
            : myPet.fighting();
        })

        .then(() => {
            gamePlay();
        });
     }

// Class For Animal
class Animals{
    constructor(fname, sname, age){
        this.fname = fname;
        this.sname = sname;
        this.age = age;
    }
    details = {
        hungry : 10, 
        thirsty : 10,
        energy : 10,
        health : 10,
        happy : 10,
        sad : 10
    }



    playing = () => {
        this.details.happy += 2;
        this.details.thirsty -= 2;
        this.details.energy -= 3;
        this.details.sad -= 2;
        this.details.hungry -= 2; 
        this.details.health += 1;
        console.log(this.details);
    }

    eating = () => {
        this.details.hungry += 2;
        this.details.thirsty -=2;
        this.details.health += 1;
        // this.sad -= 1;
        this.details.happy += 1;
        console.log(this.details);
    }

    drinking = () => {
        this.details.happy += 1;
        this.details.thirsty += 2;
        this.details.energy += 1;
        // this.sad -= 2;
        this.details.hungry -= 1;
        this.details.health += 1;
        console.log(this.details); 
    }

    sleeping = () => {
        this.details.happy -= 2;
        this.details.thirsty -= 1;
        this.details.energy += 1;
        this.details.sad += 2;
        this.details.hungry -= 1;
        this.details.health += 1;
        console.log(this.details); 
    }

    fighting = () => {
        this.details.happy -= 2;
        this.details.thirsty -= 2;
        this.details.energy -= 4;
        this.details.sad += 3;
        this.details.hungry -= 2;
        this.details.health -= 3;
        console.log(this.details); 
    }
}

// create class instances
//Dog Class

class Dog extends Animals{
    constructor(fname, sname, age){
        super(fname, sname, age);
    }

  
}

//Rabbit Class
class Rabbit extends Animals{
    constructor(fname, sname, age){
        super(fname, sname, age);
    }
    

}

//Cat Class
class Cat extends Animals{
    constructor(fname, sname, age){
        super(fname, sname, age);
    }
    

}


init();