// CODE here for your Lambda Classes


class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
}

class Instructors extends Person{
    constructor(iAttributes){
        super(iAttributes);
        this.specialty = iAttributes.specialty;
        this.favLanguage = iAttributes.favLanguage;
        this.catchPhrase = iAttributes.catchPhrase;
    };
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };
    grade(subject) {
        return `${Students.name} receives a perfect score on ${subject}!`;
    };
}


const stan = new Instructors({
    name: "Stan",
    age: 38,
    location: "Belize",
    specialty: "Javascript",
    favLanguage: "C",
    catchPhrase: "I C what you did there!"
});

const squid = new Instructors({
    name: "Squidward",
    age: 29,
    location: "Bikini Bottom",
    specialty: "Clarinet",
    favLanguage: "Assembly",
    catchPhrase: "Here we go again..."
});

class Students extends Person{
    constructor(sAttributes){
        super(sAttributes);
        this.previousBackground = sAttributes.previousBackground;
        this.className = sAttributes.className;
        this.favSubjects = sAttributes.favSubjects;
    }
    listsSubject(){
        return `${this.favSubjects}.`;
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    };
}

const mike = new Students({
    name: "Mike",
    age: 26,
    location: "Marlton",
    previousBackground: 'Advertising Sales',
    className: 'Web Development',
    favSubjects: ['JavaScript', "SQL", "CSS"]
});

const sponge = new Students({
    name: "Spongebob Squares",
    age: '???',
    location: "Pineapple @ Bikini Bottom",
    previousBackground: 'Fry Cook',
    className: 'Advanced Comp Science',
    favSubjects: ['JavaScript', "GO", "Solidity"]
});

const patrick = new Students({
    name: "Patrick Starr",
    age: '???',
    location: "Rock @ Bikini Bottom",
    previousBackground: 'Advertising Sales',
    className: 'Advanced Comp Science',
    favSubjects: ['Haskell', "SQL", "Pearl"]
});

class ProjectManagers extends Instructors{
    constructor(pmAttributes){
        super(pmAttributes)
            this.gradClassName = pmAttributes.gradClassName;
            this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announced to ${channel}, "@${channel} standy times!"`;
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    };
}

const crab = new ProjectManagers({
    name: "Mr. Krabs",
    age: 64,
    location: "Bikini Bottom",
    specialty: "Money",
    favLanguage: "HTML",
    catchPhrase: "I smell money!",
    gradClassName: "HTML Basics",
    favInstructor: "Squidward"
});

const squirrel = new ProjectManagers({
    name: "Sandy Cheeks",
    age: 31,
    location: "GeoDome @ Bikini Bottom",
    specialty: "Machine Learning",
    favLanguage: "Binary",
    catchPhrase: "Awww shucks.",
    gradClassName: "Advanced Data Structures and AI Design",
    favInstructor: "Squidward"
});



console.log(stan.catchPhrase);
console.log(squid.demo('Javascript IV'));
console.log(sponge.listsSubject());
console.log(mike.sprintChallenge('JavaScript'));
console.log(squirrel.debugsCode(sponge, "Solidity"));
console.log(crab.standUp('freelance'));