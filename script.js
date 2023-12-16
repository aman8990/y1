const btn = document.querySelector('.btn');
// const apiLink = 'https://api.vevioz.com/apis/button/mp3?url=';
const apiLink = 'https://api.vevioz.com/apis/widgetv2?url=';

btn.addEventListener('click', function (event) {
  event.preventDefault();

  const link = document.getElementById('inputText').value;
  const finalLink = apiLink + link;
  // console.log(finalLink);

  // window.open(apiLink + link, '_blank');

  const iframeElement = document.getElementById('iframe');
  iframeElement.src = finalLink;

  console.log(iframeElement);

  setTimeout(() => {
    iframeElement.classList.add('active');
  }, 2000);

  // const containerElement = document.getElementById('container');

  // iframeElement.width = '100%';
  // iframeElement.height = '500px';

  // containerElement.innerHTML = '';
  // containerElement.appendChild(iframeElement);
});
