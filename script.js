const addTaskPopup = document.getElementById("popupbox");
const cardContainer = document.getElementById("cardcontainer");
const newCardName = document.getElementById("cardname");
let cardID = 0;
const addTaskPopupa = document.getElementById("popupboxa");
const newCardNamea = document.getElementById("cardnamea");
let newCardId = null;
//const newItemInput = document.getElementById("cardnamea");
const addbuttona = document.getElementById('addbuttona');

function showAddTask() {
    var mainparent = document.getElementById('mainparent');

    addTaskPopup.classList.remove("hide");
    mainparent.classList.add("mainparentblur");
    // mainparent.style.filter = 'blur(5px)';
    
}



function hideAddTask() {
    addTaskPopup.classList.add("hide");
    var mainparent = document.getElementById('mainparent');
    mainparent.classList.remove("mainparentblur");
    // mainparent.style.filter = 'blur(5px)';
}


function markdone(button) {
  var itemText = button.parentNode.querySelector('span');
  itemText.style.textDecoration = "line-through";

  button.style.display = "none";
}
// function showAddTaska() {
//     var mainparent = document.getElementById('mainparent');

//     addTaskPopupa.classList.remove("hidea");
//     mainparent.classList.add("mainparentblur");
//     // mainparent.style.filter = 'blur(5px)';
    
// }


function hideAddTaska() {
    addTaskPopupa.classList.add("hidea");
    var mainparent = document.getElementById('mainparent');
    mainparent.classList.remove("mainparentblur");
    // mainparent.style.filter = 'blur(5px)';
}

function checkAndShowNoItemsMessage() {
    const noItemsMessage = document.getElementById("noItemsMessage");
    if (cardContainer.children.length === 0) {
      noItemsMessage.style.display = "block"; 
    } else {
      noItemsMessage.style.display = "none";
    }
  }
  
  window.addEventListener("load", checkAndShowNoItemsMessage);
  



function addCard() {

    cardID++;
    var newCard = document.createElement("div");
    var cardtitle = document.createElement("h2");
    var hrLine = document.createElement('hr');
    var itemList = document.createElement("div");

    //var hrLine2 = document.createElement('hr');
    var buttonContainer = document.createElement("div");
    var deleteButton = document.createElement("button");
    var addItem = document.createElement("button");

    newCard.setAttribute("id", cardID)
    newCard.appendChild(cardtitle) 
    newCard.appendChild(hrLine);
    newCard.appendChild(itemList)
    
    //newCard.appendChild(hrLine2);
    newCard.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteButton)
    buttonContainer.appendChild(addItem)
    cardContainer.appendChild(newCard)

    

    newCard.classList.add("card")
    deleteButton.classList.add('fa-solid','fa-trash-can')
    deleteButton.style.color = '#ffffff';
    deleteButton.classList.add('domdeletebutton');
    addItem.classList.add("cardaddbutton")
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';
    // hrLine.style.color = '#C69D99';
    cardtitle.classList.add('h5tag')
    buttonContainer.classList.add("buttoncontainer");

    // itemList.style.marginBottom = '30px'


    cardtitle.innerText = newCardName.value;

    

   
    cardtitle.addEventListener('click', function () {
        showSelectedCard(newCard);
    });


    // deleteButton.innerText = "<i class="fa-solid fa-trash-can" style="color: #ffffff;"></i>"
    addItem.innerText = "+";

    deleteButton.addEventListener('click', function() {
        newCard.remove();
        showCards();
        checkAndShowNoItemsMessage();
    });

    addItem.addEventListener('click', function() {
// newcode
    newCardId = newCard.getAttribute("id");
    var mainparent = document.getElementById('mainparent');
    addTaskPopupa.classList.remove("hidea");
    mainparent.classList.add("mainparentblur");

   
    });
    
    


    addbuttona.onclick = function() {
     
      if (newCardId !== null) {
          const itemText = newCardNamea.value.trim();
          if (itemText !== '') {
              const selectedCard = document.getElementById(newCardId);
              if (selectedCard) {
                  const itemListDiv = document.createElement('div');
                  itemListDiv.classList.add('item');
                  itemListDiv.innerHTML = `
                      <span id="textcolor">${itemText}</span>
                      <button class="mark-done-button" onclick="markdone(this)">Mark Done</button>
                  `;
                  const itemList = selectedCard.querySelector("div");
                  itemList.appendChild(itemListDiv);
                  newCardNamea.value = '';
              }
          }
         
          hideAddTaska();
         
          newCardId = null;

          
      }
  };

  function showSelectedCard(selectedCard) {
    const cards = document.querySelectorAll('.card');
    const head = document.getElementById('head');
    const cardnamepaste = document.getElementById("cardnamepaste")
    const textphide = document.getElementById("textphide")
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.add('selected');
            head.style.display = "none"
            cardContainer.style.justifyContent="center"
            cardnamepaste.innerText= cardtitle.innerText;
            cardnamepaste.style.display="block";
            textphide.style.display ="none"
        } else {
            card.classList.add('hidden');
        }
    });

    // Show the back button

    
    const backButton = document.getElementById('backButton');
    backButton.classList.remove('hide');

    backButton.addEventListener('click', function () {
        // Show all cards and hide the back button
        const cards = document.querySelectorAll('.card');
        const head = document.getElementById('head');
        const cardnamepaste = document.getElementById("cardnamepaste")
        const textphide = document.getElementById("textphide")
        cards.forEach(card => {
            card.classList.remove('selected', 'hidden');
        });
        backButton.classList.add('hide');
        head.style.display = "block";
        cardContainer.style.justifyContent="space-between";
        cardnamepaste.style.display="none"
        textphide.style.display="block"
    });

    
}

function showCards() {
    const cards = document.querySelectorAll('.card');
    const head = document.getElementById('head');
    const cardnamepaste = document.getElementById("cardnamepaste")
    const textphide = document.getElementById("textphide")
    cards.forEach(card => {
        card.classList.remove('selected', 'hidden');
    });
    backButton.classList.add('hide');
    head.style.display = "block";
    cardContainer.style.justifyContent = "space-between";
    cardnamepaste.style.display = "none";
    textphide.style.display = "block";
}


    checkAndShowNoItemsMessage();

    hideAddTask();

    showCards();
}


  

