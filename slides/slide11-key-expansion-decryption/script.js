window.__slideHTML = `
<div class="slide slide-keydec">
    <h2 class="fade-in-up">Behind the Scenes</h2>
    <h1 class="fade-in-up delay-1">Key Expansion &amp; Decryption</h1>
    <div class="section-row">
        <div class="section-card fade-in-left delay-2">
            <div class="section-header">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                </svg>
                <h3>Key Expansion</h3>
            </div>
            <p>Before encryption begins, the original key is expanded into <strong>multiple round keys</strong> — one for each round plus the initial AddRoundKey.</p>
            <div class="key-fan">
                <div class="key-source">
                    <span>Original Key</span>
                </div>
                <div class="fan-arrows">
                    <div class="fan-line fl1"></div>
                    <div class="fan-line fl2"></div>
                    <div class="fan-line fl3"></div>
                    <div class="fan-line fl4"></div>
                    <div class="fan-line fl5"></div>
                </div>
                <div class="round-keys">
                    <span class="rk">RK₀</span>
                    <span class="rk">RK₁</span>
                    <span class="rk">RK₂</span>
                    <span class="rk">...</span>
                    <span class="rk">RK₁₀</span>
                </div>
            </div>
        </div>
        <div class="section-card fade-in-right delay-3">
            <div class="section-header">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="1 4 1 10 7 10"/>
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                </svg>
                <h3>Decryption</h3>
            </div>
            <p>Decryption uses the <strong>inverse operations</strong> applied in <strong>reverse order</strong> to recover the plaintext using the same key.</p>
            <div class="decrypt-flow">
                <div class="df-step">Ciphertext</div>
                <div class="df-arrow">
                    <svg width="24" height="16" viewBox="0 0 24 16"><path d="M0 8h18m-5-5l5 5-5 5" fill="none" stroke="#a78bfa" stroke-width="2"/></svg>
                </div>
                <div class="df-step inv">Inv ShiftRows</div>
                <div class="df-arrow">
                    <svg width="24" height="16" viewBox="0 0 24 16"><path d="M0 8h18m-5-5l5 5-5 5" fill="none" stroke="#a78bfa" stroke-width="2"/></svg>
                </div>
                <div class="df-step inv">Inv SubBytes</div>
                <div class="df-arrow">
                    <svg width="24" height="16" viewBox="0 0 24 16"><path d="M0 8h18m-5-5l5 5-5 5" fill="none" stroke="#a78bfa" stroke-width="2"/></svg>
                </div>
                <div class="df-step inv">Inv MixColumns</div>
                <div class="df-arrow">
                    <svg width="24" height="16" viewBox="0 0 24 16"><path d="M0 8h18m-5-5l5 5-5 5" fill="none" stroke="#a78bfa" stroke-width="2"/></svg>
                </div>
                <div class="df-step">Plaintext</div>
            </div>
        </div>
    </div>
</div>
`;
