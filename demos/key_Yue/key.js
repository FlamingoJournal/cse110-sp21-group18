let btns = document.getElementById("button-group").querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click',() => {
        let val = btn.value;
        document.getElementById('demo').innerHTML = val;
    });
});