const storage = {
  // Combo theme: music + sound effect
  theme: {
    forestInside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/inside.mp4",
        rain_forest:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/inside-rain.mp4",
        default_pixel:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/inside-pix.mp4",
        rain_forest_pixel:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/inside-rain-pix.mp4",
      },
      actions: [
        {
          position: [70, 30],
          title: "Forest Rain",
          type: "sound",
          effect: "rain_forest",
        },
        {
          position: [15, 20],
          title: "Bird chirping",
          type: "sound",
          effect: "birds",
        },
        { position: [15, 85], title: "Open mixer", type: "open-mixer" },
      ],
    },
    forestOutside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/outside.mp4",
        rain_forest:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/outside-rain.mp4",
        default_pixel:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/outside-pix.mp4",
        rain_forest_pixel:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/outside-rain-pix.mp4",
      },
      actions: [
        { position: [70, 70], title: "River", type: "sound", effect: "river" },
        {
          position: [10, 50],
          title: "Bird chirping",
          type: "sound",
          effect: "birds",
        },
        {
          position: [67, 12],
          title: "Forest Rain",
          type: "sound",
          effect: "rain_forest",
        },
      ],
    },
    vanInside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/van/van.mp4",
        rain_forest:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/van/van-rain.mp4",
      },
      actions: [
        {
          position: [50, 30],
          title: "Forest Rain",
          type: "sound",
          effect: "rain_forest",
        },
        {
          position: [55, 20],
          title: "Forest Sound",
          type: "sound",
          effect: "forest",
        },
        { position: [80, 85], title: "Open mixer", type: "open-mixer" },
      ],
    },
    vanOutside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/van/van-out.mp4",
        fire: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/van/van-out-fire.mp4",
      },
      actions: [
        {
          position: [10, 20],
          title: "Forest sound",
          type: "sound",
          effect: "forest",
        },
        {
          position: [42, 78],
          title: "Campfire sound",
          type: "sound",
          effect: "fire",
        },
        { position: [61, 78], title: "Open mixer", type: "open-mixer" },
      ],
    },
    cafeInside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside.mp4",
        default_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside-night.mp4",
        rain_street_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside-night-rain.mp4",
        rain_street:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside-rain.mp4",
      },
      actions: [
        {
          position: [20, 38],
          title: "City Rain",
          type: "sound",
          effect: "rain_street",
        },
        {
          position: [50, 70],
          title: "People Talks",
          type: "sound",
          effect: "people",
        },
        { position: [26, 65], title: "Open mixer", type: "open-mixer" },
      ],
    },
    cafeOutside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside.mp4",
        rain_street:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside-rain.mp4",
        default_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside-night.mp4",
        rain_street_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside-night-rain.mp4",
      },
      actions: [
        {
          position: [75, 80],
          title: "City Traffic",
          type: "sound",
          effect: "city",
        },
        {
          position: [3, 35],
          title: "City Rain",
          type: "sound",
          effect: "rain_street",
        },
        { position: [60, 65], title: "Open mixer", type: "open-mixer" },
      ],
    },
    summerInside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer.mp4",
        storm:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer-rain.mp4",
      },
      actions: [
        {
          position: [30, 25],
          title: "Summer storm",
          type: "sound",
          effect: "storm",
        },
        { position: [65, 51], title: "Open mixer", type: "open-mixer" },
        { position: [60, 45], title: "Fan", type: "sound", effect: "fan" },
      ],
    },
    summerOutside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer-out.mp4",
        storm:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer-out-rain.mp4",
        default_pixel:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer-out-pixel.mp4",
        storm_pixel:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer-out-rain-pixel.mp4",
      },
      actions: [
        {
          position: [75, 80],
          title: "Sea Waves",
          type: "sound",
          effect: "waves",
        },
        {
          position: [85, 15],
          title: "Summer storm",
          type: "sound",
          effect: "storm",
        },
        { position: [19, 63], title: "Open mixer", type: "open-mixer" },
      ],
    },
    oceanInside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/ocean/ocean-tales.mp4",
        storm:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/ocean/ocean-tales-rain.mp4",
      },
      actions: [
        { position: [8, 59], title: "Wind", type: "sound", effect: "wind" },
        { position: [60, 70], title: "Open mixer", type: "open-mixer" },
        {
          position: [59, 31],
          title: "Summer Storm",
          type: "sound",
          effect: "storm",
        },
      ],
    },
    oceanOutside: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/ocean/ocean-tales-out.mp4",
        storm:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/ocean/ocean-tales-out-rain.mp4",
      },
      actions: [
        { position: [8, 15], title: "Wind", type: "sound", effect: "wind" },
        { position: [42, 64], title: "Ocean", type: "sound", effect: "ocean" },
        {
          position: [48, 13],
          title: "Summer Storm",
          type: "sound",
          effect: "storm",
        },
      ],
    },
    lrBedRoom: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20Day%20112521%20%281%29.mp4",
        rain_street:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20DAY.mp4",
        default_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4",
        rain_street_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20NIGHT.mp4",
      },
      actions: [
        {
          position: [82, 20],
          title: "City Rain",
          type: "sound",
          effect: "rain_street",
        },
        {
          position: [7, 18],
          title: "City Traffic",
          type: "sound",
          effect: "city",
        },
      ],
    },
    lrLivingRoom: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20Day%20112521.mp4",
        rain_street:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20RAINY%20DAY.mp4",
        default_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20STARRY%20NIGHT.mp4",
        rain_street_night:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20RAINY%20NIGHT.mp4",
      },
      actions: [
        {
          position: [40, 14],
          title: "City Rain",
          type: "sound",
          effect: "rain_street",
        },
        {
          position: [4, 68],
          title: "Fireplace",
          type: "sound",
          effect: "fireplace",
        },
      ],
    },
    deskCity: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/study/city%20scene.mp4",
      },
      actions: [
        { position: [44, 52.5], title: "Change place", type: "next-set" },
        {
          position: [40, 15],
          title: "City Traffic",
          type: "sound",
          effect: "city",
        },
      ],
    },
    deskBeach: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/study/beach%20scene.mp4",
      },
      actions: [
        { position: [44, 52.5], title: "Change place", type: "next-set" },
        { position: [40, 15], title: "Waves", type: "sound", effect: "waves" },
      ],
    },
    deskSnow: {
      variants: {
        default:
          "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/study/snow%20scene%20wo%20snow.mp4",
        snow: "https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/study/snow%20scene.mp4",
      },
      actions: [
        { position: [44, 52.5], title: "Change place", type: "next-set" },
        {
          position: [40, 15],
          title: "Blizzard",
          type: "sound",
          effect: "snow",
        },
      ],
    },
  }

}