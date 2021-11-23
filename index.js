let firstCard = 10
let secondCard = 3
let sum = firstCard + secondCard
let isBlackjack = false
let isAlive = true

message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl)
let cardsEl = document.getElementById("cards-el")

let sumEl = document.getElementById("sum-el")

function startGame()
{  cardsEl.textContent = "Cards" + firstcard + ' ' + secondCard 
   sumEl.textContent = "Sum: " + sum

    if (sum <= 20)
    {
       message = " Do you want to draw another card?"
    }else if(sum === 21)
    {
       message = "Wow, you have got a BlackJack!"
       isBlackjack = true
    }else
    {
       message = "You are out of the Game!"
       isAlive = false
    }
    messageEl.textContent= message
}
function newCard()
  {
   console.log("Drawing a new card from the deck!")
   let card = 6
   
   sum += card
   
   startGame()
}