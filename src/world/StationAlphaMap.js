/**
 * Phase 4 Station Alpha 3-Lane Map & Volumetric Foam / Breach Manager
 */
export const SECTORS = [
  { id: 'DOCK', name: 'BREACHER DOCK', bounds: { minX: -36, maxX: -16, minZ: -14, maxZ: 14 }, default1G: false },
  { id: 'SITE_A', name: 'SITE A: LIFE SUPPORT', bounds: { minX: -16, maxX: 16, minZ: -36, maxZ: -12 }, default1G: true, isPlantSite: 'A', sitePos: { x: 0, y: 1.2, z: -24 } },
  { id: 'HUB', name: 'CENTRAL 0G HUB', bounds: { minX: -16, maxX: 16, minZ: -12, maxZ: 12 }, default1G: false },
  { id: 'SITE_B', name: 'SITE B: THRUSTER ARRAY', bounds: { minX: -16, maxX: 16, minZ: 12, maxZ: 36 }, default1G: false, isPlantSite: 'B', sitePos: { x: 0, y: 1.2, z: 24 } },
  { id: 'SEC_SPAWN', name: 'SECURITY COMMAND', bounds: { minX: 16, maxX: 36, minZ: -14, maxZ: 14 }, default1G: true }
];
