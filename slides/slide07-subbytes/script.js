window.__slideHTML = `
<div class="slide slide-sub">
    <h2 class="fade-in-up">Round Step 1</h2>
    <h1 class="fade-in-up delay-1">SubBytes</h1>
    <p class="fade-in-up delay-2">Each byte in the state is replaced using a fixed <span class="highlight">S-box</span> lookup table.<br>This creates <strong>non-linearity</strong> — making the cipher resistant to mathematical attacks.</p>
    <div class="sub-demo">
        <div class="sub-block fade-in-left delay-3">
            <div class="sub-label">Before</div>
            <div class="mini-grid before-grid" id="subBefore">
                <span>7F</span><span>08</span><span>CA</span><span>7A</span>
                <span>16</span><span>C7</span><span>D7</span><span>AA</span>
                <span>7C</span><span>A1</span><span>61</span><span>3C</span>
                <span>65</span><span>86</span><span>A9</span><span>1D</span>
            </div>
        </div>
        <div class="sbox-arrow fade-in delay-4">
            <div class="sbox-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3"/>
                    <text x="12" y="15" text-anchor="middle" font-size="7" fill="#a78bfa" stroke="none" font-weight="700">S</text>
                </svg>
            </div>
            <div class="sbox-text">S-Box<br>Lookup</div>
            <svg width="40" height="20" viewBox="0 0 40 20"><path d="M0 10h32m-6-6l6 6-6 6" fill="none" stroke="#a78bfa" stroke-width="2"/></svg>
        </div>
        <div class="sub-block fade-in-right delay-5">
            <div class="sub-label">After</div>
            <div class="mini-grid after-grid" id="subAfter">
                <span>D2</span><span>30</span><span>74</span><span>DA</span>
                <span>47</span><span>C6</span><span>0E</span><span>AC</span>
                <span>10</span><span>32</span><span>EF</span><span>EB</span>
                <span>4D</span><span>44</span><span>D3</span><span>A4</span>
            </div>
        </div>
    </div>
    <div class="sub-highlight-demo fade-in-up delay-6">
        <span class="hl-byte from">7F</span>
        <svg width="36" height="16" viewBox="0 0 36 16"><path d="M0 8h28m-5-5l5 5-5 5" fill="none" stroke="#a78bfa" stroke-width="2"/></svg>
        <span class="hl-byte to">D2</span>
        <span class="hl-note">Each byte is independently substituted</span>
    </div>
</div>
`;
