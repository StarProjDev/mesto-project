// Значения модальных элементов
const addButtonProfile = document.querySelector('#open-profile');
const closeButtonProfile = document.querySelector('#close-profile');
const addButtonImage = document.querySelector('#open-image');
const closeButtonImage = document.querySelector('#close-image');
const popupProfile = document.querySelector('#profile');
const popupImage = document.querySelector('#image');

const popupProfileForm = document.querySelector('#popup-profile');

const popupBig = document.querySelector('#big-image');
const bigImage = document.querySelector('.popup-big__image');
const bigText = document.querySelector('.popup-big__text');
const closeBig = document.querySelector('#close-big-image');

// Значения полей формы
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const imageInput = document.querySelector('#image-name');
const urlInput = document.querySelector('#url');

// Значение имени и работы
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');

// Открытие модального окна, заполнение значений полей
addButtonProfile.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupProfile.classList.add('popup_opened');
    document.documentElement.style.overflow = 'hidden';
});

addButtonImage.addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    document.documentElement.style.overflow = 'hidden';
});

// Закрытие модального окна
closeButtonProfile.addEventListener('click', () => {
    popupProfile.classList.remove('popup_opened');
    document.documentElement.style.overflow = 'auto';
});

closeButtonImage.addEventListener('click', () => {
    popupImage.classList.remove('popup_opened');
    document.documentElement.style.overflow = 'auto';
})

// Обработчик формы
function formSubmitHandler(evt) {
    evt.preventDefault();

    const newName = nameInput.value;
    const newJob = jobInput.value;

    profileName.textContent = newName;
    profileJob.textContent = newJob;

    popupProfile.classList.remove('popup_opened');
}

// Вызов функции при нажатии на кнопку
formElement.addEventListener('submit', formSubmitHandler);

// Массив карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Удаляет старые карточки для добавления новых с массива
const cardList = document.querySelector('.elements');

cardList.querySelectorAll('.element').forEach((cardElement) => {
    cardElement.remove();
});

// Создание карточки
function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('element');

    const imageElement = document.createElement('img');
    imageElement.classList.add('element__image');
    imageElement.src = card.link;
    imageElement.alt = card.name;
    cardElement.appendChild(imageElement);

    const textElement = document.createElement('div');
    textElement.classList.add('element__text');
    cardElement.appendChild(textElement);

    const deleteElement = document.createElement('button');
    deleteElement.classList.add('element__delete-button');
    textElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', () => {
        cardElement.remove();
    });

    const titleElement = document.createElement('h2');
    titleElement.classList.add('element__title');
    titleElement.textContent = card.name;
    textElement.appendChild(titleElement);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('element__button');
    textElement.appendChild(buttonElement);

    buttonElement.addEventListener('click', () => {
        buttonElement.classList.toggle('element__button_active');
    });

    // Создание карточки изображения
    const bigImageElement = cardElement.querySelector('.element__image');
    
    bigImageElement.addEventListener('click', () => { 

        document.documentElement.style.overflow = 'hidden';

        const popupElement = document.querySelector('#big-image');

        popupElement.querySelector('.popup-big__image').src = card.link;
        popupElement.querySelector('.popup-big__text').textContent = card.name;

        popupElement.classList.add('popup-big_opened');
    });

    return cardElement;
}

// Добавление карточки на сайт
initialCards.forEach((card) => {
    const cardElement = createCard(card);
    cardList.appendChild(cardElement);
});

// Добавление карточки в массив
const form = document.querySelector('#popup-image');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const newCard = {
        name: imageInput.value,
        link: urlInput.value,
    };

    initialCards.unshift(newCard);

    const cardElement = createCard(newCard);

    cardList.insertBefore(cardElement, cardList.firstChild);

    nameInput.value = '';
    urlInput.value = '';
});

// Закрытие большой картинки
closeBig.addEventListener('click', () => {
    popupBig.classList.remove('popup-big_opened');
    document.documentElement.style.overflow = 'auto';
})



