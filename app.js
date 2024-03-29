window.onload = function() {
    getTime();
    $(".close").click(deleteItem);
}

function getTime() {
    let today = new Date();
    let options = {weekday: "long", day :"numeric", month: "long"};
    let day = today.toLocaleDateString("en-US", options);
    console.log(day);
    $(".title")[0].innerHTML = day;
}

function newItem() {
    // alert("wow, you clicked on me!");
    let input = document.getElementsByClassName("form-input")[0].value;
    if(input === '') {
        alert("At least write something...");
        return;
    }

    let newDiv = document.createElement("div");
    newDiv.className = "item-box";

    let newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";

    let newInput = document.createTextNode(input);
    let newP = document.createElement("p");
    newP.appendChild(newInput);
    newP.className = "item-text";

    let newClose = document.createElement("span");
    newClose.appendChild(document.createTextNode("x"));
    newClose.className = "close";

    newDiv.appendChild(newCheckBox);
    newDiv.appendChild(newP);
    newDiv.appendChild(newClose);

    let container = document.getElementsByClassName("ul-box")[0];
    container.appendChild(newDiv);

    // set input box to null
    document.getElementsByClassName("form-input")[0].value = '';
    $(".close").click(deleteItem);
}

function deleteItem() {
    $(this).parent().remove();
} 
