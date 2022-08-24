const area = document.querySelector('.article_area');
const articles_area = document.querySelector('.articles_area');


const preview = [{
    name: 'Заголовок статьи',
    image: 'img/article/article1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['Психология', 'Отношения', 'Люди', 'all'],
    number: 0
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag2', 'Психология', 'all'],
    number: 1
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag1', 'tag2', 'Отношения', 'all'],
    number: 2
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article4.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag1', 'tag2', 'tag3', 'all'],
    number: 3
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article5.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag1', 'tag2', 'tag3', 'all'],
    number: 4
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article6.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag1', 'tag2', 'tag3', 'all'],
    number: 5
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article7.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag2', 'tag3', 'all'],
    number: 6
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article8.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag2', 'tag3', 'all'],
    number: 7
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article6.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag1', 'tag2', 'tag3', 'all'],
    number: 8
},

{
    name: 'Заголовок статьи',
    image: 'img/article/article2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae feugiat arcu, fringilla pharetra ante. Cras ultrices viverra eleifend.',
    count: 0,
    tags: ['tag1', 'tag2', 'Психология', 'all'],
    number: 9
}


]

function articleCreate() {
    search('all')
       
    }

articleCreate()



function article(id) {
    area.classList.remove('hide');
    area.innerHTML = articles[id];
    let test = document.querySelector(`.counter${id}`)
    let counter = preview[id].count;
    let newCounter = counter + 1;
    preview[id].count = newCounter
    test.innerHTML = newCounter 
    document.body.style.overflow = 'hidden'

    
}

function closeWindow() {

    document.querySelector('.article_area').classList.add('hide');
    document.body.style.overflow = ''
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

            <p>Ключевые слова статьи:</p>

            <span class="my_link" onclick="search('${preview[0].tags[0]}')">${preview[0].tags[0]}</span>
            <span class="my_link" onclick="search('${preview[0].tags[1]}')">${preview[0].tags[1]}</span>
            <span class="my_link" onclick="search('${preview[0].tags[2]}')">${preview[0].tags[2]}</span>
            
            
           


    </div>`,

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

            <p>Ключевые слова статьи:</p>

            <span class="my_link" onclick="search('${preview[0].tags[0]}')">${preview[0].tags[0]}</span>
            <span class="my_link" onclick="search('${preview[0].tags[1]}')">${preview[0].tags[1]}</span>
            <span class="my_link" onclick="search('${preview[0].tags[2]}')">${preview[0].tags[2]}</span>
            
            
           


    </div>`,

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

            <p>Ключевые слова статьи:</p>

            <span class="my_link" onclick="search('${preview[0].tags[0]}')">${preview[0].tags[0]}</span>
            <span class="my_link" onclick="search('${preview[0].tags[1]}')">${preview[0].tags[1]}</span>
            <span class="my_link" onclick="search('${preview[0].tags[2]}')">${preview[0].tags[2]}</span>
            
            
           


    </div>`


]



function search(tag) {
    document.body.style.overflow = ''
    showArticles = [];

    for (i = 0; i < preview.length; i++) {
        if (preview[i].tags.includes(tag)) {
            showArticles.push(preview[i])
        }
    }

    closeWindow();
    articles_area.innerHTML = `<h2 class="search_title">Поиск по ключевому слову: <span class="tag">${tag}</span></h2`;

    if (showArticles.length < 8) {
        i=0
        showArticles.forEach (element => {
            const articles_area = document.querySelector('.articles_area');
            let newArticle = document.createElement('div');
            newArticle.classList.add(`article`, `article${i+1}`)
            newArticle.setAttribute(`data`, `id${i+1}`)
            newArticle.setAttribute(`onclick`, `article(${element.number})`)
            articles_area.append(newArticle)
            newArticle.innerHTML = `
                <div 
                    class="article_img" 
                    style="background-image: url('${element.image}')"></div>
                    <h3 class="article_title">${element.name}</h3>
                    <p class="article_description">${element.text}</p>
                        <div class="bottom_area">
                            <a class="article_full my_link" href="#">Читать полностью...</a>
                            <div class="views_counter">
                                <img src="articles/img/views.png" width="24px">
                                <p class="counter counter${i}">${element.count}</p>
                            </div>
                        </div>
                `
                i++
                
        })
    } else {
          for (i = 0; i < 8; i++){
            element = showArticles[i]
            
            const articles_area = document.querySelector('.articles_area');
            let newArticle = document.createElement('div');
            newArticle.classList.add(`article`, `article${i+1}`)
            newArticle.setAttribute(`data`, `id${i+1}`)
            newArticle.setAttribute(`onclick`, `article(${element.number})`)
            articles_area.append(newArticle)
            newArticle.innerHTML = `
                <div 
                    class="article_img" 
                    style="background-image: url('${element.image}')"></div>
                    <h3 class="article_title">${element.name}</h3>
                    <p class="article_description">${element.text}</p>
                        <div class="bottom_area">
                            <a class="article_full my_link" href="#">Читать полностью...</a>
                            <div class="views_counter">
                                <img src="articles/img/views.png" width="24px">
                                <p class="counter counter${i}">${element.count}</p>
                            </div>
                        </div>
                `
            
          }

         document.querySelector('.more_articles').classList.remove('hide') 
    }

    
        
    

}

function showMoreArticles() {
    
    let articlesCount = document.querySelectorAll('.article').length
    
    if (articlesCount+8 > showArticles.length) {
         for (let i = articlesCount; i < showArticles.length ; i++){
            element = showArticles[i]
            
            const articles_area = document.querySelector('.articles_area');
            let newArticle = document.createElement('div');
            newArticle.classList.add(`article`, `article${i+1}`)
            newArticle.setAttribute(`data`, `id${i+1}`)
            newArticle.setAttribute(`onclick`, `article(${i})`)
            articles_area.append(newArticle)
            newArticle.innerHTML = `
                <div 
                    class="article_img" 
                    style="background-image: url('${element.image}')"></div>
                    <h3 class="article_title">${element.name}</h3>
                    <p class="article_description">${element.text}</p>
                        <div class="bottom_area">
                            <a class="article_full my_link" href="#">Читать полностью...</a>
                            <div class="views_counter">
                                <img src="articles/img/views.png" width="24px">
                                <p class="counter counter${element.length+1}">0</p>
                            </div>
                        </div>
                `
            document.querySelector('.more_articles').classList.add('hide') 
            
        }
    } else {
        for (let i = articlesCount; i < articlesCount+8 ; i++){
            element = showArticles[i]
            
            const articles_area = document.querySelector('.articles_area');
            let newArticle = document.createElement('div');
            newArticle.classList.add(`article`, `article${i+1}`)
            newArticle.setAttribute(`data`, `id${i+1}`)
            newArticle.setAttribute(`onclick`, `article(${i})`)
            articles_area.append(newArticle)
            newArticle.innerHTML = `
                <div 
                    class="article_img" 
                    style="background-image: url('${element.image}')"></div>
                    <h3 class="article_title">${element.name}</h3>
                    <p class="article_description">${element.text}</p>
                        <div class="bottom_area">
                            <a class="article_full my_link" href="#">Читать полностью...</a>
                            <div class="views_counter">
                                <img src="articles/img/views.png" width="24px">
                                <p class="counter counter${element.length+1}">0</p>
                            </div>
                        </div>
                `
        }
    }
}
