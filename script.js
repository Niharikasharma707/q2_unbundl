document.addEventListener("DOMContentLoaded", function () {
    const chocolates = [
        { name: "Chocolate A", price: 12 },
        { name: "Chocolate B", price: 31 },
        { name: "Chocolate C", price: 34 },
        { name: "Chocolate D", price: 62 },
        { name: "Chocolate E", price: 93 },
        { name: "Chocolate F", price: 40 },
    ];

    const customPack = document.querySelector(".customPack");
    const checkboxes = [];

    const chocolatesDiv = document.querySelector(".chocolates");
    chocolates.forEach((chocolate, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `chocolate${index}`;
        checkbox.value = chocolate.price;

        const label = document.createElement("label");
        label.htmlFor = `chocolate${index}`;
        label.innerText = `${chocolate.name} - $${chocolate.price}`;

        checkboxes.push(checkbox);

        chocolatesDiv.appendChild(checkbox);
        chocolatesDiv.appendChild(label);
    });

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateCustomPack);
    });

    function updateCustomPack() {
        const selectedChocolates = checkboxes.filter((checkbox) => checkbox.checked);
        let totalPrice = 0;

        customPack.innerHTML = "<h2>Your Custom Pack</h2>";

        if (selectedChocolates.length <= 8) {
            selectedChocolates.forEach((checkbox) => {
                const label = document.querySelector(`label[for=${checkbox.id}]`);
                customPack.innerHTML += label.innerText + "<br>";
                totalPrice += parseFloat(checkbox.value);
            });
            customPack.innerHTML += `<b>Total Price: $${totalPrice.toFixed(2)}</b>`;
        } else {
            customPack.innerHTML += "<b>Maximum 8 chocolates allowed!</b>";
        }
    }
});
