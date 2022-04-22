// trigger to play music in the background with sweetalert
window.addEventListener("load", () => {
  Swal.fire({
    title: "Do you want to play music in the background?",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      resolveFetch().then(animationTimeline());
    } else {
      resolveFetch().then(animationTimeline());
    }
  });
});

// animation timeline
const animationTimeline = () => {
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  // timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .from(".idea-7", 0.7, ideaTextTrans)
    .to(".idea-7", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-10", 0.7, ideaTextTrans)
    .to(".idea-10", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-12", 0.7, ideaTextTrans)
    .to(".idea-12", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-14", 0.7, ideaTextTrans)
    .to(".idea-14", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-15", 0.7, ideaTextTrans)
    .to(".idea-15", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-17", 0.7, ideaTextTrans)
    .to(".idea-17", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-18", 0.7, ideaTextTrans)
    .to(".idea-18", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-19", 0.7, ideaTextTrans)
    .to(".idea-19", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-20", 0.7, ideaTextTrans)
    .to(".idea-20", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-21", 0.7, ideaTextTrans)
    .to(".idea-21", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-22", 0.7, ideaTextTrans)
    .to(".idea-22", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-23", 0.7, ideaTextTrans)
    .to(".idea-23", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-24", 0.7, ideaTextTrans)
    .to(".idea-24", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-25", 0.7, ideaTextTrans)
    .to(".idea-25", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-26", 0.7, ideaTextTrans)
    .to(".idea-26", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-27", 0.7, ideaTextTrans)
    .to(".idea-27", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-28", 0.7, ideaTextTrans)
    .to(".idea-28", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-29", 0.7, ideaTextTrans)
    .to(".idea-29", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-31", 0.7, ideaTextTrans)
    .to(".idea-31", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-32", 0.7, ideaTextTrans)
    .to(".idea-32", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-35", 0.7, ideaTextTrans)
    .to(".idea-35", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-36", 0.7, ideaTextTrans)
    .to(".idea-36", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-37", 0.7, ideaTextTrans)
    .to(".idea-37", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-38", 0.7, ideaTextTrans)
    .to(".idea-38", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-40", 0.7, ideaTextTrans)
    .to(".idea-40", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-41", 0.7, ideaTextTrans)
    .to(".idea-41", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-42", 0.7, ideaTextTrans)
    .to(".idea-42", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-43", 0.7, ideaTextTrans)
    .to(".idea-43", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-44", 0.7, ideaTextTrans)
    .to(".idea-44", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-45", 0.7, ideaTextTrans)
    .to(".idea-45", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-46", 0.7, ideaTextTrans)
    .to(".idea-46", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-47", 0.7, ideaTextTrans)
    .to(".idea-47", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-48", 0.7, ideaTextTrans)
    .to(".idea-48", 0.7, ideaTextTransLeave, "+=2.5")
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    );
  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};
