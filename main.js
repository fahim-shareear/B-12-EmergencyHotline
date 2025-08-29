document.addEventListener('DOMContentLoaded', () => {
    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const heartCountElement = document.getElementById('count');
    const coinCountElement = document.getElementById('coin');
    const copyCountElement = document.getElementById('copy');
    const clearHistoryButton = document.querySelector('.history button');
    const historySection = document.querySelector('.history');

    const updateCounters = () => {
        heartCountElement.textContent = heartCount;
        coinCountElement.textContent = coinCount;
        copyCountElement.textContent = copyCount;
    };

    document.querySelectorAll('.service_card .fa-heart').forEach(heart => {
        heart.addEventListener('click', () => {
            heartCount++;
            updateCounters();
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
        });
    });

    document.querySelectorAll('.service_card .service_btn button:first-child').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service_card');
            const hotlineNumber = card.querySelector('.servicetitle h1').textContent;
            
            navigator.clipboard.writeText(hotlineNumber)
                .then(() => {
                    copyCount++;
                    updateCounters();
                    alert(`Hotline number ${hotlineNumber} copied to clipboard!`);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    alert('Failed to copy number. Please try again.');
                });
        });
    });

    document.querySelectorAll('.service_card .service_btn button:last-child').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service_card');
            const serviceName = card.querySelector('.servicetitle h2').textContent;
            const hotlineNumber = card.querySelector('.servicetitle h1').textContent;

            if (coinCount < 20) {
                alert('Insufficient coins! You need at least 20 coins to make a call.');
                return;
            }

            coinCount -= 20;
            updateCounters();

            alert(`Calling ${serviceName} at ${hotlineNumber}`);

            const now = new Date();
            const timeString = now.toLocaleTimeString();

            const historyItem = document.createElement('div');
            historyItem.className = 'p-3 border-b history-item';
            historyItem.innerHTML = `
                <p class="font-[500]">${serviceName}</p>
                <p class="text-[14px]">${hotlineNumber}</p>
                <p class="text-[12px] text-gray-500">Called at ${timeString}</p>
            `;
            historySection.appendChild(historyItem);
        });
    });

    clearHistoryButton.addEventListener('click', () => {
        const historyItems = historySection.querySelectorAll('.history-item');
        historyItems.forEach(item => item.remove());
    });

    updateCounters();
});