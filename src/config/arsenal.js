/**
 * Phase 3 Economy & Weapon Arsenal Definitions
 * Balances kinetic stopping power against station hull integrity.
 */
export const WEAPONS = {
  pistol: { id: 'pistol', name: 'Flechette Pistol', cost: 0, clipSize: 16, reserveMax: 64, damage: 28, headshotMult: 2.6, fireRateMs: 190, recoilImpulse: 0.35, breachesGlass: false, killReward: 300 },
  smg: { id: 'smg', name: 'Volt-9 Stun SMG', cost: 1250, clipSize: 30, reserveMax: 90, damage: 22, headshotMult: 2.0, fireRateMs: 95, recoilImpulse: 0.55, breachesGlass: false, killReward: 600 },
  shotgun: { id: 'shotgun', name: 'Mag-Scatter Breach', cost: 1800, clipSize: 8, reserveMax: 32, damage: 18, pellets: 7, headshotMult: 1.8, fireRateMs: 680, recoilImpulse: 4.2, breachesGlass: true, killReward: 900 },
  rifle: { id: 'rifle', name: 'AR-77 Rail Rifle', cost: 2900, clipSize: 30, reserveMax: 90, damage: 36, headshotMult: 3.1, fireRateMs: 115, recoilImpulse: 1.45, breachesGlass: true, killReward: 300 },
  sniper: { id: 'sniper', name: 'HV-Lance Gauss', cost: 4750, clipSize: 5, reserveMax: 20, damage: 115, headshotMult: 3.0, fireRateMs: 1150, recoilImpulse: 6.5, breachesGlass: true, killReward: 100 }
};

export const UTILITIES = {
  foam: { id: 'foam', name: 'Foam Canister', cost: 300, max: 2 },
  strobe: { id: 'strobe', name: 'Strobe Mag-Pulse', cost: 200, max: 2 },
  plasma: { id: 'plasma', name: 'Plasma Arc Trap', cost: 400, max: 1 },
  breach: { id: 'breach', name: 'Micro-Breach Charge', cost: 300, max: 1 }
};
