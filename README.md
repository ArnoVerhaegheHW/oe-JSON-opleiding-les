# Herhalingsoefening WFA: opleiding
## Doel
De gegevens van de opleiding inlezen, met de verschillende onderdelen en hun resp. modules.

De gegevens kunnen dan opgeroepen en bewerkt worden.

[Video met instructies](img/Opgave.mp4)

## Ophalen gegevens
De gegevens worden bij het opstarten ingelezen uit de json en in een variabele bewaard.

De onderdelen worden in de divNav getoond, met telkens hun naam, logo en aantal studiepunten.

## Ophalen modules
Bij een klik op een onderdeel worden de modules getoond in divShow. Bij elke module verschijnen
- de naam van de module
- het aantal studiepunten
- het semester
- de afkortingen van de lectoren, gescheiden door een koppelteken

## Editeren modules
Bij een klik op een module, wordt een formulier opgebouwd in divEdit en verschijnen de knoppen.

Bij een klik op de knop 'Toevoegen' wordt:
- het formulier leeggemaakt
- de cursor geplaatst in de modulenaam textbox
- bij de studiepunten 3 ingevuld
- een semester gekozen

Bij een klik op 'Verwijder' wordt de gekozen module verwijder.

De gegevens die door de gebruiker ingegeven/gewijzigd zijn, worden uitgelezen bij een klik op de knop 'Opslaan' en opgeslagen in de variabele met de opleiding. Voorzie zowel code om een bestaande module op te slaan als een nieuwe toe te voegen.

Na het verwijderen en opslaan worden de gegevens van de opleidingsonderdelen geüpdate en getoond.

