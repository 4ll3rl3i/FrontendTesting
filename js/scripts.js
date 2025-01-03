const getTime = () => new Date().toTimeString()
const getFormattedTime = () => console.log(`The time is ${getTime()}`)
function textfeldAendern() {
    // Das Textfeld per ID auswählen und den Wert ändern
    let temp = Number(document.getElementById("specificTextField").textContent);
    temp++;
    document.getElementById("specificTextField").textContent = temp;
}

let champs;

async function initializeChamps() {
    champs = await getAllChampsJSON();
}
async function getAllChampsJSON() {
    let championData = await fetch("https://ddragon.leagueoflegends.com/cdn/14.22.1/data/en_US/champion.json")
    let data = await championData.json()
    return data
}
async function getAllChamps() {
    console.log(Object.keys(champs.data).length)
}
async function getRandomChampion() {
    let randomInt = Math.floor(Math.random() * Object.keys(champs.data).length)
    document.getElementById("championTextField").textContent = "Champion: " + champs["data"][Object.keys(champs.data)[randomInt]]["name"];
}
function clearSearch() {
    addToTable(document.getElementById("siteSearch").value)
    document.getElementById("siteSearch").value = ""
}
function autocomplete() {
    const suggestionsArray = Object.keys(champs.data)
    let datalist = document.getElementById("suggestions")
    suggestionsArray.forEach(suggestion => {
        const option = document.createElement('option');
        option.value = suggestion;
        datalist.appendChild(option);
    });
}
function addToTable(champion) {
    const table = document.getElementById('championTable').getElementsByTagName('tbody')[0]
    const newRow = table.insertRow()
    const nameCell = newRow.insertCell(0)
    nameCell.textContent = champion
}
initializeChamps().then(() => {
    autocomplete();
});
