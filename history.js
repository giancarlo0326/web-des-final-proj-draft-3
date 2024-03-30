document.addEventListener('DOMContentLoaded', function() {
    const historyItemsWrapper = document.getElementById('history-items-wrapper');
    const clearHistoryBtn = document.getElementById('clear-history');
    const totalHistoryElement = document.getElementById('total-history');

    function addToHistory(item) {
        let historyItems = JSON.parse(localStorage.getItem('historyItems')) || [];
        historyItems.push(item);
        localStorage.setItem('historyItems', JSON.stringify(historyItems));
    }

    function displayHistoryItems() {
        const historyItems = JSON.parse(localStorage.getItem('historyItems')) || [];
        let totalAmount = 0;
        historyItems.forEach(item => {
            const totalPrice = (parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity).toFixed(2);
            totalAmount += parseFloat(totalPrice);
            const itemHTML = `
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img src="${item.imageUrl}" class="img-fluid rounded-start" alt="${item.name}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">Total Price: ₱${totalPrice}</p>
                                    <p class="card-text">Quantity: ${item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            historyItemsWrapper.innerHTML += itemHTML;
        });
        totalHistoryElement.textContent = `Total: ₱${totalAmount.toFixed(2)}`;
    }

    function clearHistory() {
        localStorage.removeItem('historyItems');
        historyItemsWrapper.innerHTML = '';
        totalHistoryElement.textContent = 'Total: ₱0.00';
    }

    displayHistoryItems();

    clearHistoryBtn.addEventListener('click', function() {
        clearHistory();
    });
});
