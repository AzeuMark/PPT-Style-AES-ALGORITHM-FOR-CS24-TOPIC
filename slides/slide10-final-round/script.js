window.__slideHTML = `
<div class="slide slide-final">
    <h2 class="fade-in-up">Final Round &amp; AddRoundKey</h2>
    <h1 class="fade-in-up delay-1">Completing the Encryption</h1>
    <p class="fade-in-up delay-2">In each round, the state is XORed with the round key after the other steps.<br>In the <strong>final round</strong>, the MixColumns step is <span class="highlight">skipped</span>.</p>
    <div class="flow-diagram fade-in-up delay-3">
        <div class="flow-step active">
            <div class="flow-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><text x="12" y="15" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="700">S</text></svg>
            </div>
            <span>SubBytes</span>
        </div>
        <div class="flow-arrow">
            <svg width="32" height="16" viewBox="0 0 32 16"><path d="M0 8h24m-5-5l5 5-5 5" fill="none" stroke="#60a5fa" stroke-width="2"/></svg>
        </div>
        <div class="flow-step active">
            <div class="flow-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </div>
            <span>ShiftRows</span>
        </div>
        <div class="flow-arrow">
            <svg width="32" height="16" viewBox="0 0 32 16"><path d="M0 8h24m-5-5l5 5-5 5" fill="none" stroke="#60a5fa" stroke-width="2"/></svg>
        </div>
        <div class="flow-step skipped">
            <div class="flow-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>
            </div>
            <span>MixColumns</span>
            <div class="skip-badge">SKIPPED</div>
            <div class="cross-line"></div>
        </div>
        <div class="flow-arrow">
            <svg width="32" height="16" viewBox="0 0 32 16"><path d="M0 8h24m-5-5l5 5-5 5" fill="none" stroke="#60a5fa" stroke-width="2"/></svg>
        </div>
        <div class="flow-step active final-step">
            <div class="flow-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>
            </div>
            <span>AddRoundKey</span>
        </div>
    </div>
    <div class="flow-arrow-down fade-in delay-4">
        <svg width="30" height="40" viewBox="0 0 30 40"><path d="M15 0v30m-6-6l6 6 6-6" fill="none" stroke="#34d399" stroke-width="2.5"/></svg>
    </div>
    <div class="cipher-result fade-in-up delay-5">
        <div class="cipher-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>128-bit Ciphertext</span>
        </div>
    </div>
</div>
`;
