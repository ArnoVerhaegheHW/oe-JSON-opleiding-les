function MaakKoppelingsCode() {
      let domElementenMetId = [];
      let bodyArray = document.getElementsByTagName("body");
      let jsTekst;
      GeefChildren(bodyArray[0], domElementenMetId);
      domElementenMetId.sort();
      //Sorteer domElementenMetId
      jsTekst = StelJsTekstSamen(domElementenMetId);
      console.log(jsTekst);
}

const GeefChildren = (parentElement, opslagArray) => {
      let childrenOfParent = Array.from(parentElement.children);
      if (childrenOfParent.length > 0) {
            childrenOfParent.forEach(childElement => {
                  if (childElement.id && !opslagArray.includes(childElement.id)) {
                        opslagArray.push(childElement.id);
                  }
            });
      }
      //Bij elk DOM-element gaan we na of er children zijn met een id
      //Een function terug oproepen vanuit zichzelf heet recursief programmeren  
      childrenOfParent.forEach(descendant => {
            GeefChildren(descendant, opslagArray);
      });
}

const StelJsTekstSamen = (domElementenMetId) => {
      let tekst = GeefDeclaraties(domElementenMetId) + "\n" +
            "window.addEventListener('load', Initieer);\n\n" +
            "function Initieer() {\n" +
            "\tKoppelElementen();\n" +
            "\tKoppelEvents();\n" +
            "\tVulStandaardwaarden();\n" +
            "};\n\n";
      tekst += GeefKoppelingen(domElementenMetId);
      tekst += GeefButtonEventKoppelingen(domElementenMetId);
      tekst += GeefStandaardWaarden(domElementenMetId);
      return tekst;
}

const GeefDeclaraties = (domIds) => {
      let varDeclaraties = "";
      if (domIds.length > 0) {
            let variabelen = [];
            if (domIds.length == 1) varDeclaraties = `var ${domIds[0]};`;
            else {
                  variabelen[0] = domIds[0];
                  for (let index = 1; index < domIds.length; index++) {
                        const id = domIds[index];
                        const vorigId = domIds[index - 1];
                        let variabele = domIds[index];
                        if (id.substr(0, 3) == vorigId.substr(0, 3)) {
                              variabelen.push(variabele);
                        } else {
                              varDeclaraties += `var ${variabelen.join(", ")};\n`;
                              variabelen = [];
                              variabelen[0] = id;
                        }
                  }
                  varDeclaraties += `var ${variabelen.join(", ")};\n`;
            }
      }
      return varDeclaraties;
}

const GeefButtonEventKoppelingen = (domIds) => {
      let koppelingen = "const KoppelEvents = () => {\n";
      if (domIds.length > 0) {
            domIds.forEach(id => {
                  let prefix = id.substr(0,3);
                  if (prefix == "btn") {
                        let koppeling = `${id}.addEventListener('click', () => {
                        
\t});\n`; 
                        koppelingen += '\t' + koppeling;
                  }
            });
            koppelingen += "}\n\n";
      }
      return koppelingen;
}

const GeefStandaardWaarden = (domIds) => {
      let stdWaarden = "const VulStandaardwaarden = () => {\n";
      if (domIds.length > 0) {
            domIds.forEach(id => {
                  let prefix = id.substr(0,3);
                  let waardeBepaling
                  switch (prefix) {
                        case "txt":
                              waardeBepaling = `${id}.value = "";\n`;
                              stdWaarden += '\t' + waardeBepaling;
                              break;
                        case "slc":
                              waardeBepaling = `${id}.selectedIndex = "0";\n`;
                              stdWaarden += '\t' + waardeBepaling;
                              break;                  
                        default:
                              break;
                  }
            });
            stdWaarden+= "}\n\n";
      }
      return stdWaarden;
}

const GeefKoppelingen = (domIds) => {
      let koppelingen = "const KoppelElementen = () => {\n";
      if (domIds.length > 0) {
            for (let index = 0; index < domIds.length; index++) {
                  let koppeling = GeefDomKoppeling(domIds[index]);
                  koppelingen += koppeling + "\n";
            }
            koppelingen += "}\n\n";
      }
      return koppelingen;
}

const GeefVulStandaardwaarden = (domIds) => {
      let stdWaarden = "const VulStandaardwaarden = () =>  {\n";

      return stdWaarden;
}

const GeefDomKoppeling = (id) => {
      return `${id} = document.getElementById("${id}");\n`
}


/*
function GeefChildren
Op basis van een doorgegeven DOM-element en een array waarin de geselecteerde DOM-elementen opgeslagen moeten worden,
voert deze function de volgende acties uit:

de id's van de children van het DOM-element, opslaan in de opgegeven array,
voor zover ze er nog niet in voorkomen.
In dat laatste geval volgt er een boodschap in de console.
bij deze children worden via recursieve programmatie ook de id's van eventuele children opgehaald

------------------------------

Hiervoor gebruiken we de volgende functions:

GeefDeclaraties
Maakt een declaratie van een globale variabele aan voor elk DOM-element
met een id op basis van de array die als parameter meegegeven wordt.
De declaraties zijn verzameld per type van DOM-element op basis van de prefixen die uit 3 karakters bestaan.

------------------------------

GeefKoppelingen
Maakt de function KoppelElementen aan op basis van de array die als parameter meegegeven wordt.

------------------------------

GeefButtonEventKoppelingen
Maakt de function KoppelEvents aan op basis van de array die als parameter meegegeven wordt.
Voor elke button wordt een event listener voor het click-event aangemaakt, met een call naar VoerFunctionUit.

------------------------------

VulStandaardwaarden
Maakt de function VulStandaardwaarden aan op basis van de array die als parameter meegegeven wordt.

Voor een id met prefix 'txt' is de standaard een lege string
Voor een id met prefix 'slc' is de standaard een nul

*/