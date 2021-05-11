
const fuse = document.getElementById('fuse');
fuse.addEventListener('click', () => {
    const divs = document.querySelectorAll('.box');
    const div1 = divs[0];
    const div2 = divs[1];
    const div1words = div1.innerHTML;
    const div2words = div2.innerHTML;

   

  const newDiv = document.createElement('div');
    const width = div1.clientWidth + div2.clientWidth;
    const height = div1.clientHeight;
    console.log(width);
    console.log(height);

  newDiv.style.width=width +"px";
  newDiv.style.height=height+ "px";

    div1.remove();
    div2.remove();

    //div1.parentNode.removeChild(div1);
    //div2.parentNode.removeChild(div2);

    document.getElementsByTagName('span')[0].append(newDiv);

    event.preventDefault();













} );



