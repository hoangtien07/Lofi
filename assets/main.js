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
// const exitSubBtn = $$(".sub-btn");

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
      if (checkMix) {        effectList.scrollTo(0, 0);
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
    
    changeBgFunc();   // Chạy lần đầu để tạo video nền

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

    // Nút Close để tắt thanh Option tại chức năng chưa hoàn thiện
    // exitSubBtn.forEach(
    //   (e, index) =>
    //     (e.onclick = () => {
    //       optionBtn[index + 1].classList.remove("active");
    //       subOpt[index + 1].classList.remove("active");
    //       if (index == 0) obh[0].classList.remove("db");
    //       if (index == 1) obh[1].classList.remove("db");
    //       checkOpt[1] = false;
    //     })
    // );

    optionBtn.forEach(
      (e, index) =>
        (e.onclick = () => {
          optionClick(index);
        })
    );

    // Tắt thanh công cụ khi click ra ngoài
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
        ytDiv.innerHTML = `${ytLink.value}`;
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

