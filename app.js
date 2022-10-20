const form = document.querySelector('#memeInfo');
const urlInput = document.querySelector('input[name="url"]');
const topTextInput = document.querySelector('input[name="topText"]');
const bottomTextInput = document.querySelector('input[name="bottomText"]');
const resultSection = document.querySelector('#results');


form.addEventListener('submit', function(e) {
	e.preventDefault();
    let imageUrl = urlInput.value;
    const newMeme = document.createElement('div');
    const newTop = document.createElement('h2');
    const newBottom = document.createElement('h2');

    newTop.setAttribute('class', 'topInput');
    newBottom.setAttribute('class', 'bottomInput');

    newMeme.style.backgroundImage = `url(${imageUrl})`;

    newTop.innerText = topTextInput.value;
    newBottom.innerText = bottomTextInput.value;

    newMeme.appendChild(newTop);
    newMeme.appendChild(newBottom);

    resultSection.appendChild(newMeme);
    
    urlInput.value = '';
    topTextInput.value = '';
    bottomTextInput.value = '';
});

resultSection.addEventListener('click', function(e){
    if(e.target.tagName === 'DIV'){
        e.target.remove()
    }
    else if(e.target.tagName === 'H2'){
        e.target.parentElement.remove();
    }
});