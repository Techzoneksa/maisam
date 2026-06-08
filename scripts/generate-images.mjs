import { writeFileSync, mkdirSync } from "fs";

const PINK = "#D82394";
const TURQUOISE = "#1CB1B9";
const LIGHT_PINK = "#ead7e9";
const LIGHT_TURQ = "#7cd0d4";

function svg(width, height, content) {
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${content}</svg>`;
}

function grad(id, c1, c2) {
  return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient>`;
}

function circle(cx, cy, r, fill) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
}

function rect(x, y, w, h, rx, fill) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>`;
}

function path(d, fill) {
  return `<path d="${d}" fill="${fill}"/>`;
}

function stethoscope(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <path d="M30 10v20a20 20 0 0 0 40 0v-4" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="30" cy="10" r="6" fill="${c}"/>
    <circle cx="70" cy="8" r="9" fill="none" stroke="${c}" stroke-width="3"/>
    <path d="M70 17v6a12 12 0 0 0 24 0v-6" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="94" cy="8" r="9" fill="none" stroke="${c}" stroke-width="3"/>
  </g>`;
}

function tooth(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <path d="M30 15c0-8 6-12 15-12s15 4 15 12c0 6-3 18-6 28-2 6-4 10-9 10s-7-4-9-10c-3-10-6-22-6-28z" fill="none" stroke="${c}" stroke-width="3"/>
    <path d="M33 16c0-4 4-7 12-7s12 3 12 7" fill="none" stroke="${c}" stroke-width="2" opacity="0.4"/>
  </g>`;
}

function heart(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <path d="M45 55C20 35 5 22 5 14c0-8 6-14 14-14 5 0 10 3 13 6l13 13 13-13c3-3 8-6 13-6 8 0 14 6 14 14 0 8-15 21-40 41z" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>
  </g>`;
}

function userIcon(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <circle cx="30" cy="18" r="12" fill="none" stroke="${c}" stroke-width="3"/>
    <path d="M8 56c0-14 10-24 22-24s22 10 22 24" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
}

function building(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <rect x="10" y="20" width="40" height="40" rx="2" fill="none" stroke="${c}" stroke-width="2.5"/>
    <rect x="18" y="8" width="24" height="14" rx="2" fill="none" stroke="${c}" stroke-width="2.5"/>
    <line x1="22" y1="30" x2="28" y2="30" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <line x1="22" y1="38" x2="28" y2="38" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <line x1="22" y1="46" x2="28" y2="46" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <line x1="32" y1="30" x2="38" y2="30" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <line x1="32" y1="38" x2="38" y2="38" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
}

function sparkles(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <path d="M30 8l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="none" stroke="${c}" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="46" cy="20" r="3" fill="${c}"/>
    <circle cx="52" cy="44" r="2.5" fill="${c}"/>
    <circle cx="14" cy="46" r="2" fill="${c}"/>
  </g>`;
}

function lab(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <path d="M22 52l12-20V8h12v24l12 20" fill="none" stroke="${c}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    <line x1="18" y1="52" x2="42" y2="52" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="28" y1="28" x2="32" y2="28" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <line x1="28" y1="36" x2="32" y2="36" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
}

function syringe(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <rect x="26" y="4" width="8" height="24" rx="2" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M30 28v12c0 6-4 12-10 12h-4" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="38" y1="8" x2="44" y2="2" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="34" y1="12" x2="40" y2="6" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="36" y1="4" x2="42" y2="10" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
  </g>`;
}

function eye(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <path d="M8 30s8-16 22-16 22 16 22 16-8 16-22 16-22-16-22-16z" fill="none" stroke="${c}" stroke-width="2.5"/>
    <circle cx="30" cy="30" r="5" fill="none" stroke="${c}" stroke-width="2"/>
  </g>`;
}

function tag(x, y, s, c) {
  const sc = s / 60;
  return `<g transform="translate(${x},${y}) scale(${sc})">
    <path d="M10 20v32l18-10 18 10V20" fill="none" stroke="${c}" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="18" cy="28" r="3" fill="${c}" opacity="0.5"/>
  </g>`;
}

// ============ GENERATORS ============

const width = 400;
const height = 400;

function generate(filename, gradient1, gradient2, icon, label, labelColor) {
  const g = grad("g", gradient1, gradient2);
  const content = `
    <defs>${g}
      <radialGradient id="spot" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.20)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)" rx="0"/>
    <rect width="${width}" height="${height}" fill="url(#spot)" rx="0"/>
    ${icon}
    <text x="200" y="${height - 50}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="${labelColor}" opacity="0.7">${label}</text>
  `;
  writeFileSync(`public/images/${filename}.svg`, svg(width, height, content));
  console.log(`Created: public/images/${filename}.svg`);
}

function generateDoctor(filename, gradient1, gradient2, iconY) {
  const g = grad("g", gradient1, gradient2);
  const content = `
    <defs>${g}
      <radialGradient id="glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.4)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)"/>
    <circle cx="200" cy="160" r="80" fill="url(#glow)"/>
    <circle cx="200" cy="140" r="50" fill="rgba(255,255,255,0.85)"/>
    <circle cx="200" cy="125" r="18" fill="${gradient1}" opacity="0.3"/>
    <circle cx="200" cy="125" r="12" fill="${gradient1}" opacity="0.6"/>
    <rect x="140" y="${iconY}" width="120" height="14" rx="7" fill="rgba(255,255,255,0.35)"/>
    <rect x="160" y="${iconY + 22}" width="80" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
    <text x="200" y="${height - 40}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)">Doctor</text>
  `;
  writeFileSync(`public/images/doctors/${filename}.svg`, svg(width, height, content));
  console.log(`Created: public/images/doctors/${filename}.svg`);
}

// ============ DOCTORS ============
generateDoctor("doctor-family-female", "#E8A0BF", PINK, 220);
generateDoctor("doctor-dentist-male", "#7cd0d4", TURQUOISE, 220);
generateDoctor("doctor-dermatology-female", "#E8A0BF", "#D82394", 220);
generateDoctor("doctor-pediatrics-male", TURQUOISE, "#0d8a91", 220);
generateDoctor("doctor-family-2-female", "#d4a0e8", "#9b59b6", 220);
generateDoctor("doctor-general-male", TURQUOISE, "#0a7a80", 220);

// ============ SERVICES ============
generate("services/family-medicine", LIGHT_PINK, PINK, stethoscope(140, 100, 160, "white"), "Family Medicine", "white");
generate("services/dentistry", "#b8e6e8", TURQUOISE, tooth(150, 110, 140, "white"), "Dentistry", "white");
generate("services/dermatology", "#f0d0e8", "#c03982", eye(140, 110, 150, "white"), "Dermatology & Aesthetics", "white");
generate("services/laser", "#d8a0d0", "#8e44ad", sparkles(140, 100, 160, "white"), "Laser", "white");
generate("services/pediatrics", TURQUOISE, "#0d8a91", heart(140, 100, 160, "white"), "Pediatrics", "white");
generate("services/lab-tests", "#c0d8e8", "#2980b9", lab(140, 100, 160, "white"), "Lab Tests", "white");
generate("services/general-consultation", "#d0e8e8", "#16a085", userIcon(140, 100, 160, "white"), "General Consultation", "white");
generate("services/vaccination", "#e8c0e0", "#8e44ad", syringe(140, 100, 160, "white"), "Vaccination", "white");

// ============ OFFERS ============
function generateOffer(filename, c1, c2, icon, label) {
  const g = grad("g", c1, c2);
  const content = `
    <defs>${g}
      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.12)"/>
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)"/>
    <rect width="${width}" height="${height}" fill="url(#dots)"/>
    <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    ${icon}
    <text x="200" y="${height - 50}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" font-weight="800" fill="white">${label}</text>
    <rect x="140" y="${height - 30}" width="120" height="20" rx="10" fill="rgba(255,255,255,0.15)"/>
  `;
  writeFileSync(`public/images/offers/${filename}.svg`, svg(width, height, content));
  console.log(`Created: public/images/offers/${filename}.svg`);
}

generateOffer("family-checkup", PINK, "#b01a73", heart(140, 80, 160, "white"), "Family Checkup");
generateOffer("dental-cleaning", TURQUOISE, "#0d8a91", tooth(150, 90, 140, "white"), "Dental Cleaning");
generateOffer("skin-consultation", "#c03982", PINK, eye(140, 90, 150, "white"), "Skin Consultation");
generateOffer("laser-session", "#8e44ad", "#c03982", sparkles(140, 80, 160, "white"), "Laser Session");
generateOffer("health-package", "#0d8a91", "#087780", tag(140, 90, 160, "white"), "Health Package");

// ============ BRANCHES ============
function generateBranch(filename, c1, c2, label) {
  const g = grad("g", c1, c2);
  const content = `
    <defs>${g}
      <radialGradient id="sun" cx="70%" cy="20%" r="40%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)"/>
    <rect width="${width}" height="${height}" fill="url(#sun)"/>
    ${building(140, 70, 160, "white")}
    <text x="200" y="${height - 50}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="white">${label}</text>
  `;
  writeFileSync(`public/images/branches/${filename}.svg`, svg(width, height, content));
  console.log(`Created: public/images/branches/${filename}.svg`);
}

generateBranch("branch-salamah", TURQUOISE, "#0d8a91", "Salamah Branch");
generateBranch("branch-safa", LIGHT_PINK, PINK, "Safa Branch");
generateBranch("branch-muhammadiyah", "#0d8a91", "#087780", "Muhammadiyah Branch");
generateBranch("branch-main", PINK, "#b01a73", "Main Branch");

// ============ BANNERS ============
function generateBanner(filename, c1, c2, icon, label) {
  const bw = 800;
  const bh = 400;
  const g = grad("g", c1, c2);
  const content = `
    <defs>${g}
      <radialGradient id="bglow" cx="60%" cy="40%" r="60%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.18)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="${bw}" height="${bh}" fill="url(#g)"/>
    <rect width="${bw}" height="${bh}" fill="url(#bglow)"/>
    <circle cx="${bw - 80}" cy="80" r="120" fill="rgba(255,255,255,0.06)"/>
    <circle cx="${bw + 40}" cy="${bh + 40}" r="180" fill="rgba(255,255,255,0.05)"/>
    ${icon}
    <text x="80" y="180" font-family="system-ui,sans-serif" font-size="38" font-weight="800" fill="white">${label}</text>
    <rect x="80" y="210" width="140" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
    <rect x="80" y="230" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
  `;
  writeFileSync(`public/images/banners/${filename}.svg`, svg(bw, bh, content));
  console.log(`Created: public/images/banners/${filename}.svg`);
}

generateBanner("hero-family-clinic", PINK, "#b01a73", heart(580, 100, 200, "rgba(255,255,255,0.2)"), "Maisam Family Clinic");
generateBanner("hero-services", TURQUOISE, "#0d8a91", stethoscope(580, 100, 200, "rgba(255,255,255,0.2)"), "Our Services");
generateBanner("hero-payment", "#0d8a91", "#087780", tag(580, 100, 200, "rgba(255,255,255,0.2)"), "Payment Options");

// ============ UI ============
function generateUI(filename, c1, c2, icon, label) {
  const uw = 400;
  const uh = 200;
  const g = grad("g", c1, c2);
  const content = `
    <defs>${g}
      <radialGradient id="uglow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.15)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="${uw}" height="${uh}" fill="url(#g)" rx="16"/>
    <rect width="${uw}" height="${uh}" fill="url(#uglow)" rx="16"/>
    ${icon}
    <text x="${uw / 2}" y="${uh - 40}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="white">${label}</text>
  `;
  writeFileSync(`public/images/ui/${filename}.svg`, svg(uw, uh, content));
  console.log(`Created: public/images/ui/${filename}.svg`);
}

generateUI("payment-banner", TURQUOISE, "#0d8a91", tag(150, 30, 100, "white"), "Flexible Payment");
generateUI("cta-banner", PINK, "#b01a73", heart(150, 25, 100, "white"), "Book Now");

console.log("\n✅ All images generated successfully!");
