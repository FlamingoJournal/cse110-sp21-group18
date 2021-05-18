const btns = document.getElementById("button-group").querySelectorAll('button'); // keys
const addButton = document.getElementById('field_wrapper').querySelector('button'); // Add button selector
const wrapper = document.getElementById('field_wrapper'); // Input field wrapper
btns.forEach((btn) => {
    btn.addEventListener('click',() => {
        const val = btn.value;
        document.getElementById('demo').innerHTML = val;
    });
});
addButton.addEventListener('click',() => {
    const myElement = document.createElement('p');
    const text = document.getElementById('demo').innerHTML+wrapper.querySelector('input').value;
    const textNode = document.createTextNode(text);
    myElement.appendChild(textNode);
    myElement.setAttribute('class', 'entry');
    document.getElementById('entry').appendChild(myElement);
});