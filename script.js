document.addEventListener('DOMContentLoaded', () => {
    //cards
    const cardArray = [ 
        {
            name: "blue",
            img: "img/blue.png"
        },
        {
            name: "blue",
            img: "img/blue.png"
        },
        {
            name: "green",
            img: "img/green.png"
        },
        {
            name: "green",
            img: "img/green.png"
        },
        {
            name: "red",
            img: "img/red.png"
        },
        { 
             name: "red",
             img: "img/red.png"
        },
        {
            name: "orange",
            img: "img/orange.png"
        },
        {
            name: "orange",
            img: "img/orange.png"
        },
        {
            name: "pink",
            img: "img/pink.png"
        },
        {
            name: "pink",
            img: "img/pink.png"
        },
        {
            name: "purple",
            img: "img/purple.png"
        },
        {
            name: "purple",
            img: "img/purple.png"
        }
    
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Woohoo! You found a match!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Silly Goose! Try again!')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
