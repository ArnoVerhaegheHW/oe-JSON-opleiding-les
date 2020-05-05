"use strict";

const RdbSemesterNaam = 'rdbSemester';
const ChkLectorenNaam = 'chkLectoren';

var opleiding;

var btnAdd, btnDelete, btnSave;
var divButtons, divContainer, divEdit, divModus, divNav, divShow;

window.addEventListener('load', Initieer);

function Initieer() {
	KoppelElementen();
      KoppelEvents();
      LeesJSON();
      GeefStartSituatie();
};

const GeefStartSituatie = () => {
      divShow.classList.add('hidden');
      divEdit.classList.add('hidden');
      divButtons.classList.add('hidden');
      divNav.innerHTML = "";
}

const LeesJSON = () => {
      let pad = 'js/opleiding.json';
      (async () => {
            opleiding = await(GetJSON(pad));
            console.log(opleiding);
            ToonOpleiding();
      })()
}

const ToonOpleiding = () => {
      for (const key in opleiding) {
            MaakOnderdeelNav(key);
      }
}

const MaakOnderdeelNav = (onderdeelNaam) => {
      let onderdeelInfo = opleiding[onderdeelNaam];
      let totaalAantalStudiepunten = GeefTotaalAantalStudiePunten(onderdeelInfo);
      let logo = `<img src="img/${onderdeelInfo.Pic}" alt="logo ${onderdeelNaam}" width="100px" class="logo"/>`;
      let figNavBulb = document.createElement('figure');
      figNavBulb.innerHTML =`<h2>${onderdeelNaam}</h2>`;
      figNavBulb.innerHTML += logo;
      figNavBulb.innerHTML += `<span class="spnTotaalStudiepunten">Studiepunten: ${totaalAantalStudiepunten}</span>`;
      divNav.appendChild(figNavBulb);
}

const GeefTotaalAantalStudiePunten = (onderdeelInfo) => {
      let modules = onderdeelInfo.Modules;
      let totaal = 0;
      modules.forEach(module => {
            let studiepunten = module.Studiepunten;
            totaal += studiepunten;
      });
      return totaal;
}

const KoppelElementen = () => {
btnAdd = document.getElementById("btnAdd");

btnDelete = document.getElementById("btnDelete");

btnSave = document.getElementById("btnSave");

divButtons = document.getElementById("divButtons");

divContainer = document.getElementById("divContainer");

divEdit = document.getElementById("divEdit");

divModus = document.getElementById("divModus");

divNav = document.getElementById("divNav");

divShow = document.getElementById("divShow");

}

const KoppelEvents = () => {
	btnAdd.addEventListener('click', () => {
                        
	});
	btnDelete.addEventListener('click', () => {
                        
	});
	btnSave.addEventListener('click', () => {
                        
	});
}
