const GeefCheckboxen = (titel, keuzes, name, vertikaal = true) => {
      let doelDiv = document.createElement('div');
      doelDiv.innerHTML = `<h4>${titel}</h4>`;
      keuzes.forEach(keuze => {
            let htmlCheckBox = document.createElement('input');
            htmlCheckBox.type = 'checkbox';
            htmlCheckBox.name = name;
            htmlCheckBox.id = keuze;
            htmlCheckBox.value = keuze;
            doelDiv.appendChild(htmlCheckBox);
            doelDiv.innerHTML += `<span class="chkLabel">${keuze}</span>`;
            if (vertikaal) doelDiv.innerHTML += "<br />";
      });
      return doelDiv;
}

const ToonKeuzeCheckboxen = (aanTeVinken, checkBoxesName) => {
      MaakCheckBoxenLeeg(checkBoxesName);
      aanTeVinken.forEach(keuze => {
            let checkBox = document.getElementById(keuze);
            checkBox.checked = true;
      });
}

const MaakCheckBoxenLeeg = (checkBoxesName) => {
      let checkBoxes = document.getElementsByName(checkBoxesName);
      checkBoxes.forEach(checkBox => {
            checkBox.checked = false;
      });
}

const GeefGekozenValuesCheckBoxes = (name) => {
      let checkBoxen = document.getElementsByName(name);
      let gemaakteKeuzes = [];
      checkBoxen.forEach(checkbox => {
            if (checkbox.checked) gemaakteKeuzes.push(checkbox.value);
      });
      return gemaakteKeuzes;
}

const GeefRadioButtons = (titel, keuzes, name) => {
      let doelDiv = document.createElement('div');
      doelDiv.innerHTML = `<h4>${titel}</h4>`;
      for (let index = 0; index < keuzes.length; index++) {
            const keuze = keuzes[index];
            let htmlKeuzeRondje = `<input type="radio" name="${name}" value="${keuzes[index]}"/>${keuze}`;
            doelDiv.innerHTML += htmlKeuzeRondje;
      }
      return doelDiv;
}

const GeefIndexGekozenRadioButton = (name) => {
      let indexKeuze = -1;
      let radioButtons = document.getElementsByName(name);
      for (let index = 0; index < radioButtons.length; index++) {
            const optie = radioButtons[index];
            if (optie.checked) {
                  indexKeuze = index;
                  break;
            }
      }
      return indexKeuze;
}

const GeefValueGekozenRadioButton = (name) => {
      let waarde;
      let radioButtons = document.getElementsByName(name);
      for (let index = 0; index < radioButtons.length; index++) {
            const optie = radioButtons[index];
            if (optie.checked) {
                  waarde = optie.value;
                  break;
            }
      }
      return waarde;
}

const MarkeerRadioButton = (name, teMarkerenWaarde) => {
      let radioButtons = document.getElementsByName(name);
      for (let index = 0; index < radioButtons.length; index++) {
            const optie = radioButtons[index];
            if (optie.value == teMarkerenWaarde) {
                  optie.checked = true;
                  break;
            }
      }
}

const MaakInputOngedaan = (parentElement) => {
      let childrenOfParent = Array.from(parentElement.children);
      if (childrenOfParent.length > 0) {
            childrenOfParent.forEach(childElement => {
                  let inputType = childElement.type;
                  if (inputType == 'text' || inputType == 'number') {
                        childElement.value = "";
                  } else if (inputType == 'checkbox' || inputType == 'radio') {
                        childElement.checked = false;
                  }
            });
      }
      childrenOfParent.forEach(descendant => {
            MaakInputOngedaan(descendant);
      });
}

GeefInputMetLabel = (labelInhoud, input, classNames) => {
      let divInputPair = document.createElement('div');
      let label = document.createElement('label');
      label.labelFor = input.id;
      label.className = "lblLabelForInput";
      label.innerText = labelInhoud;
      divInputPair.appendChild(label);
      divInputPair.appendChild(input);
      divInputPair.className = classNames;
      return divInputPair;
}

GeefInputElement = (id, value, type, dataSetKey) => {
      let newInput = document.createElement('input');
      newInput.id = id;
      newInput.type = type;
      newInput.value = value;
      newInput.setAttribute("data-key", dataSetKey);
      return newInput;
}

GeefInvoerInput = () => {
      const inputs = Array.from(document.getElementsByTagName('input'));
      let ingevuldeGegevens = {};
      inputs.forEach(invoer => {
            let attributen = invoer.dataset;
            let type = invoer.type;
            let textbox = document.getElementById(invoer.id);
            switch (type) {
                  case "text":
                        ingevuldeGegevens[attributen.key] = textbox.value;
                        break;
                  case "number": 
                        ingevuldeGegevens[attributen.key] = isNaN(parseInt(textbox.value)) ?
                        parseFloat(textbox.value) : parseInt(textbox.value);
                        break;
                  default:
                        break;
            }
      });
      return ingevuldeGegevens;
}

