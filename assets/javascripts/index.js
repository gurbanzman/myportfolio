const selectSwitch = document.querySelector("#language-select");
const shortcuts = document.querySelector(".shortcuts");
const link = document.querySelector(".links>p");
const languageLabel = document.querySelector(".language>label");

window.onload = function () {
  const loader = document.querySelector(".loader-content");
  const content = document.querySelector(".body-content");

  // Loader'ın kaybolması için GSAP animasyonu
  gsap.to(loader, {
    opacity: 0,
    duration: 2,
    onComplete: () => {
      // Loader'ı tamamen kaldır
      loader.classList.add("none");

      // İçeriği göster
      content.style.display = "block";

      // İçerik için giriş animasyonu
      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    },
  });
};
AOS.init();

// Object storing text for multiple languages
const translations = {
  en: {
    shortcuts: "Shortcuts",
    languageLabel: "Language",
    link: "Hi, I know to speak and read in English middle level. So my level is A2-B1 yet. And this process will progress well.",
  },
  tr: {
    shortcuts: "Kısayollar",
    languageLabel: "Dil",
    link: "Merhaba, türkçeyi çok seviyorum. Ve bu yüzden kendi öz ana dilim gibi konuşa biliyorum: C1",
  },
  az: {
    shortcuts: "Qısayollar",
    languageLabel: "Dil",
    link: "Salam, Azərbaycan dili mənim ana dilimdir. Rahat C2 deyə bilərəm. Öz həmyerlilərimlə biryerdə rahat işləyə bilərəm deyə düşünürəm.",
  },
};
const params = paramsSetting();

function paramsSetting() {
  let pathName = window.location.pathname.split("/").pop();
  return {
    path: pathName,
  };
}

if (params.path === "index.html") {
  link.textContent = translations.en.link;
  selectSwitch.addEventListener("input", (e) => {
    let { value } = e.target;
    link.textContent = translations[value].link;
    languageLabel.textContent = translations[value].languageLabel;
  });
}
