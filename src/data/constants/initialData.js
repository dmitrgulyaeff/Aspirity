export const initialPlaces = {
  // 1: {
  //   name: "Архыз",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  //   country: "Россия",
  //   isLiked: "true",
  // },
  // 2: {
  //   name: "Челябинская область",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  //   country: "Россия",
  //   isLiked: "false",
  // },
  3: {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    country: "Россия",
    isLiked: "true",
  },
  // 4: {
  //   name: "Камчатка",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  //   country: "Россия",
  //   isLiked: "false",
  // },
  // 5: {
  //   name: "Холмогорский район",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  //   country: "Россия",
  //   isLiked: "false",
  // },
  6: {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    country: "Россия",
    isLiked: "false",
  },
  7: {
    name: "Гранд-Каньон",
    link: "https://s.zagranitsa.com/images/articles/1702/870x486/abe574ae01fe94a2b24c946e63c92b58.jpg",
    country: "США",
    isLiked: "true",
  },
  8: {
    name: "Джакарта",
    link: "https://top10.travel/wp-content/uploads/2016/06/dzhakarta.jpg",
    country: "Индонезия",
    isLiked: "false",
  },
  9: {
    name: "Бали",
    link: "https://top10.travel/wp-content/uploads/2016/06/ostrov-bali.jpg",
    country: "Индонезия",
    isLiked: "true",
  },
  10: {
    name: "Храм Лухур Улувату",
    link: "https://top10.travel/wp-content/uploads/2016/06/uluvatu.jpg",
    country: "Индонезия",
    isLiked: "true",
  },
  11: {
    name: "Суботица",
    link: "https://img.atlasobscura.com/2XPzMQ_SMgrXEX5kJlF6EdHAGgh4Dav1W4EbXFJ0_a8/rt:fit/w:1200/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8yMTM1/MDM0NS02NjI5LTQ4/ODktYTQ1ZS0xMzY5/YzQ1YjI3NGVmNDA2/MDdhNjJkYjZhZmNl/M2FfQ2VudGFyX0ks/X1N1Ym90aWNhLF9T/ZXJiaWFfLV9wYW5v/cmFtaW9fKDMpLmpw/Zw.jpg",
    country: "Сербия",
    isLiked: "false",
  },
  12: {
    name: "Сидней",
    link: "https://i.pinimg.com/originals/ec/5d/d1/ec5dd18c4fb6e8d8edd46475fe7e1ea1.jpg",
    country: "Австралия",
    isLiked: "true",
  },
  13: {
    name: "Могадишо",
    link: "https://img-forum2.ners.ru/upload/9d/9d2daf130b9742a3d2f069535d8934ab.jpg",
    country: "Сомали",
    isLiked: "false",
  },
  14: {
    name: "Гавана",
    link: "https://i.pinimg.com/originals/5d/ae/65/5dae65d6e75148788a875f515b1f1c41.jpg",
    country: "Куба",
    isLiked: "true",
  },
  15: {
    name: "Нуук",
    link: "https://exoticluxurycat.ru/wp-content/uploads/b/d/9/bd97e16c65d2522a63be72f84afca367.jpeg",
    country: "Гренландия",
    isLiked: "true",
  },
};

export let arrayCountries = Object.keys(initialPlaces).map(
  (id) => initialPlaces[id]["country"]
);
