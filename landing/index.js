document.addEventListener("DOMContentLoaded", (event) => {
    const groups = (window.location.hash || window.location.pathname).match(/\/markets\/(?<chainId>\d*)\/(?<marketId>0x[0-9a-fA-F]{40})/)?.groups
    if (typeof groups !== 'undefined') {
        window.location.href = `https://app.seer.pm/markets/${groups.chainId}/${groups.marketId}`;
    }
});
const closeBtn = document.querySelector('.btn-close')
const announcement = document.querySelector('.announcement')
function hideAnnouncement() {
    announcement.style.display = 'none'
}
closeBtn.addEventListener('click', hideAnnouncement)
const texts = [
    {
        title: '“Seer, will Donald Trump pardon or commute the sentence of Ross Ulbricht during his first month in office?”',
        subtitle: 'Prediction markets estimate a 70.2% chance that Donald Trump will pardon Ross Ulbricht.'
    },
    {
        title: '"Seer, will Alice Weidel become the next Chancellor of Germany after the February 2025 election?"',
        subtitle: 'Prediction markets estimate a 95.1% chance that Alice Weidel will not become Chancellor.'
    },
    {
        title: '“Seer, how many people will be deported (removals, returns & expulsions) from the United States during 2025? [Individuals]”',
        subtitle: 'Market Estimate: 1,200,000 Individuals'
    }
];

const container = document.getElementById('textContainer');
let currentIndex = 0;

function updateText() {
    // Fade out
    container.style.opacity = 0;

    // After fade out, update content and fade in
    setTimeout(() => {
        const currentText = texts[currentIndex];
        container.innerHTML = `
                <p class="text-2xl text-linear">${currentText.title}</p>
                <p class="text-base text-purple-2">${currentText.subtitle}</p>
            `;

        // Trigger reflow to ensure opacity transition works
        container.offsetHeight;

        container.style.opacity = 1;

        // Cycle to next text
        currentIndex = (currentIndex + 1) % texts.length;
    }, 500); // matches fade out duration
}

// Start initial cycle after first interval
updateText();
setInterval(updateText, 4000); // 4 seconds per text (3s display + 1s transition)