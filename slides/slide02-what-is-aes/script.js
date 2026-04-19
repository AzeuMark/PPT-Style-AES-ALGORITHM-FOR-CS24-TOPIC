window.__slideHTML = `
<div class="slide slide-what">
    <h2 class="fade-in-up">What is AES?</h2>
    <h1 class="fade-in-up delay-1">Advanced Encryption Standard</h1>
    <div class="info-cards">
        <div class="card fade-in-up delay-2">
            <div class="card-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
            </div>
            <div class="card-title">Symmetric Block Cipher</div>
            <div class="card-desc">Uses the <strong>same secret key</strong> for both encryption and decryption</div>
        </div>
        <div class="card fade-in-up delay-3">
            <div class="card-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <line x1="12" y1="4" x2="12" y2="20"/>
                </svg>
            </div>
            <div class="card-title">Fixed 128-bit Blocks</div>
            <div class="card-desc">Processes data in blocks of <strong>16 bytes</strong> at a time</div>
        </div>
        <div class="card fade-in-up delay-4">
            <div class="card-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                </svg>
            </div>
            <div class="card-title">One Key, Two Operations</div>
            <div class="card-desc">The same key <strong>locks</strong> and <strong>unlocks</strong> the data</div>
        </div>
    </div>
    <div class="diagram fade-in delay-5">
        <div class="diagram-box plain">Plaintext</div>
        <div class="diagram-arrow">
            <svg width="40" height="20" viewBox="0 0 40 20"><path d="M0 10h32m-6-6l6 6-6 6" fill="none" stroke="#60a5fa" stroke-width="2"/></svg>
        </div>
        <div class="diagram-box aes-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            AES
        </div>
        <div class="diagram-arrow">
            <svg width="40" height="20" viewBox="0 0 40 20"><path d="M0 10h32m-6-6l6 6-6 6" fill="none" stroke="#60a5fa" stroke-width="2"/></svg>
        </div>
        <div class="diagram-box cipher">Ciphertext</div>
        <div class="diagram-key">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
            Secret Key
        </div>
    </div>
</div>
`;
