const quizDB =[
    {
        question: "Q1 : what the full form of HTML ?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2 : How many sizes of headers are available in HTML by default ?",
        a: "5",
        b: "1",
        c: "3",
        d: "6",
        ans: "ans4"
    },
    {
        question: "Q3 : What are the types of lists available in HTML ?" ,
        a: "Ordered, Unordered Lists",
        b: "Bulleted, Numbered Lists",
        c: "Named, Unnamed Lists",
        d: "None of this above",
        ans: "ans1"

    },
    {
        question: "Q4 : How to create an ordered list in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<href>",
        d: "<b>",
        ans: "ans2"
    },
    {
        question: "Q5 : Which of the following is correct about HTML?",
        a: "HTML uses User defined Tags",
        b: "HTML uses tags defined within the languagre",
        c: "Both A and B ",
        d: "None of this above",
        ans: "ans2"
    },

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.answer)');

let questionCount = 0;

const loadQuestion = () => {
    question .innerText = quizDB[0].question;
    question.innerText = questionList.question
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answers;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        return answer ;
    })

}
submit.addEventListener('click', () =>{

    const checkedAnswer =getCheckAnswer();
    console.log(checkedAnswer);
})
