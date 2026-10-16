/**
 * Phase 1 Dual-State Character Controller (Mag-Locked vs Free-Float 0G)
 * Handles dynamic surface-normal snapping (Floor, Wall, Ceiling) and Newtonian recoil impulse.
 */
export class ZeroGController {
  constructor() {
    this.magBoots = true;
    this.surfaceNormal = [0, 1, 0];
    this.velocity = [0, 0, 0];
  }

  applyNewtonianRecoil(forwardVec, impulse) {
    if (this.magBoots) return;
    this.velocity[0] -= forwardVec[0] * impulse;
    this.velocity[1] -= forwardVec[1] * impulse;
    this.velocity[2] -= forwardVec[2] * impulse;
  }

  snapSurfaceNormal(normal) {
    this.surfaceNormal = normal.slice();
    this.magBoots = true;
    this.velocity = [0, 0, 0];
  }
}
