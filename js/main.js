document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#Grøn").addEventListener("click", infoGrøn);
  document.querySelector("#orange").addEventListener("click", infoorange);
  document.querySelector("#rød").addEventListener("click", inforød);

  function infoGrøn() {
    console.log("infoGrøn");
    document.querySelector(".info-text > h2").textContent = "Grønne Zoner";
    document.querySelector(".placeholder").textContent = "Christianshavn,Frederiksberg,";
    document.querySelector("#efficiency").textContent = "haloooooo";
    document.querySelector("#requirement").textContent = "her er vigtig information om Grønne zoner";
  }

  function infoorange() {
    console.log("infoorange");
    document.querySelector(".info-text > h2").textContent = "Orange Zoner";
    document.querySelector(".placeholder").textContent = "haloooooo";
    document.querySelector("#efficiency").textContent = "halllollolol";
    document.querySelector("#requirement").textContent = "her er vigtig information om røde orange zone";
  }
  function inforød() {
    console.log("inforød");
    document.querySelector(".info-text > h2").textContent = "Røde Zoner";
    document.querySelector(".placeholder").textContent = "Nørrebro";
    document.querySelector("#efficiency").textContent = "her er vigtig information om røde zoner";
    document.querySelector("#requirement").textContent = "her er vigtig information om røde zoner";
  }
});
