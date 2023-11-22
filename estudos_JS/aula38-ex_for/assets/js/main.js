const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); 


//cor da fonte
const estilosFonte = getComputedStyle(document.body);
const fonte = estilosFonte.color;
console.log(fonte);

// cor do background
const estilosBody = getComputedStyle(document.body);
const background = estilosBody.backgroundColor;
console.log(background);

for (let i  of ps){
  i.style.backgroundColor = background;
  i.style.color = '#fff';
}