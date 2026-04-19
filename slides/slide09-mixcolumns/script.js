window.__slideHTML = `
<div class="slide slide-mix">
    <h2 class="fade-in-up">Round Step 3</h2>
    <h1 class="fade-in-up delay-1">MixColumns</h1>
    <p class="fade-in-up delay-2">Each column is mixed using <span class="highlight">matrix multiplication</span> in a finite field.<br>This provides <strong>diffusion</strong> — spreading influence of each byte across the column.</p>
    <div class="mix-demo fade-in-up delay-3">
        <div class="mix-grid" id="mixGrid">
            <div class="mix-col" id="col0">
                <span class="mcell">D2</span>
                <span class="mcell">C6</span>
                <span class="mcell">EF</span>
                <span class="mcell">A4</span>
            </div>
            <div class="mix-col" id="col1">
                <span class="mcell">30</span>
                <span class="mcell">0E</span>
                <span class="mcell">EB</span>
                <span class="mcell">4D</span>
            </div>
            <div class="mix-col" id="col2">
                <span class="mcell">74</span>
                <span class="mcell">AC</span>
                <span class="mcell">10</span>
                <span class="mcell">44</span>
            </div>
            <div class="mix-col" id="col3">
                <span class="mcell">DA</span>
                <span class="mcell">47</span>
                <span class="mcell">32</span>
                <span class="mcell">D3</span>
            </div>
        </div>
    </div>
    <div class="mix-info fade-in-up delay-5">
        <div class="mix-card">
            <div class="mix-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z"/>
                </svg>
            </div>
            <span>Fixed matrix is multiplied with each column</span>
        </div>
        <div class="mix-card">
            <div class="mix-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 3c2 4 2 8 0 12M12 3c-2 4-2 8 0 12M3 12h18"/>
                </svg>
            </div>
            <span>Operations happen in Galois Field GF(2⁸)</span>
        </div>
        <div class="mix-card">
            <div class="mix-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
                </svg>
            </div>
            <span>Every output byte depends on all 4 input bytes</span>
        </div>
    </div>
</div>
`;
