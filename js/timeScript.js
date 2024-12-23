const getTime = () => new Date().toTimeString()
const getFormattedTime = () => console.log(`The time is ${getTime()}`)
function textfeldAendern() {
    // Das Textfeld per ID auswählen und den Wert ändern
    let temp = Number(document.getElementById("specificTextField").textContent);
    temp++;
    document.getElementById("specificTextField").textContent = temp;
}