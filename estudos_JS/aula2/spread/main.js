let listElement = document.querySelector('.app');

let posts = [];

function criaApp() {
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
      posts = json;

      posts.map((item) => {
        let liElement = document.createElement('li');
        let titleElement = document.createElement('strong');
        let imgElement = document.createElement('img');
        let descriptElement = document.createElement('a');

        let titletText = document.createTextNode(item.titulo);
        titleElement.appendChild(titletText);
        liElement.appendChild(titleElement);

        imgElement.src = item.capa;
        liElement.appendChild(imgElement);

        let descriptText = document.createTextNode(item.subtitulo);
        descriptElement.appendChild(descriptText);
        liElement.appendChild(descriptElement);

        listElement.appendChild(liElement);
      })
    })
    .catch(() => {
      console.log('error')
    })
}

criaApp()