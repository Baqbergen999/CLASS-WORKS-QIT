// const container = document.getElementById('container');
// const greetButton = document.getElementById('greet');

// greetButton.addEventListener('click', () => {
//     const title = document.createElement('h1');
//     title.textContent = "Welcome to my website!";
//     greetButton.style.display = "none";
//     container.appendChild(title);

//     title.style.background = 'yellow';


//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'DELETE';

//     title.appendChild(deleteButton);

//     deleteButton.addEventListener('click', () => {
//         title.remove();
//     });
// });





// const removeButton = document.getElementById('removeButton');
// const second = document.getElementById('second');

// removeButton.addEventListener('click', () => {
//     second.remove();
//     alert('Сәтті өшірілді!')
// });






// const cardsContainer = document.getElementById('cardsContainer');
// const data = ['apple', 'banana', 'orange', 'pinapple'];
// data.forEach((item) => {
//     const card = document.createElement('div');
//     const title = document.createElement('h1');

//     card.style.border = '1px black solid';
//     card.style.borderRadius = '12px';
//     card.style.padding = '10px';
//     card.style.width = 'fit-content';


//     card.appendChild(title);
//     title.textContent = item;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = "Delete";

//     card.appendChild(deleteButton)
//     deleteButton.addEventListener('click', () => {
//         card.remove();
//     })
//     cardsContainer.appendChild(card);
// });






// const data = [
//     {title: '"Абай жолы" - Мұхтар Әуезов', description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь.Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь. Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь.'},
//     {title: '"Қан мен тер" - Әбдіжаміл Нұрсейіпов', description: 'Қазақ халқының бастан өткізген қиын кезеңдері. Ркрпа лвоаи вом дбфь мтл баьми бьы ваьб ыбаим бьы иад ьбатм  васьб Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь. Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь. ЛГпушк шгцукра йшку.'},
//     {title: '"Бүркіт пен патша" - Қарқаубай Есікбаев', description: 'Жақсылықтың қайтуы жайлы ертегі. ОИолаломвалмт ылаови  лваоьт ядлт ымд ыа длтыв лдам вдлтла вдлтсм  авдлмта два двлт. Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь.Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь.'},
//     {title: '"Кек алушылар" - Мұхтар Шаханов', description: 'Елінің тәуелсіздігі үшін жан ұшыра шырылдаған батыр жайлы. Лвоаг фугпк цукщшегз ыкщшнек влршекап шщываи епдртлвы идвлетр авдрмлы. Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь.Абайдың өмірі мен қазақ қоғамының тарихи шежіресі. Неге щзу ам у щшуа ук йшщіоушщз щйй мізомсщшцк цукаг лдаткм олаимр олвамт лав оваттомалдлвь.'},
// ];

// const cardsContainer = document.getElementById('cardsContainer');
// data.forEach((element) => {
//     const card = document.createElement('div');
//     const author = document.createElement('h3');
//     const mazmun = document.createElement('p');
//     const buttonRemove = document.createElement('button');

//     author.textContent = element.title;
//     mazmun.textContent = element.description;
//     buttonRemove.textContent = "Өшіру";

//     card.appendChild(author);
//     card.appendChild(mazmun);
//     card.appendChild(buttonRemove);

//     card.style.border = "2px black solid";
//     card.style.borderRadius = "10px";
//     card.style.display = "flex";
//     card.style.flexDirection = "column";
//     card.style.width = "300px";
//     card.style.padding = "20px";

//     cardsContainer.appendChild(card);

//     buttonRemove.addEventListener('click', () => {
//         card.remove();
//     })
// });



const data = [
    {name: 'Ruslan', birthday: '12/24/1999'},
    {name: 'Aibek', birthday: '03/06/1979'},
    {name: 'Madi', birthday: '10/07/2006'},
    {name: 'Arnur', birthday: '12/56/2000'},
    {name: 'Akhmet', birthday: '32/56/2003'},
];

const cardsContainer = document.getElementById('cardsContainer');

data.forEach((element) => {
    const card = document.createElement('div');
    const person = document.createElement('h2');
    const birthday = document.createElement('h3');
    const buttonRemove = document.createElement('button');

    person.textContent = element.name;
    birthday.textContent = element.birthday;
    buttonRemove.textContent = "Өшіру";

    card.appendChild(person);
    card.appendChild(birthday);
    card.appendChild(buttonRemove);

    card.style.border = "2px black solid";
    card.style.borderRadius = "10px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.width = "200px";
    card.style.padding = "20px";

    cardsContainer.appendChild(card);

    buttonRemove.addEventListener('click', () => {
        card.remove();
    });

    card.addEventListener('dblclick', () => {
        const text = document.createElement('h3');
        text.textContent = "Hello";
        card.appendChild(text);
    });
});