function article(id) {
    let area = document.querySelector('.article_area');
    area.classList.remove('hide');
    area.innerHTML = articles[id];
    let counter = document.querySelector(`.counter${id+1}`);
    let newCounter = Number(counter.textContent) + 1;
    counter.textContent = newCounter;
    
}

function closeWindow() {

    document.querySelector('.article_area').classList.add('hide');
}

const articles = [
    `<div class="close"><p onclick="closeWindow()">X</p></div>
    <div 
    class="main-image"
    style="background-image: url('img/article/article1.jpg')"></div>

    <div class="text_container">
        <h2 class="main_title">Заголовок статьи</h2>
        <p class="main_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus bibendum sagittis. Aliquam quis fermentum nisi. Etiam blandit, diam vel egestas fermentum, ipsum felis varius velit, sit amet sagittis dui metus ac odio. Phasellus ac eleifend justo. Aenean vulputate pellentesque nisl, ut sodales lectus lacinia non. Nam ac consequat neque, placerat gravida lectus. Nullam feugiat eros semper, dictum risus sit amet, ultrices sem. Praesent placerat in dolor non porttitor. Nunc vulputate leo a arcu condimentum, nec sagittis eros consectetur. Nulla dignissim sagittis neque, sit amet ultricies nibh mattis at. Suspendisse potenti. Etiam commodo urna sit amet fermentum tempus. Donec sit amet lacus arcu. Nam viverra diam non blandit ornare. Nullam tincidunt neque iaculis, lobortis lectus et, sollicitudin dui.
            Cras scelerisque nibh ut justo fermentum ullamcorper. Pellentesque vulputate ligula in ipsum rutrum luctus. Suspendisse potenti. Aliquam sit amet leo justo. Sed ut tempor ipsum, ut auctor dui. Mauris varius felis purus, vel egestas felis eleifend congue. Maecenas ut dignissim sem.
            Proin feugiat mi in interdum interdum. Nunc pharetra velit vel dui fringilla, at laoreet urna volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse porta elementum bibendum. Vestibulum id arcu ut tellus semper tempus. Duis dapibus purus vel turpis auctor, quis varius sapien tincidunt. Aliquam id suscipit tellus. In sollicitudin ex et sem mattis, sit amet rutrum magna eleifend. Duis et felis nibh. Sed quis tortor elementum, condimentum ligula vitae, interdum massa. Nulla magna dolor, lobortis id est vitae, auctor ullamcorper arcu. Nam ligula nulla, pellentesque sed commodo vehicula, hendrerit consequat dolor. Etiam eu libero risus. In vitae quam in eros porta consequat nec ac metus. In venenatis ligula vel urna hendrerit ullamcorper.
            Suspendisse ac arcu ac mi luctus aliquam. Phasellus pharetra fermentum velit eget convallis. Ut scelerisque nisl magna, in finibus purus laoreet quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel laoreet eros, sed placerat erat. Nullam ut eleifend ipsum, vel euismod neque. Nullam varius diam ac metus venenatis porta. Cras vitae ipsum odio. Etiam eleifend finibus nunc ut interdum.
            Aliquam nec blandit quam, fringilla gravida ipsum. Ut scelerisque, neque vitae blandit eleifend, tellus est sodales arcu, eget commodo felis nisl sit amet nibh. In hac habitasse platea dictumst. Donec eu sollicitudin dolor. Curabitur ac pulvinar libero. Nulla pellentesque luctus arcu in consectetur. Morbi placerat a massa at laoreet. Maecenas in cursus mauris, rutrum dignissim nisl. Duis malesuada enim enim, sit amet fringilla justo varius sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut placerat commodo mauris. Nulla tincidunt mauris vitae metus dictum, eget finibus erat semper. Pellentesque euismod, risus sed hendrerit dignissim, sem risus interdum orci, ac congue leo orci sit amet ipsum. Ut imperdiet mauris erat, imperdiet blandit quam mollis id.
            </p>
            
            <img src="img/person/person_photo.jpg" width="300px">
            <h3 class="low_title">Подзаголовок</h3>
            <p class="main_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus bibendum sagittis. Aliquam quis fermentum nisi. Etiam blandit, diam vel egestas fermentum, ipsum felis varius velit, sit amet sagittis dui metus ac odio. Phasellus ac eleifend justo. Aenean vulputate pellentesque nisl, ut sodales lectus lacinia non. Nam ac consequat neque, placerat gravida lectus. Nullam feugiat eros semper, dictum risus sit amet, ultrices sem. Praesent placerat in dolor non porttitor. Nunc vulputate leo a arcu condimentum, nec sagittis eros consectetur. Nulla dignissim sagittis neque, sit amet ultricies nibh mattis at. Suspendisse potenti. Etiam commodo urna sit amet fermentum tempus. Donec sit amet lacus arcu. Nam viverra diam non blandit ornare. Nullam tincidunt neque iaculis, lobortis lectus et, sollicitudin dui.
                Cras scelerisque nibh ut justo fermentum ullamcorper. Pellentesque vulputate ligula in ipsum rutrum luctus. Suspendisse potenti. Aliquam sit amet leo justo. Sed ut tempor ipsum, ut auctor dui. Mauris varius felis purus, vel egestas felis eleifend congue. Maecenas ut dignissim sem.
                Proin feugiat mi in interdum interdum. Nunc pharetra velit vel dui fringilla, at laoreet urna volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse porta elementum bibendum. Vestibulum id arcu ut tellus semper tempus. Duis dapibus purus vel turpis auctor, quis varius sapien tincidunt. Aliquam id suscipit tellus. In sollicitudin ex et sem mattis, sit amet rutrum magna eleifend. Duis et felis nibh. Sed quis tortor elementum, condimentum ligula vitae, interdum massa. Nulla magna dolor, lobortis id est vitae, auctor ullamcorper arcu. Nam ligula nulla, pellentesque sed commodo vehicula, hendrerit consequat dolor. Etiam eu libero risus. In vitae quam in eros porta consequat nec ac metus. In venenatis ligula vel urna hendrerit ullamcorper.
                Suspendisse ac arcu ac mi luctus aliquam. Phasellus pharetra fermentum velit eget convallis. Ut scelerisque nisl magna, in finibus purus laoreet quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel laoreet eros, sed placerat erat. Nullam ut eleifend ipsum, vel euismod neque. Nullam varius diam ac metus venenatis porta. Cras vitae ipsum odio. Etiam eleifend finibus nunc ut interdum.
                Aliquam nec blandit quam, fringilla gravida ipsum. Ut scelerisque, neque vitae blandit eleifend, tellus est sodales arcu, eget commodo felis nisl sit amet nibh. In hac habitasse platea dictumst. Donec eu sollicitudin dolor. Curabitur ac pulvinar libero. Nulla pellentesque luctus arcu in consectetur. Morbi placerat a massa at laoreet. Maecenas in cursus mauris, rutrum dignissim nisl. Duis malesuada enim enim, sit amet fringilla justo varius sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut placerat commodo mauris. Nulla tincidunt mauris vitae metus dictum, eget finibus erat semper. Pellentesque euismod, risus sed hendrerit dignissim, sem risus interdum orci, ac congue leo orci sit amet ipsum. Ut imperdiet mauris erat, imperdiet blandit quam mollis id.
                </p>


    </div>`

    
]