document.addEventListener ("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const spancito = document.getElementById("spancito");


    input.addEventListener ("keyup",() => {
        let value = input.value;
        spancito.textContent = value.length;

        if(value.length < 5 || value.length > 20){
            spancito.style.color = "red";
            spancito.style.background = "blue";
        }

        else{
            spancito.style.color = "black";
            spancito.style.background = "blue";
        }
    });
});