const addTaskPopup = document.getElementById("popupbox");
const cardContainer = document.getElementById("cardcontainer");
const newCardName = document.getElementById("cardname");
let cardID = 0;
const addTaskPopupa = document.getElementById("popupboxa");
const newCardNamea = document.getElementById("cardnamea");

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
    var cardtitle = document.createElement("h5");
    var hrLine = document.createElement('hr');
    var itemList = document.createElement("div");
    
    var buttonContainer = document.createElement("div");
    var deleteButton = document.createElement("button");
    var addItem = document.createElement("button");

    newCard.setAttribute("id", cardID)
    newCard.appendChild(cardtitle) 
    newCard.appendChild(hrLine);
    newCard.appendChild(itemList)
    
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
    buttonContainer.style.gap = '5px';
    // hrLine.style.color = '#C69D99';
    cardtitle.classList.add('h5tag')

    // itemList.style.marginBottom = '30px'


    cardtitle.innerText = newCardName.value;
    // deleteButton.innerText = "<i class="fa-solid fa-trash-can" style="color: #ffffff;"></i>"
    addItem.innerText = "+";

    deleteButton.addEventListener('click', function() {
        newCard.remove();
        checkAndShowNoItemsMessage();
    });

    addItem.addEventListener('click', function() {
// newcode
    var mainparent = document.getElementById('mainparent');
    addTaskPopupa.classList.remove("hidea");
    mainparent.classList.add("mainparentblur");
    newCardId = newCard.getAttribute("id");
    });
    
    const newItemInput = document.getElementById("cardnamea");
    const addbuttona = document.getElementById('addbuttona');


    addbuttona.onclick = function() {
    
    const itemText = newItemInput.value.trim();
    if (itemText !== '') {
    const itemListDiv = document.createElement('div');
    itemListDiv.classList.add('item');
    itemListDiv.innerHTML = `
      <span>${itemText}</span>
      <button class="mark-done-button" onclick="markdone(this)">Mark as Done</button>
    `;
    itemList.appendChild(itemListDiv);
    newItemInput.value = '';

    
  }
  hideAddTaska();
};

function markdone(button) {
  var itemText = button.parentNode.querySelector('span');
  itemText.style.textDecoration = "line-through";
}

    checkAndShowNoItemsMessage();

    hideAddTask();
}

// function markdone(){
//   var markdonebutton = document.getElementById('markdone')
//   itemText.style.textDecoration = "line-through";
// }

