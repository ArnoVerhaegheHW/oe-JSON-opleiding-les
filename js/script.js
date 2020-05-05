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
