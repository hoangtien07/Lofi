// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

//Zoom screen
const html = document.querySelector("html");
const zoomBtn = document.querySelector(".zoom-btn");
zoomBtn.onclick = (e) => {
  e.stopPropagation();
  let checkZoom = document.fullscreenElement;
  if (checkZoom) document.exitFullscreen();
  else html.requestFullscreen();
};

// Declare video bg
let checkBG = 0;
const changeBg = document.querySelector(".ant-switch");
const changeBgBtn = document.querySelector(".ant-switch__handle");
const videoBg = document.querySelectorAll(".main-video");
// Declare typeWeather
let typeWeather = 0; // [0]: current weather:0-day/1-night/2-rainday/3-rainnight, [1]:prev weather:0-day/1-night/2-rainday/3-rainnight

// Declare option
const obh = document.querySelectorAll(".obh");
const optionBtn = document.querySelectorAll(".option__icon");
const ob1 = document.querySelector("#ob1");
const ob2 = document.querySelector("#ob2");
const ob3 = document.querySelector("#ob3");
const ob4 = document.querySelector("#ob4");
const typeItem = document.querySelectorAll(".sub-mood__item");
const subOpt = document.querySelectorAll(".sub-opt");
const exitSubBtn = document.querySelectorAll(".sub-btn__exit");

// Declare music input

const mainMusicBtn = document.querySelector("#ms-volume__input");
const effectList = document.querySelector("#effect-list");
var loadMix = false;
const mixBtn = document.querySelector(".sub-footer");

// Declare play btn

const playBtn = document.querySelector(".play");
var checkPlayMusic = false;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const audio = document.querySelector(".music");
var checkMix = false;

// Main program

const app = {
  // Declare music sources
  music: {
    chill: [
      {
        url: "../static/assets/tracks/chill/chill_01.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_02.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_03.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_04.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_05.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_06.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_07.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_08.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_09.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_10.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_11.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_12.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_13.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_14.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_15.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_16.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_17.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_18.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_19.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_20.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_21.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_22.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_23.mp3",
      },
      {
        url: "../static/assets/tracks/chill/chill_24.mp3",
      },
    ],
    jazzy: [
      {
        url: "../static/assets/tracks/jazzy/jazzy_01.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_02.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_03.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_04.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_05.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_06.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_07.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_08.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_09.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_10.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_11.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_12.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_13.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_14.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_15.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_16.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_17.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_18.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_19.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_20.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_21.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_22.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_23.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_24.mp3",
      },
      {
        url: "../static/assets/tracks/jazzy/jazzy_25.mp3",
      },
    ],
    sleepy: [
      {
        url: "../static/assets/tracks/sleepy/sleepy_01.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_02.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_03.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_04.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_05.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_06.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_07.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_08.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_09.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_10.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_11.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_12.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_13.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_14.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_15.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_16.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_17.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_18.mp3",
      },
      {
        url: "../static/assets/tracks/sleepy/sleepy_19.mp3",
      },
    ],
  },

  //Hiệu ứng âm thanh
  effectMusic: [
    {
      type: "city",
      name: "City traffic",
      url: "../static/assets/effects/city_traffic.mp3",
    },
    {
      type: "rain_street",
      name: "City Rain",
      url: "../static/assets/effects/rain_city.mp3",
    },
    {
      type: "fireplace",
      name: "Fireplace",
      url: "../static/assets/effects/fireplace.mp3",
    },
    {
      type: "fire",
      name: "Campfire",
      url: "../static/assets/effects/campfire.mp3",
    },
    {
      type: "forest",
      name: "Forest Sounds",
      url: "../static/assets/effects/forest_night.mp3",
    },
    {
      type: "rain_forest",
      name: "Forest Rain",
      url: "../static/assets/effects/rain_forest.mp3",
    },
    {
      type: "waves",
      name: "Waves",
      url: "../static/assets/effects/waves.mp3",
    },
    {
      type: "fan",
      name: "Fan",
      url: "../static/assets/effects/fan.mp3",
    },
    {
      type: "storm",
      name: "Summer Storm",
      url: "../static/assets/effects/summer_storm.mp3",
    },
    {
      type: "river",
      name: "River",
      url: "../static/assets/effects/river.mp3",
    },
    {
      type: "birds",
      name: "Bird Chirping",
      url: "../static/assets/effects/birds.mp3",
    },
    {
      type: "people",
      name: "People Talking",
      url: "../static/assets/effects/people_talk_inside.mp3",
    },
    {
      type: "wind",
      name: "Wind",
      url: "../static/assets/effects/wind.mp3",
    },
    {
      type: "ocean",
      name: "Ocean Sound",
      url: "../static/assets/effects/ocean.mp3",
    },
    {
      type: "snow",
      name: "Blizzard",
      url: "../static/assets/effects/snow.mp3",
    },
  ],

  render: function () {
    // Khai báo biến
    const _this = this;

    // Play/Pause
    playBtn.onclick = function () {
      if (!checkPlayMusic) {
        checkPlayMusic = true;
        audio.play();
        playBtn.innerHTML = `<img src="../static/assets/svg/pause.4ac70926.svg" alt="">`;
      } else {
        checkPlayMusic = false;
        audio.pause();
        playBtn.innerHTML = `<img src="../static/assets/svg/play.18d46dd9.svg" alt="">`;
      }
    };

    // Tạo danh sách thứ tự bài nhạc ngẫu nhiên cho mỗi thể loại nhạc
    
    var lengthMusic = [24, 25, 19];
    var historyObj = {
    0: [],
    1: [],
    2: [],
    };

    for (let key in historyObj) {
    while (historyObj[`${key}`].length < lengthMusic[`${key}`]) {
        let r = Math.floor(Math.random() * lengthMusic[`${key}`]);
        if (r >= 0 && r < lengthMusic[`${key}`] && historyObj[`${key}`].indexOf(r) === -1) {
        historyObj[`${key}`].push(r);
        }
    }
    }

    var historySong = [];

    var lengthCurrentMusic = 0;
    var listMusic = Object.values(app.music)[0];
    var prevType = 0;
    var indexMusic = 0;

    // Chọn thể loại nhạc
    function typeMusic(index) {
      historySong = historyObj[index];
      lengthCurrentMusic = lengthMusic[index];
      indexMusic = Math.floor(Math.random() * lengthCurrentMusic);
      listMusic = Object.values(app.music)[index];
      prevType = index;
      audio.innerHTML = `<source  src="${
        listMusic[historySong[indexMusic]].url
      }" type="audio/mp3">`;
      console.log(listMusic[historySong[indexMusic]].url);
    }

    typeMusic(0);

    // Chọn bài nhạc phát


    // Load bài nhạc tiếp theo khi bài nhạc hiện tại kết thúc
    audio.onended = function () {
      indexMusic++;
      if (indexMusic == lengthCurrentMusic) {
        indexMusic = 0;
      }
      audio.innerHTML = `<source src="${
        listMusic[historySong[indexMusic]].url
      }" type="audio/mp3">`;
      audio.load();
      audio.play();
    };

    // Phát nhạc khi chọn thể loại nhạc
    typeItem.forEach((e, index) => {
      e.onclick = () => {
        if (prevType != index) {
          typeItem[prevType].classList.remove("active");
          e.classList.add("active");
          typeMusic(index);
          audio.load();
          audio.play();
          playBtn.innerHTML = `<img src="../static/assets/svg/pause.4ac70926.svg" alt="">`;
        }
      };
    });

    // Next/prev song
    prevBtn.onclick = function () {
      indexMusic--;
      if (indexMusic == -1) {
        indexMusic = lengthCurrentMusic - 1;
      }
      audio.innerHTML = `<source src="${
        listMusic[historySong[indexMusic]].url
      }" type="audio/mp3">`;
      checkPlayMusic = true;
      playBtn.innerHTML = `<img src="../static/assets/svg/pause.4ac70926.svg" alt="">`;
      audio.load();
      audio.play();
    };

    nextBtn.onclick = function () {
      indexMusic++;
      if (indexMusic == lengthCurrentMusic) {
        indexMusic = 0;
      }
      audio.innerHTML = `<source src="${
        listMusic[historySong[indexMusic]].url
      }" type="audio/mp3">`;
      checkPlayMusic = true;
      playBtn.innerHTML = `<img src="../static/assets/svg/pause.4ac70926.svg" alt="">`;
      audio.load();
      audio.play();
    };

    // Declare audio in html
    var CurAudio = document.createElement("link");
    CurAudio.rel = "preload";
    CurAudio.as = "audio";
    CurAudio.type = "audio/mp3";
    CurAudio.href = `${listMusic[historySong[indexMusic]].url}`;
    document.head.appendChild(CurAudio);


    // Create sound effect elements
    for (let e of app.effectMusic) {
    effectList.innerHTML += `
        <div class="effect-item flex">
            <div class="effect-name">${e.name}</div>
            <input type="range" min="0" max="100" step="1" value="0" class="effect-volume__input" id="${e.type}">
            <audio src="${e.url}" loop></audio>
        </div>
    `;
    }

    document
    .querySelectorAll(".effect-item")[1]
    .querySelector(".effect-name").innerHTML +=
    '  <i style="font-size: 12px">*(Effect)</i>';


    //Range sound effect
    const inputRange = document.querySelectorAll(".effect-volume__input");
    const audioEffectList = document.querySelectorAll(".effect-item>audio");

    for (let i = 0; i < inputRange.length; i++) {
      inputRange[i].oninput = function () {
          if(i==1){ 
            this.onmouseup = () => {
                if (this.value == 0) {
                    (typeWeather == 2) ? typeWeather = 0 : typeWeather = 1;
                    if(checkBG==0) changeBgFunc();
                    else if(checkBG==1) changeBgFunc2();
                }
                else {
                    (typeWeather == 0) ? typeWeather = 2 : typeWeather = 3;
                    if(checkBG==0) changeBgFunc();
                    else if(checkBG==1) changeBgFunc2();
                }
            };
          }
        this.style.background =
          "linear-gradient(to right, #f3a952 0%, #f3a952 " +
          this.value +
          "%, #14141d " +
          this.value +
          "%, #14141d 100%)";
        if (this.value == 0) {
          audioEffectList[i].pause();
        } else {
          audioEffectList[i].play();
          audioEffectList[i].volume = this.value / 100;
        }
      };
    }

    // Range main sound
    mainMusicBtn.oninput = function () {
      if (this.value == 0) {
        audio.pause();
        checkPlayMusic = false;
        playBtn.innerHTML = `<img src="../static/assets/svg/play.18d46dd9.svg" alt="">`;
      } else {
        audio.volume = this.value / 100;
        audio.play();
        checkPlayMusic = true;
        playBtn.innerHTML = `<img src="../static/assets/svg/pause.4ac70926.svg" alt="">`;
        this.style.background =
          "linear-gradient(to right, #f3a952 0%, #f3a952 " +
          this.value +
          "%, #14141d " +
          this.value +
          "%, #14141d 100%)";
      }
    };

    // Mix mode increase height
    mixBtn.onclick = () => {
      if (checkMix) {        
        effectList.scrollTo(0, 0);
        effectList.classList.remove("active");
        checkMix = false;
      } else {
        effectList.classList.add("active");
        checkMix = true;
      }
    };

    // Change bg video
    function changeBgFunc() {
      if (typeWeather == 0) {
        videoBg[0].innerHTML =
          '<source src="../static/assets/scenes/chill-vibes/BDR%20Day%20112521.mp4">';
        videoBg[0].style.opacity = "1";
        videoBg[1].style.opacity = "0";
        videoBg[0].load();
        videoBg[0].play();
        changeBgBtn.style.left = "34px";
        changeBg.style.background = "#f3a952";
      } else if (typeWeather == 1) {
        videoBg[1].innerHTML =
          '<source src="../static/assets/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4">';
        videoBg[0].style.opacity = "0";
        videoBg[1].style.opacity = "1";
        videoBg[1].load();
        videoBg[1].play();
        changeBgBtn.style.left = "4px";
        changeBg.style.background = "rgba(0,0,0,.25)";
      } else if (typeWeather == 2) {
        videoBg[1].innerHTML =
          '<source src="../static/assets/scenes/chill-vibes/BDR%20RAINY%20DAY.mp4">';
        videoBg[0].style.opacity = "0";
        videoBg[1].style.opacity = "1";
          videoBg[1].load();
          videoBg[1].play();
        changeBgBtn.style.left = "34px";
        changeBg.style.background = "#f3a952";
      } else if (typeWeather == 3){
        videoBg[0].innerHTML =
          '<source src="../static/assets/scenes/chill-vibes/BDR%20RAINY%20NIGHT.mp4">';
        videoBg[0].style.opacity = "1";
        videoBg[1].style.opacity = "0";
          videoBg[0].load();
          videoBg[0].play();
        changeBgBtn.style.left = "4px";
        changeBg.style.background = "rgba(0,0,0,.25)";
      }
    }
    
    changeBgFunc();   // Chạy lần đầu để tạo src video nền


    // Vì chưa hoàn thiện logic code của chức năng chọn template nên tạm thời lặp lại code changeBg nhưng thay đổi link video nền
    
    function changeBgFunc2() {
      if (typeWeather == 0) {
        videoBg[0].innerHTML =
          '<source src="../static/assets/scenes/studio/Studio_day.mp4">';
        videoBg[0].style.opacity = "1";
        videoBg[1].style.opacity = "0";
        videoBg[0].load();
        videoBg[0].play();
        changeBgBtn.style.left = "34px";
        changeBg.style.background = "#f3a952";
      } else if (typeWeather == 1) {
        videoBg[1].innerHTML =
          '<source src="../static/assets/scenes/studio/Studio_night.mp4">';
        videoBg[0].style.opacity = "0";
        videoBg[1].style.opacity = "1";
        videoBg[1].load();
        videoBg[1].play();
        changeBgBtn.style.left = "4px";
        changeBg.style.background = "rgba(0,0,0,.25)";
      } else if (typeWeather == 2) {
        videoBg[1].innerHTML =
          '<source src="../static/assets/scenes/studio/Studio_day_rain.mp4">';
        videoBg[0].style.opacity = "0";
        videoBg[1].style.opacity = "1";
          videoBg[1].load();
          videoBg[1].play();
        changeBgBtn.style.left = "34px";
        changeBg.style.background = "#f3a952";
      } else if (typeWeather == 3){
        videoBg[0].innerHTML =
          '<source src="../static/assets/scenes/studio/Studio_night_rain.mp4">';
        videoBg[0].style.opacity = "1";
        videoBg[1].style.opacity = "0";
          videoBg[0].load();
          videoBg[0].play();
        changeBgBtn.style.left = "4px";
        changeBg.style.background = "rgba(0,0,0,.25)";
      }
    }
    
    // Chọn Templates
    const tempItem = document.querySelectorAll(".temp-item");
    let tempCur = 0;
    tempItem.forEach((e, index) => {
        e.onclick = () => {
          if(tempCur!=index){
            if(index==0){
              console.log("Chill Vibes"); 
              changeBgFunc();
            } 
            else if(index==1){
              console.log("Studio");
              changeBgFunc2();
            }
            checkBG = index;
            tempItem.forEach((e) => e.classList.remove("active"));
            e.classList.add("active");
            tempCur = index;
          }
        };
    });

    // Light/dark mode button
    changeBg.onclick = () => {
      if (typeWeather == 0) {
        typeWeather = 1;
        if(checkBG==0) changeBgFunc();
        else if(checkBG==1) changeBgFunc2();
      } else if (typeWeather == 1) {
        typeWeather = 0;
        if(checkBG==0) changeBgFunc();
        else if(checkBG==1) changeBgFunc2();
      } else if (typeWeather == 2) {
        typeWeather = 3;
        if(checkBG==0) changeBgFunc();
        else if(checkBG==1) changeBgFunc2();
      } else if (typeWeather == 3) {
        typeWeather = 2;
        if(checkBG==0) changeBgFunc();
        else if(checkBG==1) changeBgFunc2();
      }
    };

    // Preload
    function loadVid(url, cFunction) {
      var xhttp;
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          cFunction(this);
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
    }

    function removeLoader() {
      var loader = document.querySelector(".preload");
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.className = "preload active";
      }, 500);
    }
    loadVid("../static/assets/scenes/chill-vibes/BDR%20Day%20112521.mp4", removeLoader);


    // Option Click

    let checkOpt = [0, false]; // [0]:vitri btn truoc,[1]:ktra trang thai bat/tat
    obh[0].classList.add("obh-t");
    obh[1].classList.add("obh-b");

    function optionClick(index) {
      if (checkOpt[0] == index && checkOpt[1]) {
        optionBtn[index].classList.remove("active");
        subOpt[index].classList.remove("active");
        if (index == 0) obh[0].classList.remove("db");
        if (index == 3) obh[1].classList.remove("db");
        checkOpt[1] = false;
      } else if (checkOpt[0] == index && !checkOpt[1]) {
        optionBtn[index].classList.add("active");
        subOpt[index].classList.add("active");
        if (index == 0) {
          obh[0].classList.add("db");
          effectList.scrollTo(0, 0);
        }
        if (index == 3) obh[1].classList.add("db");
        checkOpt[1] = true;
      } else if (checkOpt[0] != index) {
        if (checkOpt[0] != -1) {
          optionBtn[`${checkOpt[0]}`].classList.remove("active");
          subOpt[`${checkOpt[0]}`].classList.remove("active");
          if (checkOpt[0] == 0) obh[0].classList.remove("db");
          if (checkOpt[0] == 3) obh[1].classList.remove("db");
        }
        optionBtn[index].classList.add("active");
        subOpt[index].classList.add("active");
        if (index == 0) {
          obh[0].classList.add("db");
          effectList.scrollTo(0, 0);
        }
        if (index == 3) obh[1].classList.add("db");
        checkOpt[0] = index;
        checkOpt[1] = true;
      }
    }
    
    optionBtn.forEach(
      (e, index) =>
        (e.onclick = () => {
          optionClick(index);
        })
    );

    // Nút Close để tắt Option . Hiện tại không cần
    exitSubBtn.forEach(
      (e, index) =>
        (e.onclick = () => {
            optionBtn.forEach((e) => e.classList.remove("active"));
            subOpt.forEach((e) => e.classList.remove("active"));
            obh[0].classList.remove("db");
            obh[1].classList.remove("db");
          checkOpt[1] = false;
        })
    );


    // Tắt thanh công cụ khi click ra ngoài
    // bgRelative.onclick = () => {
    //   document.querySelector(".option").onclick = (e) => e.stopPropagation();
    //   subOpt.forEach((e) => (e.onclick = (a) => a.stopPropagation()));
    //   document.querySelector(".control").onclick = (e) => e.stopPropagation();
    //   if (firstBgClick != 1) {
    //     effectList.scrollTo(0, 0);
    //     optionBtn[checkOpt[0]].classList.remove("active");
    //     obh[0].classList.remove("db");
    //     subOpt[checkOpt[0]].classList.remove("active");
    //     obh[1].classList.remove("db");
    //     checkOpt[1] = false;
    //   } else firstBgClick = 2;
    // };

    // Tutorial
    const tutBtn = document.querySelector("#tutorial");
    const tut = document.querySelector(".tutorial");
    const tutClose = document.querySelector(".tut-close");
    const tutVid = document.querySelectorAll(".tut__vid");
    tutBtn.onclick = () => {
      tut.classList.add("active");
      tut.scrollTo(0, 0);
      tutVid[0].play();
      tutVid[1].play();
    };
    tutClose.onclick = () => {
      tut.classList.remove("active");
      tutVid[0].load();
      tutVid[1].load();
    };

    // Templates: chuyển đổi nội dung scenes và đã lưu
    const scenes = document.querySelector(".scenes");
    const saveTemp = document.querySelector(".saveTemp");
    const tempLikeBtn = document.querySelector("#temp-like");
    const tempScenesBtn = document.querySelector("#temp-scenes");
    tempLikeBtn.onclick = () => { 
        tempLikeBtn.classList.add("active");
        tempScenesBtn.classList.remove("active");
        saveTemp.classList.add("active");
        scenes.classList.remove("active");
    }
    
    tempScenesBtn.onclick = () => {
        tempScenesBtn.classList.add("active");
        tempLikeBtn.classList.remove("active");
        scenes.classList.add("active");
        saveTemp.classList.remove("active");
    }
              
    // Lưu hiệu ứng và nhạc nền vào mục yêu thích
    function addTemp(){
      let addTempHTML = document.createElement("div")
      addTempHTML.classList.add("saveItem");
      let tempMusic = listMusic[historySong[indexMusic]].url;
      document.querySelectorAll(".sub-mood__item").forEach((e, index) => {
        if(e.classList.contains("active")){
          addTempHTML.innerHTML += `
                            <div class="flex">
                                <input class="saveItem_name" type="text" value="Tên chủ đề">
                                <button type="button" class="saveEdit"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button type="button" class="saveDel"><i class="fa-solid fa-trash-can"></i></button>
                                <button type="button" class="savePlay">Phát</button>
                            </div>
                            <div class="flex">
                                <div class= "saveItem_title">Music</div>
                                <div style="flex:1"> <span class="saveItem_mood">${e.id.charAt(0).toUpperCase() + e.id.slice(1)}</span> - <span class="saveItem_music">${tempMusic.substring(tempMusic.lastIndexOf('/')+1).replace('.mp3', '')}</span></div>
                            </div>`
        }
      });
      let saveEffectItem = document.createElement("div");
      saveEffectItem.classList.add("flex");
      saveEffectItem.innerHTML = `<div class="saveItem_title">Effect</div>`;
      let saveEffectSound = document.createElement("div");
      saveEffectSound.classList.add("flex");
      saveEffectSound.style.flex = "1";
      document.querySelectorAll(".effect-item").forEach((e) => {
        if(e.querySelector("input").value!=0){
          saveEffectSound.innerHTML += `<div class="save-effect_item"> <span class=save-effect_name">${e.querySelector(".effect-name").innerHTML}</span> : <span class="save-effect_volume" style="color: var(--color-primary);"> ${e.querySelector("input").value} </span> </div>`;
        }
      });
      saveEffectItem.appendChild(saveEffectSound);
      addTempHTML.appendChild(saveEffectItem);
      saveTemp.appendChild(addTempHTML);
    }


    // Xử lý tương tác với mục yêu thích
    saveTemp.onclick = (e) => {
      let moodSave = '';
      if(e.target.classList.contains("fa-pen-to-square")){
        // Sửa tên mục yêu thích
        let saveItem_name = e.target.parentElement.parentElement.querySelector(".saveItem_name")
        saveItem_name.readOnly = false;
        saveItem_name.focus();
        saveItem_name.style.borderBottom = "1px solid";
        saveItem_name.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            saveItem_name.readOnly = true;
            saveItem_name.style.border = "none";
            saveLikeData();            
          }
        });
        saveItem_name.addEventListener("focusout", function() {
          saveItem_name.readOnly = true;
          saveItem_name.style.border = "none";
          saveLikeData();
        });
      }
      else if(e.target.classList.contains("sub-btn")){
        // Thêm vào mục yêu thích
        addTemp();
        saveLikeData();
      }
      else if(e.target.classList.contains("fa-trash-can")){
        // Xóa mục yêu thích
        e.target.parentElement.parentElement.parentElement.remove();
        saveLikeData();
      }
      else if(e.target.classList.contains("savePlay")){
        // Phát nhạc
        playBtn.innerHTML = `<img src="../static/assets/svg/pause.4ac70926.svg" alt="">`;
        // Xử lý chọn mood
        moodSave = e.target.parentElement.parentElement.querySelector(".saveItem_mood").innerHTML.toLowerCase();
        typeItem.forEach((e, index) => {
          if(e.id == moodSave){
            if (prevType != index) {
              typeItem[prevType].classList.remove("active");
              e.classList.add("active");
              typeMusic(index);
              prevType = index;
              playBtn.innerHTML = `<img src="../static/assets/svg/pause.4ac70926.svg" alt="">`;
          }}
        });
        // Xử lý chọn nhạc nền
        let music = e.target.parentElement.parentElement.querySelector(".saveItem_music").innerHTML;      
        audio.innerHTML = `<source src="../static/assets/tracks/${moodSave}/${music}.mp3" type="audio/mp3">`;
        audio.load();
        audio.play();        
        // Xử lý chọn hiệu ứng
        let saveEffect  = e.target.parentElement.parentElement.querySelectorAll(".save-effect_item")
        document.querySelectorAll(".effect-item").forEach((e) => {
          e.querySelector("input").value = 0;
          e.querySelector("input").style.background = "linear-gradient(to right, #f3a952 0%, #f3a952 0%, #14141d 0%, #14141d 100%)";
          e.querySelector("audio").pause();
        });
        document.querySelectorAll(".effect-item").forEach((e,index) => {
          saveEffect.forEach((a) => {
            if(e.querySelector(".effect-name").innerHTML == a.childNodes[1].innerHTML){
              if(index==1){             
                (typeWeather == 0) ? typeWeather = 2 : typeWeather = 3;
                if(checkBG==0) changeBgFunc();
                else if(checkBG==1) changeBgFunc2();
              }
              e.querySelector("input").value = parseInt(a.childNodes[3].innerHTML);
              e.querySelector("input").style.background = "linear-gradient(to right, #f3a952 0%, #f3a952 " + e.querySelector("input").value + "%, #14141d " + e.querySelector("input").value + "%, #14141d 100%)";
              e.querySelector("audio").play();
              e.querySelector("audio").volume = e.querySelector("input").value / 100; 
            }
          });
        })
      }
    }

    // Lưu mục yêu thích vào local storage
    function saveLikeData() {
      localStorage.setItem("saveTemp", saveTemp.innerHTML);
    }
    function loadLikeData() {
      if (localStorage.getItem("saveTemp")) {
        saveTemp.innerHTML = localStorage.getItem("saveTemp");
      }
    }
    loadLikeData();

    // Import Link Youtube
    const ytDiv = document.querySelector("#yt-music");
    const ytLink = document.querySelector(".sub3-input");
    const ytBtn = document.querySelector("#sub3-btn");
    ytBtn.onclick = () => {
        if (ytLink.value != "") {
            ytDiv.innerHTML = `${ytLink.value}`;
            ytLink.value = "";
            ytDiv.classList.add("active");
        }
    }

    // To-do list
    const todoList = document.querySelector(".todo-body");
    const todoInput = document.querySelector(".todo-input");
    const todoAdd = document.querySelector(".todo-btn");
    todoAdd.onclick = () => {
        if (todoInput.value != "") {
            todoList.innerHTML += `
                <li class="todo-item flex">
                  <div class="todo-check">
                      <i class="fa-regular fa-circle"></i>
                  </div>
                  <div class="todo-p">${todoInput.value}</div>
                  <i class="fa-solid fa-trash-can todo-del"></i>
                </li>`;
            todoInput.value = "";
            saveData();
        }
    }
    todoInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        todoAdd.click();
      }
    });
    todoList.addEventListener("click", (e) => {
      if(e.target.className == "fa-solid fa-trash-can todo-del"){
        e.target.parentElement.remove();
        saveData();
      } 
      else if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        if(e.target.classList.contains("check")){
          e.target.querySelector(".todo-check").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        } else e.target.querySelector(".todo-check").innerHTML = '<i class="fa-regular fa-circle"></i>';
        saveData();
      } 
      else if(e.target.className == "todo-p"){
        e.target.parentElement.classList.toggle("check");
        if(e.target.parentElement.classList.contains("check")){
          e.target.parentElement.querySelector(".todo-check").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        } else {
          e.target.parentElement.querySelector(".todo-check").innerHTML = '<i class="fa-regular fa-circle"></i>';
        } 
        saveData();
      }
      else{
        e.target.parentElement.parentElement.classList.toggle("check");
        if(e.target.parentElement.parentElement.classList.contains("check")){
          e.target.parentElement.parentElement.querySelector(".todo-check").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        } else {
          e.target.parentElement.parentElement.querySelector(".todo-check").innerHTML = '<i class="fa-regular fa-circle"></i>';
        } 
        saveData();
      }
      
    })
    function saveData() {
      localStorage.setItem("todoList", todoList.innerHTML);
    }
    function loadData() {
      if (localStorage.getItem("todoList")) {
        todoList.innerHTML = localStorage.getItem("todoList");
      }
    }
    loadData();

    // AI Textbox
    const aiBtn = document.querySelector(".ai-btn")
    const aiBox = document.querySelector(".ai-msg");
    const aiTitle = document.querySelector(".ai-btn__text");
    let aiCheck = false;
    aiBtn.onclick = () => {
        if(aiCheck){
            aiBox.style.opacity = "0";
            setTimeout(() => { 
              aiBox.classList.remove("active");
            }, 300);
            aiBtn.classList.remove("active");
            aiTitle.innerHTML = "Chat with AI Lofi";
            aiCheck = false;
        } else {
            aiBox.style.opacity = "1";
            aiBox.classList.add("active");
            aiBtn.classList.add("active");
            aiTitle.innerHTML = '<span>Click vào đây để đóng cuộc trò chuyện</span>';
            aiCheck = true;
        }
    }

},

  
  start: function () {
    // Set first html
    playBtn.innerHTML =
      '<img src="../static/assets/svg/play.18d46dd9.svg" alt="">';
    document.querySelector("#chill").classList.add("active");

    // Run
    app.render();

    videoBg[1].innerHTML =
      '<source src="../static/assets/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4">';
  },
};

app.start();



// GeminiChat
window.addEventListener('unload', function () {
    // Send a synchronous GET request to the server to clear the session
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/clear_session', true);  // Synchronous request
    xhr.send();
});