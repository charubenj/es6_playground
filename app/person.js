import {addToDom} from './helpers';


export class Person {

    constructor(name){
        this.name=name;
    }

    speak(text){
        addToDom(`${this.name} says : ${text}`);
    }


    greet(){
        this.speak(`Hello, my name is ${this.name}`);
    }
}

export class SuperPerson extends Person{   // when u extend a class and don't need any properties u don't need constructor

    constructor(name, superpower){
        super(name);       // call parent class constructor

        this.superpower=superpower;

    }

    saySuperpower(){
        this.speak(`my superpower is ${this.superpower}`);
    }
}