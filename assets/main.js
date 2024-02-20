const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Loader

// window.onload = function() {
//     var loader = $('.preload');
//     loader.style.opacity = '0'
//     setTimeout(function() {
//         loader.className = "preload active";
//     }, 1000)
// }

//Zoom screen

const html = $("html");
const zoomBtn = $(".zoom-btn");
zoomBtn.onclick = (e) => {
  e.stopPropagation();
  let checkZoom = document.fullscreenElement;
  if (checkZoom) document.exitFullscreen();
  else html.requestFullscreen();
};

// Declare video bg

const changeBg = $(".ant-switch");
const changeBgBtn = $(".ant-switch__handle");
const videoBg = $$(".main-video");

// Declare option
const obh = $$(".obh");
const optionBtn = $$(".option__icon");
const ob1 = $("#ob1");
const ob2 = $("#ob2");
const ob3 = $("#ob3");
const ob4 = $("#ob4");
const bgRelative = $(".bg-relative");
const typeItem = $$(".sub-mood__item");
const subOpt = $$(".sub-opt");
const exitSubBtn = $$(".sub-btn");

// Declare music input

const mainMusicBtn = $("#ms-volume__input");
const effectList = $("#effect-list");
var loadMix = false;
const mixBtn = $(".sub-footer");

// Declare play btn

const playBtn = $(".play");
var checkPlayMusic = false;
const nextBtn = $(".next");
const prevBtn = $(".prev");
const audio = $(".music");
var checkMix = false;

// Main program

const app = {
  // Declare music sources
  music: {
    chill: [
      {
        url: "../assets/tracks/chill/chill_01.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_02.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_03.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_04.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_05.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_06.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_07.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_08.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_09.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_10.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_11.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_12.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_13.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_14.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_15.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_16.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_17.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_18.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_19.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_20.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_21.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_22.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_23.mp3",
      },
      {
        url: "../assets/tracks/chill/chill_24.mp3",
      },
    ],
    jazzy: [
      {
        url: "../assets/tracks/jazzy/jazzy_01.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_02.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_03.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_04.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_05.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_06.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_07.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_08.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_09.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_10.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_11.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_12.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_13.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_14.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_15.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_16.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_17.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_18.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_19.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_20.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_21.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_22.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_23.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_24.mp3",
      },
      {
        url: "../assets/tracks/jazzy/jazzy_25.mp3",
      },
    ],
    sleepy: [
      {
        url: "../assets/tracks/sleepy/sleepy_01.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_02.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_03.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_04.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_05.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_06.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_07.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_08.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_09.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_10.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_11.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_12.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_13.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_14.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_15.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_16.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_17.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_18.mp3",
      },
      {
        url: "../assets/tracks/sleepy/sleepy_19.mp3",
      },
    ],
  },

  //Hiệu ứng âm thanh
  effectMusic: [
    {
      type: "city",
      name: "City traffic",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/city_traffic.mp3",
    },
    {
      type: "rain_street",
      name: "City Rain",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/rain_city.mp3",
    },
    {
      type: "fireplace",
      name: "Fireplace",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/fireplace.mp3",
    },
    {
      type: "fire",
      name: "Campfire",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/campfire.mp3",
    },
    {
      type: "forest",
      name: "Forest Sounds",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/forest_night.mp3",
    },
    {
      type: "rain_forest",
      name: "Forest Rain",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/rain_forest.mp3",
    },
    {
      type: "waves",
      name: "Waves",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/waves.mp3",
    },
    {
      type: "fan",
      name: "Fan",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/fan.mp3",
    },
    {
      type: "storm",
      name: "Summer Storm",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/summer_storm.mp3",
    },
    {
      type: "river",
      name: "River",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/river.mp3",
    },
    {
      type: "birds",
      name: "Bird Chirping",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/birds.mp3",
    },
    {
      type: "people",
      name: "People Talking",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/people_talk_inside.mp3",
    },
    {
      type: "wind",
      name: "Wind",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/wind.mp3",
    },
    {
      type: "ocean",
      name: "Ocean Sound",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/ocean.mp3",
    },
    {
      type: "snow",
      name: "Blizzard",
      url: "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/snow.mp3",
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
        playBtn.innerHTML = `<img src="../assets/svg/pause.4ac70926.svg" alt="">`;
      } else {
        checkPlayMusic = false;
        audio.pause();
        playBtn.innerHTML = `<img src="../assets/svg/play.18d46dd9.svg" alt="">`;
      }
    };

    // Next/prev song Btn + Set up list main music
    var lengthMusic = [24, 25, 19];
    var historyObj = {
      0: [],
      1: [],
      2: [],
    };
    for (let key in historyObj) {
      while (historyObj[`${key}`].length < lengthMusic[`${key}`]) {
        let r = Math.floor(Math.random() * lengthMusic[`${key}`]);
        if (historyObj[`${key}`].indexOf(r) === -1)
          historyObj[`${key}`].push(r);
      }
    }
    var historySong = [];

    var lengthCurrentMusic = 0;
    var listMusic = Object.values(app.music)[0];
    var prevType = 0;
    var indexMusic = 0;

    function typeMusic(index) {
      historySong = historyObj[`${index}`];
      lengthCurrentMusic = lengthMusic[index];
      indexMusic = Math.floor(Math.random() * lengthCurrentMusic);
      listMusic = Object.values(app.music)[index];
      prevType = index;
      audio.innerHTML = `<source  src="${
        listMusic[historySong[indexMusic]].url
      }" type="audio/mp3">`;
      console.log(`${listMusic[historySong[indexMusic]].url}`);
    }

    typeMusic(0);

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

    typeItem.forEach((e, index) => {
      e.onclick = () => {
        if (prevType != index) {
          typeItem[prevType].classList.remove("active");
          typeMusic(index);
          e.classList.add("active");
          audio.load();
          audio.play();
          playBtn.innerHTML = `<img src="../assets/svg/pause.4ac70926.svg" alt="">`;
        }
      };
    });

    prevBtn.onclick = function () {
      indexMusic--;
      if (indexMusic == -1) {
        indexMusic = lengthCurrentMusic - 1;
      }
      audio.innerHTML = `<source src="${
        listMusic[historySong[indexMusic]].url
      }" type="audio/mp3">`;
      checkPlayMusic = true;
      playBtn.innerHTML = `<img src="../assets/svg/pause.4ac70926.svg" alt="">`;
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
      playBtn.innerHTML = `<img src="../assets/svg/pause.4ac70926.svg" alt="">`;
      audio.load();
      audio.play();
    };

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
    const inputRange = $$(".effect-volume__input");
    const audioEffectList = $$(".effect-item>audio");

    for (let i = 0; i < inputRange.length; i++) {
      inputRange[i].oninput = function () {
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

    mainMusicBtn.oninput = function () {
      if (this.value == 0) {
        audio.pause();
        checkPlayMusic = false;
        playBtn.innerHTML = `<img src="../assets/svg/play.18d46dd9.svg" alt="">`;
      } else {
        audio.volume = this.value / 100;
        audio.play();
        checkPlayMusic = true;
        playBtn.innerHTML = `<img src="../assets/svg/pause.4ac70926.svg" alt="">`;
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
    const typeWeather = [0, 0, 0]; // [0]: day/night, [1]: no rain/rain, [2]:prev weather:0-day/1-night/2-rainday/3-rainnight

    function changeBgFunc() {
      if (typeWeather[0] == 0 && typeWeather[1] == 0) {
        videoBg[0].innerHTML =
          '<source src="./assets/scenes/chill-vibes/BDR%20Day%20112521.mp4">';
        videoBg[0].style.opacity = "1";
        videoBg[1].style.opacity = "0";
        videoBg[0].load();
        videoBg[0].play();
        changeBgBtn.style.left = "34px";
        changeBg.style.background = "#f3a952";
      } else if (typeWeather[0] == 1 && typeWeather[1] == 0) {
        videoBg[1].innerHTML =
          '<source src="./assets/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4">';
        videoBg[0].style.opacity = "0";
        videoBg[1].style.opacity = "1";
        videoBg[1].load();
        videoBg[1].play();
        changeBgBtn.style.left = "4px";
        changeBg.style.background = "rgba(0,0,0,.25)";
      } else if (typeWeather[0] == 0 && typeWeather[1] == 1) {
        videoBg[1].innerHTML =
          '<source src="./assets/scenes/chill-vibes/BDR%20RAINY%20DAY.mp4">';
        videoBg[0].style.opacity = "0";
        videoBg[1].style.opacity = "1";
        if (typeWeather[2] != 2) {
          videoBg[1].load();
          videoBg[1].play();
        }
        typeWeather[2] = 2;
        changeBgBtn.style.left = "34px";
        changeBg.style.background = "#f3a952";
      } else {
        videoBg[0].innerHTML =
          '<source src="./assets/scenes/chill-vibes/BDR%20RAINY%20NIGHT.mp4">';
        videoBg[0].style.opacity = "1";
        videoBg[1].style.opacity = "0";
        if (typeWeather[2] != 3) {
          videoBg[0].load();
          videoBg[0].play();
        }
        typeWeather[2] = 3;
        changeBgBtn.style.left = "4px";
        changeBg.style.background = "rgba(0,0,0,.25)";
      }
    }

    // Declare audio in html
    var preVid = document.createElement("link");
    preVid.rel = "preload";
    preVid.as = "audio";
    preVid.type = "audio/mp3";
    preVid.href = `${listMusic[historySong[indexMusic]].url}`;
    document.head.appendChild(preVid);

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
      var loader = $(".preload");
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.className = "preload active";
      }, 500);
    }
    loadVid("./assets/scenes/chill-vibes/BDR%20Day%20112521.mp4", removeLoader);

    // Set video background
    changeBgFunc();

    // Light/dark mode button
    changeBg.onclick = () => {
      if (typeWeather[0] == 0) {
        typeWeather[0] = 1;
        typeWeather[2] = 1;
        changeBgFunc();
      } else {
        typeWeather[0] = 0;
        typeWeather[2] = 0;
        changeBgFunc();
      }
    };

    // Rain background
    const rain = $("#rain_street");
    rain.oninput = function () {
      this.style.background =
        "linear-gradient(to right, #f3a952 0%, #f3a952 " +
        this.value +
        "%, #14141d " +
        this.value +
        "%, #14141d 100%)";
      if (this.value == 0) {
        audioEffectList[1].pause();
        typeWeather[1] = 0;
        this.onmouseup = () => {
          changeBgFunc();
        };
        this.addEventListener("touchend", (e) => changeBgFunc(), true);
      } else {
        audioEffectList[1].play();
        audioEffectList[1].volume = this.value / 100;
        typeWeather[1] = 1;
        this.onmouseup = () => {
          changeBgFunc();
        };
        this.addEventListener("touchend", (e) => changeBgFunc(), true);
      }
    };

    // Option hover css

    let firstBgClick = 1;
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

    exitSubBtn.forEach(
      (e, index) =>
        (e.onclick = () => {
          optionBtn[index + 1].classList.remove("active");
          subOpt[index + 1].classList.remove("active");
          if (index == 0) obh[0].classList.remove("db");
          if (index == 2) obh[1].classList.remove("db");
          checkOpt[1] = false;
        })
    );

    optionBtn.forEach(
      (e, index) =>
        (e.onclick = () => {
          optionClick(index);
        })
    );

    bgRelative.onclick = () => {
      $(".option").onclick = (e) => e.stopPropagation();
      subOpt.forEach((e) => (e.onclick = (a) => a.stopPropagation()));
      $(".control").onclick = (e) => e.stopPropagation();
      if (firstBgClick != 1) {
        effectList.scrollTo(0, 0);
        optionBtn[checkOpt[0]].classList.remove("active");
        obh[0].classList.remove("db");
        subOpt[checkOpt[0]].classList.remove("active");
        obh[1].classList.remove("db");
        checkOpt[1] = false;
      } else firstBgClick = 2;
    };

    // Tutorial
    const tutBtn = $("#tutorial");
    const tut = $(".tutorial");
    const tutClose = $(".tut-close");
    const tutVid = $$(".tut__vid");
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

    // Import Link Youtube
    const ytDiv = $("#yt-music");
    const ytLink = $(".sub3-input");
    const ytBtn = $("#sub3-btn");
    ytBtn.onclick = () => {
      if (ytLink.value != "") {
        ytDiv.innerHTML = `<iframe width="auto" height="auto" src="${ytLink.value}&autoplay=1&loop=1" frameborder="0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        ytLink.value = "";
        ytDiv.classList.add("active");
      }
    }
  },
  
  start: function () {
    // Set first html
    playBtn.innerHTML =
      '<img src="../assets/svg/play.18d46dd9.svg" alt="">';
    $("#chill").classList.add("active");

    // Run
    app.render();

    videoBg[1].innerHTML =
      '<source src="./assets/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4">';
  },
};

app.start();

// Declare SVG

$(
  "#sleepy"
).innerHTML = `<svg viewBox="0 0 512 512" class="sub-mood__svg"><g><path d="M256,0C114.616,0,0,114.616,0,256s114.616,256,256,256s256-114.616,256-256C370.616,256,256,141.384,256,0z"/></g></svg>
<p class="sub-mood__title">Sleepy</p>`;
$(
  "#jazzy"
).innerHTML = `<svg viewBox="0 0 511.999 511.999" class="sub-mood__svg">
<g><path d="M448.763,331.378L301.897,176.644c-6.596-6.95-17.578-7.237-24.527-0.639c-6.95,6.596-7.237,17.577-0.639,24.527    l1.203,1.267c-58.645,77.317-30.627,205.8-51.371,206.163c-13.492,0.237-11.748-17.188-12.664-18.044    c-0.385,0.363-4.843-61.502-4.882-62.029C187.893,40.337,196.596,48.3,184.154,27.634c-20.398-34.581-74.72-38.629-101.78-1.157    c-8.999,14.269-9.133,24.849-9.361,39.378c-8.243,1.344-14.542,8.479-14.542,17.102c0,9.582,7.768,17.349,17.349,17.349h27.758    c9.582,0,17.349-7.768,17.349-17.349c0-8.383-5.945-15.377-13.85-16.996c0.45-5.198,1.274-9.306,2.187-11.727    c2.299-6.978,8.096-17.06,21.633-17.136c6.915-0.039,16.534,6.727,17.788,21.184c1.458,17.572,0.842,31.673,0.058,104.672h-15.48    c-9.582,0-17.349,7.768-17.349,17.349c0,9.581,7.768,17.349,17.349,17.349h13.853c-1.152,17.285-0.787,12.039-1.839,26.601    h-15.514c-0.307-9.311-7.934-16.771-17.32-16.771c-9.582,0-17.349,7.768-17.349,17.349v33.895c0,9.582,7.768,17.349,17.349,17.349    c9.506,0,17.216-7.648,17.338-17.125h12.979c-3.448,47.361-5.951,80.832-9.492,128.172c-0.011-0.12,0.01,2.124-0.008,1.317    c-1.06,16.796-2.502,46.563,6.363,63.662c7.518,20.241,20.072,35.531,42.216,47.421c86.167,46.264,161.757-49.968,171.469-64.583    c25.481-41.021,53.004-67.521,69.048-80.983l1.24,1.306c3.411,3.594,7.994,5.406,12.586,5.406c4.288,0,8.586-1.581,11.941-4.767    C455.072,349.308,455.359,338.328,448.763,331.378z"/></g></svg>
<p class="sub-mood__title">Jazzy</p>`;
$(
  "#chill"
).innerHTML = `<svg viewBox="0 0 394.382 394.382" class="sub-mood__svg">
<path d="M170.519,107.736c1.022,0.695,2.222,1.063,3.47,1.063h0.015c3.41,0,6.184-2.772,6.184-6.181   c0-0.59-0.083-1.173-0.245-1.735c-3.516-15.401-1.852-27.804,4.947-36.863c8.039-10.709,11.599-24.452,9.523-36.759   c-1.833-10.911-7.698-19.979-16.952-26.217c-2.066-1.402-4.915-1.392-6.976,0.026c-2.107,1.449-3.094,3.999-2.514,6.506   c3.798,16.204,0.343,26.473-8.32,42.058c-5.407,9.727-7.616,20.652-6.219,30.766C155.015,91.84,160.932,101.298,170.519,107.736z"/>
<path d="M220.694,105.121c0.968,0.659,2.098,1.008,3.268,1.008h0.007c3.211,0,5.823-2.612,5.823-5.823   c0-0.544-0.076-1.084-0.227-1.607c-2.665-11.718-1.42-21.117,3.701-27.941c6.438-8.575,9.288-19.592,7.624-29.467   c-1.478-8.792-6.205-16.102-13.669-21.138c-1.94-1.31-4.567-1.326-6.576,0.04c-1.961,1.361-2.9,3.832-2.346,6.113   c2.893,12.339,0.24,20.195-6.402,32.141c-4.328,7.785-6.094,16.538-4.971,24.644C208.199,92.312,212.969,99.936,220.694,105.121z"/>
<path d="M320.6,162.422l-6.604-25.205c-1.864-7.115-9.087-12.69-16.443-12.69H96.83c-7.356,0-14.579,5.575-16.443,12.69   l-6.604,25.205c-0.969,3.697-0.31,7.392,1.808,10.136s5.524,4.318,9.345,4.318h4.689l17.839,197.022   c1.022,11.294,11.081,20.483,22.422,20.483h134.611c11.341,0,21.399-9.189,22.422-20.483l17.839-197.022h4.689   c3.821,0,7.228-1.574,9.345-4.318S321.569,166.12,320.6,162.422z M228.006,292.922c-20.199,24.766-50.398,33.638-67.421,19.739   c-12.914-10.552-14.502-31.118-5.735-51.264c2.821-6.405,6.615-12.823,11.484-18.768c2.1-2.612,4.41-4.922,6.72-7.179   c3.018-2.914,6.195-5.63,9.476-7.94c7.691-5.381,15.789-8.767,23.585-10.198c10.407-1.955,20.304-0.42,27.64,5.578   C250.816,236.789,248.204,268.117,228.006,292.922z"/>
<path d="M223.459,240.238c-1.532-0.663-4.713-1.774-8.809-1.774c-5.612,0-11.037,2.111-15.683,6.103   c-4.57,3.92-8.526,9.813-11.757,17.509c-1.405,3.339-2.511,6.436-3.474,9.733c-4.354,12.137-10.543,13.764-11.744,13.967   c-2.795,0.474-4.083,2.461-4.357,4.163c-0.336,2.088,0.72,4.169,2.619,5.175c1.225,0.652,4.542,2.168,8.893,2.169c0,0,0,0,0.001,0   c6.92,0,16.651-3.682,23.712-21.212l0.926-2.306c7.382-18.389,8.516-21.215,18.976-23.925c2.13-0.549,3.675-2.366,3.844-4.521   C226.776,243.133,225.542,241.139,223.459,240.238z"/></svg>
<p class="sub-mood__title">Chill</p>`;
