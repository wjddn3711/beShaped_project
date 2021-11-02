const quotes = [
{
    quote: "승자는 책임지는 태도로 살며, 패자는 약속을 남발한다" ,
    author:"유태경전",
},
{
    quote: "고통을 거치지 않고 얻은 승리는 영광이 아니다" ,
    author:"나폴레옹",
},
{
    quote: "역경은 사람을 부유하게 하지는 않으나 지혜롭게 한다" ,
    author:"풀러",
},
{
    quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비다" ,
    author:"메이슨 쿨리",
},
{
    quote: "절대 포기하지 마라. 장벽에 부딪히거든, 그것이 절실함을 나에게 물어보는 장치에 불과하다는 것을 잊지 마라" ,
    author:"랜디 포시",
},
{
    quote: "성공은 최종적인 게 아니며 실패는 치명적인 게 아니다. 중요한 것은 지속하고자 하는 용기다" ,
    author:"윈스턴 처칠",
},
{
    quote: "실패는 고통스럽다. 그러나 최선을 다하지 못했음을 깨닫는 것은 몇 배 더 고통스럽다" ,
    author:"엔드류 매튜스",
},
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

// 0~ 5 까지 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
