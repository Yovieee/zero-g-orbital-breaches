/**
 * Phase 1 Dual-State Character Controller (Mag-Locked vs Free-Float 0G)
 * Handles dynamic surface-normal snapping (Floor, Wall, Ceiling), counter-strafing,
 * and Newtonian weapon recoil impulse when un-booted.
 */
export class ZeroGController {
  constructor() {
    this.magBoots = true;
    this.surfaceNormal = [0, 1, 0];
    this.velocity = [0, 0, 0];
    this.position = [-22, 1.75, 0];
  }

  toggleMagBoots() {
    this.magBoots = !this.magBoots;
    if (this.magBoots) {
      this.velocity[0] *= 0.15;
      this.velocity[1] = 0;
      this.velocity[2] *= 0.15;
    } else {
      this.velocity[1] += 1.2;
    }
    return this.magBoots;
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
