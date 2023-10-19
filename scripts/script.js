window.addEventListener("load", function () {
  setTimeout(function () {
    const rightProjector = document.querySelector(".right-projector");
    const leftProjector = document.querySelector(".left-projector");

    gsap.to(rightProjector, {
      rotation: 0,
      top: 0,
      right: "25%",
      height: "100%",
      duration: 2,
      ease: "power2.out",
    });
    gsap.to(leftProjector, {
      rotation: 0,
      top: 0,
      left: "10%",
      height: "100%",
      duration: 2,
      ease: "power2.out",
    });
  }, 1000);
  setTimeout(() => {
    const firstBtn = document.querySelector(".first-section__molecules");
    gsap.to(firstBtn, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 2000);

  setTimeout(() => {
    const moleculesImg = document.querySelector(".molecules-img");
    gsap.fromTo(
      moleculesImg,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        onComplete: function () {
          moleculesImg.style.transform = "";
          moleculesImg.style.transition = "transform 0.3s ease-in-out";
        },
      }
    );
  }, 2500);

  setTimeout(() => {
    const title = document.querySelector(".first-section__title");
    gsap.to(title, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 3000);

  setTimeout(() => {
    const secondBtn = document.querySelector(".first-section__online-zal");
    gsap.to(secondBtn, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, 4000);
  setTimeout(() => {
    const onlineZalImg = document.querySelector(".online-zal-img");
    gsap.fromTo(
      onlineZalImg,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        onComplete: function () {
          onlineZalImg.style.transform = "";
          onlineZalImg.style.transition = "transform 0.3s ease-in-out";
        },
      }
    );
  }, 4500);
});

const zalMobile = document.querySelector(".second-section__online-zal");
const moleculesMobile = document.querySelector(".second-section__molecules");
const discMobile = document.querySelector(".second-section__disc-mobile");
const firstLi = document.querySelector(".first-li");
const secondLi = document.querySelector(".second-li");
const thirdLi = document.querySelector(".third-li");
const fourthLi = document.querySelector(".fourth-li");

ScrollTrigger.create({
  trigger: firstLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scale = 0 + progress * 1;
    zalMobile.style.scale = `${scale}`;
  },
});

ScrollTrigger.create({
  trigger: secondLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scaleMinus = 1 - progress * 1;
    const scalePlus = 0 + progress * 1;
    zalMobile.style.scale = `${scaleMinus}`;
    moleculesMobile.style.scale = `${scalePlus}`;
  },
});

ScrollTrigger.create({
  trigger: thirdLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scaleMinus = 1 - progress * 1;
    const scalePlus = 0 + progress * 1;
    moleculesMobile.style.scale = `${scaleMinus}`;
    discMobile.style.scale = `${scalePlus}`;
  },
});
ScrollTrigger.create({
  trigger: fourthLi,
  start: "top 100%",
  end: "center center",
  onUpdate: (self) => {
    const progress = self.progress;
    const scaleMinus = 1 - progress * 1;
    discMobile.style.scale = `${scaleMinus}`;
  },
});

const desktopDisk = document.querySelector(".second-section__disc");
const desktopDiskImg = document.querySelector(".disc");
const mobileDiscImg = document.querySelector(".disc__mobile");
desktopDiskImg.style.animation = "rotate 10s linear infinite";
mobileDiscImg.style.animation = "rotate 10s linear infinite";

gsap.to(desktopDisk, {
  scale: 1,
  scrollTrigger: {
    trigger: desktopDisk,
    start: "top 90%",
    end: "center center",
    scrub: 1,
  },
});

const superLiteBlock = document.querySelector(".second-section__super-lite");
const liteBlock = document.querySelector(".second-section__lite");
const energyBlock = document.querySelector(".second-section__energy");

gsap.to(superLiteBlock, {
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: liteBlock,
    start: "center center",
    end: "center center",
    scrub: 1,
  },
});
gsap.to(liteBlock, {
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: liteBlock,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.to(energyBlock, {
  x: 0,
  y: 0,
  scrollTrigger: {
    trigger: energyBlock,
    start: "top 30%",
    end: "top 30%",
    scrub: 1,
  },
});

const superLiteBlockMobile = document.querySelector(
  ".second-section__super-lite__mobile"
);
const liteBlockMobile = document.querySelector(".second-section__lite__mobile");
const energyBlockMobile = document.querySelector(
  ".second-section__energy__mobile"
);

gsap.to(superLiteBlockMobile, {
  x: 0,
  scrollTrigger: {
    trigger: superLiteBlockMobile,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.to(liteBlockMobile, {
  x: 0,
  scrollTrigger: {
    trigger: liteBlockMobile,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.to(energyBlockMobile, {
  x: 0,
  scrollTrigger: {
    trigger: energyBlockMobile,
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  },
});

const thirdSectionList1 = document.querySelector(".third-section__list1");
const thirdSectionList2 = document.querySelector(".third-section__list2");
const thirdFirstBlock = document.querySelector(".third-section__7days");
const thirdSecondBlock = document.querySelector(".third-section__15hot");

gsap.to(thirdFirstBlock, {
  x: 0,
  scrollTrigger: {
    trigger: thirdFirstBlock,
    start: "top 50%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.to(thirdSecondBlock, {
  x: -1,
  scrollTrigger: {
    trigger: thirdSecondBlock,
    start: "top 50%",
    end: "top 50%",
    scrub: 1,
    onComplete: () => {
      thirdSecondBlock.style.background = "#ffffff";
    },
  },
});

//bokeIcons
const bokeIcons = document.querySelectorAll(".boke-icon");
function getRandomBokeIcon(icon) {
  const randomNum1 = gsap.utils.random(-15, 15);
  const randomNum2 = gsap.utils.random(-15, 15);
  gsap.killTweensOf(icon);
  gsap.to(icon, {
    x: randomNum1,
    y: randomNum2,
    duration: 2,
    onComplete: function () {},
  });
}

setInterval(() => {
  bokeIcons.forEach((icon) => {
    getRandomBokeIcon(icon);
  });
}, 2000);

//spans
const spans = document.querySelectorAll(".fourth-section__span");
function getRandomSpan(span) {
  const randomNum1 = gsap.utils.random(-15, 15);
  const randomNum2 = gsap.utils.random(-15, 15);
  const opacityDuration = 1;
  gsap.killTweensOf(span);

  gsap.to(span, {
    x: randomNum1,
    y: randomNum2,
    duration: 2,
    onComplete: function () {
      setTimeout(() => {
        gsap.to(span, {
          duration: opacityDuration,
        });
      }, Math.random() * 1000);
    },
  });
}

function flashSpans() {
  const randomNumber = Math.floor(Math.random() * spans.length);
  const tween = gsap.to(spans[randomNumber], {
    opacity: 1,
    color: "#ffffff",
    duration: 0.5,
    onComplete: function () {
      gsap.to(spans[randomNumber], {
        opacity: 0.2,
        color: "#000000",
        duration: 0.5,
      });
    },
  });
}

setInterval(() => {
  flashSpans();
}, 1000);

setInterval(() => {
  spans.forEach((span) => {
    getRandomSpan(span);
  });
}, 2000);
