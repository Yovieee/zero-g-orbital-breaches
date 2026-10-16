/**
 * Phase 1 Dual-State Character Controller (Mag-Locked vs Free-Float 0G)
 * Handles dynamic surface-normal snapping (Floor, Wall, Ceiling) and Newtonian recoil impulse.
 */
export class ZeroGController {
  constructor() {
    this.magBoots = true;
    this.surfaceNormal = [0, 1, 0];
    this.velocity = [0, 0, 0];
    this.groundSpeed = 7.8;
    this.zeroGAccel = 11.5;
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

  step(wishDir, dt, decompressionPull) {
    if (this.magBoots) {
      this.velocity[0] = wishDir[0] * this.groundSpeed;
      this.velocity[1] = 0;
      this.velocity[2] = wishDir[2] * this.groundSpeed;
    } else {
      this.velocity[0] += wishDir[0] * this.zeroGAccel * dt;
      this.velocity[1] += wishDir[1] * this.zeroGAccel * dt;
      this.velocity[2] += wishDir[2] * this.zeroGAccel * dt;

      if (decompressionPull) {
        this.velocity[0] += decompressionPull[0] * 12.5 * dt;
        this.velocity[1] += decompressionPull[1] * 12.5 * dt;
        this.velocity[2] += decompressionPull[2] * 12.5 * dt;
      }

      const drag = Math.pow(0.88, dt * 4);
      this.velocity[0] *= drag;
      this.velocity[1] *= drag;
      this.velocity[2] *= drag;
    }
    return this.velocity;
  }
}
