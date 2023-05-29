const nameOfStory = "The Birthday Surprise";
let fname = prompt("Enter your name: ");
let gender = prompt("Enter your gender: ");
let age = parseInt(prompt("Enter your age: "));
let place = prompt("Enter the name of the place you had the birthday Surprise: ");
let emotion= prompt("Enter how you felt here: ");
let  nameofperson= prompt("Enter the name of the person who gave you the birthday surprise: ");
let gifts = prompt("Input the name of the gifts you received: ");
let date =(prompt("Enter the date you had your birthday: "));
let country = prompt("Enter the name of  country you had the surprise from: ");
let memories = prompt("What is your favorite memories: ");

function dynamicStory() {



    let preface = `My name is ${fname}. I am ${gender}. I am ${age} years old. The title of my story is ${nameOfStory}.`

    let story = ` My bestfriend's name  is ${nameofperson} and he gave me  Birthday Surprise with ${gifts}. I was very ${emotion} and it was ${date}.
      ${nameofperson}, and I enjoy eating ${favoriteFood}. Life is an adventure, and every day brings new surprises.
       Together, with my bestfriend we explore the wonders of ${place} and create memories that will last a lifetime.
       I am grateful for the love my bestfriend showed me since,he proposed  to me on my birthday and I accepted it.`;

    let fullStory = preface + story;
    let result = alert(fullStory);

    return result;
}

dynamicStory();

