window.__slideHTML = `
<div class="slide slide-rounds">
    <h2 class="fade-in-up">Number of Rounds</h2>
    <h1 class="fade-in-up delay-1">More Rounds = More Security</h1>
    <p class="fade-in-up delay-2">The number of encryption rounds depends on the key size.</p>
    <div class="rounds-chart">
        <div class="round-bar fade-in-up delay-3" data-rounds="10">
            <div class="bar-fill bar-128"></div>
            <div class="bar-info">
                <span class="bar-label">AES-128</span>
                <span class="bar-count">10 rounds</span>
            </div>
        </div>
        <div class="round-bar fade-in-up delay-4" data-rounds="12">
            <div class="bar-fill bar-192"></div>
            <div class="bar-info">
                <span class="bar-label">AES-192</span>
                <span class="bar-count">12 rounds</span>
            </div>
        </div>
        <div class="round-bar fade-in-up delay-5" data-rounds="14">
            <div class="bar-fill bar-256"></div>
            <div class="bar-info">
                <span class="bar-label">AES-256</span>
                <span class="bar-count">14 rounds</span>
            </div>
        </div>
    </div>
    <div class="rounds-note fade-in-up delay-6">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v5c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V7l-9-5z"/></svg>
        Each round applies a series of transformations that increase security.
    </div>
</div>
`;
