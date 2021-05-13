var btns = document.getElementById("button-group").querySelectorAll('button');
var addButton = document.getElementById('field_wrapper').querySelector('button'); //Add button selector
var wrapper = document.getElementById('field_wrapper'); //Input field wrapper
btns.forEach((btn) => {
    btn.addEventListener('click',() => {
        let val = btn.value;
        document.getElementById('demo').innerHTML = val;
    });
});
addButton.addEventListener('click',() => {
    let myElement = document.createElement('p');
    let text = document.getElementById('demo').innerHTML+wrapper.querySelector('input').value;
    let textNode = document.createTextNode(text);
    myElement.appendChild(textNode);
    myElement.setAttribute('class', 'entry');
    document.getElementById('entry').appendChild(myElement);
});