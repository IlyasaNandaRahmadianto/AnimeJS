var card = document.querySelectorAll(".card");
anime({
  targets: card,
  translateX: [-400, 0],
  duration: 2500,
});

var nama = document.querySelectorAll(".nama");
anime({
  targets: nama,
  translateY: [-30, 0],
  duration: 3000,
});

anime({
  targets: ".button",
  translateX: {
    value: [-10, 0],
    duration: 800,
  },
  rotate: {
    value: 360,
    duration: 2800,
    easing: "easeInOutSine",
  },
  scale: {
    value: 1,
    duration: 1600,
    delay: 800,
    easing: "easeInOutQuart",
  },
  delay: 250,
});

const blok = document.querySelector(".blok");
for (var i = 0; i <= 50; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  blok.appendChild(blocks);
}

function animateBlocks() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-500, 650);
    },
    translateY: function () {
      return anime.random(-250, 250);
    },
    scale: function () {
      return anime.random(1, 5);
    },
    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks,
  });
}

animateBlocks();
