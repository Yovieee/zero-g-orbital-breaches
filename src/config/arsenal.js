/**
 * Phase 3 Economy & Weapon Arsenal Definitions
 * Balances kinetic stopping power against station hull integrity.
 */
export const WEAPONS = {
  pistol: {
    id: 'pistol', name: 'Flechette Pistol', cost: 0, clipSize: 16, reserveMax: 64,
    damage: 28, headshotMult: 2.6, fireRateMs: 190, recoilImpulse: 0.35,
    spreadBase: 0.008, breachesGlass: false, killReward: 300, color: 0x38bdf8,
    desc: 'Standard hull-safe low-velocity sidearm. Zero risk of cracking station viewports.'
  },
  smg: {
    id: 'smg', name: 'Volt-9 Stun SMG', cost: 1250, clipSize: 30, reserveMax: 90,
    damage: 22, headshotMult: 2.0, fireRateMs: 95, recoilImpulse: 0.55,
    spreadBase: 0.018, breachesGlass: false, killReward: 600, color: 0x22d3ee,
    desc: 'High-ROF electro-flechette SMG. Hull-safe with double ($600) kill reward.'
  },
  shotgun: {
    id: 'shotgun', name: 'Mag-Scatter Breach', cost: 1800, clipSize: 8, reserveMax: 32,
    damage: 18, pellets: 7, headshotMult: 1.8, fireRateMs: 680, recoilImpulse: 4.2,
    spreadBase: 0.055, breachesGlass: true, killReward: 900, color: 0xf97316,
    desc: 'Heavy magnetic flak scattergun. Strong Newtonian pushback in 0G; shatters glass.'
  },
  rifle: {
    id: 'rifle', name: 'AR-77 Rail Rifle', cost: 2900, clipSize: 30, reserveMax: 90,
    damage: 36, headshotMult: 3.1, fireRateMs: 115, recoilImpulse: 1.45,
    spreadBase: 0.011, breachesGlass: true, killReward: 300, color: 0xf43f5e,
    desc: 'High-velocity ferromagnetic rifle. One-tap headshot lethality; shatters viewports.'
  },
  sniper: {
    id: 'sniper', name: 'HV-Lance Gauss', cost: 4750, clipSize: 5, reserveMax: 20,
    damage: 115, headshotMult: 3.0, fireRateMs: 1150, recoilImpulse: 6.5,
    spreadBase: 0.002, breachesGlass: true, killReward: 100, color: 0xa855f7,
    desc: 'Hyper-velocity rail lance. Instant 1-shot lethality; immediately breaches hull glass.'
  }
};

export const UTILITIES = {
  foam: { id: 'foam', name: 'Foam Canister', key: '4', cost: 300, max: 2, desc: 'Expands into carvable sealant foam spheres; blocks LoS & plugs hull breaches.' },
  strobe: { id: 'strobe', name: 'Strobe Mag-Pulse', key: '5', cost: 200, max: 2, desc: 'Blinds optic visors and scrambles enemy HUD radar for 2.5 seconds.' },
  plasma: { id: 'plasma', name: 'Plasma Arc Trap', key: '6', cost: 400, max: 1, desc: 'Fills a zero-G corridor with superheated ionized plasma area denial.' },
  breach: { id: 'breach', name: 'Micro-Breach Charge', key: '7', cost: 300, max: 1, desc: 'Concussive blast that damages enemies and shatters nearby viewport glass.' }
};
