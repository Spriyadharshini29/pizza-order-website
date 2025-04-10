document.addEventListener("DOMContentLoaded", () => {
    const sizeSelect = document.getElementById("pizza-size");
    const toppingCheckboxes = document.querySelectorAll(".topping");
    const quantityInput = document.getElementById("quantity");
    const totalDisplay = document.getElementById("total-price");
    const orderButton = document.getElementById("order-button");

    const basePrices = {
        small: 200,
        medium: 300,
        large: 400
    };

    const toppingPrice = 50;

    function calculateTotal() {
        const size = sizeSelect.value;
        const quantity = parseInt(quantityInput.value) || 1;
        const selectedToppings = Array.from(toppingCheckboxes).filter(cb => cb.checked);
        const toppingsCost = selectedToppings.length * toppingPrice;

        const total = (basePrices[size] + toppingsCost) * quantity;
        totalDisplay.textContent = `Total: ₹${total}`;
    }

    sizeSelect.addEventListener("change", calculateTotal);
    toppingCheckboxes.forEach(cb => cb.addEventListener("change", calculateTotal));
    quantityInput.addEventListener("input", calculateTotal);

    orderButton.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Thank you for your order!");
    });

    calculateTotal(); // Initial call
});
