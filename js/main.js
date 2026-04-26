document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#Grøn").addEventListener("click", infoGrøn);
  document.querySelector("#orange").addEventListener("click", infoorange);
  document.querySelector("#rød").addEventListener("click", inforød);

  function infoGrøn() {
    console.log("infoGrøn");
    document.querySelector(".info-text > h2").textContent = "Grønne Zoner";
    document.querySelector(".placeholder").textContent = "Christianshavn, Frederiksberg, Østerbro, Sydhavn & Dragør";
    document.querySelector("#efficiency").textContent =
      "Mens store dele af København oplever uro under “Purge DK 2026”, er visse områder markeret som grønne zoner, de sikreste steder at opholde sig gennem natten. Særligt Christianshavn, Frederiksberg, Østerbro, Sydhavn og Dragør skiller sig ud.";
    document.querySelector("#requirement").textContent =
      "Forklaringen ligger i en kombination af geografi, lokalsamfund og forberedelse. Flere af områderne har naturlige afgrænsninger som kanaler, færre indfaldsveje og overskuelige kvarterer, hvilket gør det lettere at kontrollere, hvem der bevæger sig ind og ud.Samtidig har lokale beboere organiseret sig i fællesskaber, hvor man holder øje med gaderne og hurtigt reagerer på mistænkelig aktivitet. I områder som Frederiksberg og Østerbro er der desuden en høj koncentration af overvågning og privat sikkerhed, hvilket virker afskrækkende.";
  }

  function infoorange() {
    console.log("infoorange");
    document.querySelector(".info-text > h2").textContent = "Orange Zoner";
    document.querySelector(".placeholder").textContent = "Indre by, Valby, Brønshøj & Amager øst";
    document.querySelector("#efficiency").textContent = "Mens de grønne zoner holder en vis stabilitet, er flere områder i København klassificeret som orange under “Purge DK 2026”. Det gælder især Indre By, Valby, Brønshøj og Amager Øst.";
    document.querySelector("#requirement").textContent =
      "Disse områder befinder sig i en mellemzone, hvor situationen hurtigt kan skifte mellem ro og kaos. I Indre By har nattelivet og de mange åbne områder gjort det til et samlingspunkt for større grupper, hvilket øger risikoen for konfrontationer. Samtidig rapporteres der om plyndringer af butikker og hærværk mod bygninger. I Valby og Brønshøj er billedet mere blandet. Her forsøger lokale beboere flere steder at holde roen gennem fælles indsats, men enkelte episoder med sammenstød og organiserede grupper har skabt utryghed. Amager Øst oplever ligeledes svingende forhold, hvor nogle kvarterer forbliver relativt rolige, mens andre præges af uro og tilfældige hændelser.";
  }
  function inforød() {
    console.log("inforød");
    document.querySelector(".info-text > h2").textContent = "Røde Zoner";
    document.querySelector(".placeholder").textContent = "Nørrebro, Vesterbro, Bispebjerg & Vanløse ";
    document.querySelector("#efficiency").textContent = "De mest intense hændelser under “Purge DK 2026” udspiller sig i de røde zoner i København. Her er Nørrebro, Vesterbro, Bispebjerg og Vanløse udpeget som de farligste områder at opholde sig i.";
    document.querySelector("#requirement").textContent =
      "I disse kvarterer rapporteres der om omfattende uro, organiserede grupper og gentagne sammenstød i gaderne. Nørrebro og Vesterbro fungerer som samlingspunkter for større grupper, hvor situationer hurtigt eskalerer. Brande, plyndringer og voldelige opgør er blandt de hændelser, der præger natten. I Bispebjerg og Vanløse er billedet præget af mere spredt, men stadig alvorlig aktivitet. Mindre grupper bevæger sig gennem boligområder, og tilfældige hændelser skaber en konstant følelse af uforudsigelighed. Københavns Politi beskriver de røde zoner som områder, hvor kontrollen er minimal, og hvor risikoen for at blive involveret i farlige situationer er markant forhøjet.";
  }
});
