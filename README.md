# Zero-Gravity Orbital Breaches (Station Alpha)

**Zero-Gravity Orbital Breaches** is a 3D multiplayer tactical 5v5 first-person shooter built with **Three.js** and **WebSockets / BroadcastChannel P2P**. It adapts Counter-Strike's high-lethality gunplay, shared team economy, and objective defusal loop into a modular orbital space station where **gravity, atmosphere, and 3D surface orientation** are tactical resources.

## Implemented 5-Phase Architecture

| Phase | Milestone | Implemented Systems |
| :--- | :--- | :--- |
| **Phase 1** | **Movement & Gunplay Sandbox** | Dual-state 3D character controller: **Mag-Locked (`[V]`)** surface walking with crisp counter-strafing and metallic hull footsteps vs. **Free-Float (0G)** 6-DOF momentum drift and **Newtonian recoil impulse**. Press **`[F]`** to clamp magnetic boots onto floors, walls, or ceilings. |
| **Phase 2** | **Tactical Utility & Station Hazards** | **Foam Canister (`[4]`)** expands into volumetric spheres that block sightlines, plug hull breaches, and can be carved by gunfire to open peek-holes. **Strobe Mag-Pulse (`[5]`)** blinds optics and scrambles radar; **Plasma Arc Trap (`[6]`)** denies zero-G corridors; **Micro-Breach Charge (`[7]`)** and heavy kinetic rifles shatter exterior glass to trigger **Room Decompression Pull**. |
| **Phase 3** | **Round Loop & Buy Economy** | Full **`[B]` Buy Menu** with credits (`$800`–`$16,000`), 5 weapons (**Flechette Pistol**, **Volt-9 Stun SMG**, **Mag-Scatter Shotgun**, **AR-77 Rail Rifle**, **HV-Lance Gauss Sniper**), **Pressurized Visor + O2 Reserve**, **Cryo-Welder Overclock Kit**, and the **45s Thermite Core** plant/defuse state machine (`[E]`). |
| **Phase 4** | **Station Alpha 3-Lane Map** | **Site A (Life Support)** with a destructible/toggleable **1G Gravity Generator Node (`[J]`)**, **Central Zero-G Hub**, and **Site B (Thruster Array)** in permanent 0G with breachable observation viewports and emergency blast bulkheads (`[H]`). |
| **Phase 5** | **Multiplayer & 5v5 Tactical AI** | Hybrid 60Hz networking (`[M]`): connects to the authoritative Node.js **WebSocket server (`server/server.js`)**, syncs across browser tabs/windows via **BroadcastChannel P2P**, and fills open slots with **5v5 Tactical Bot Squads**. |

## Controls Reference

* **Move / Strafe:** `W`, `A`, `S`, `D` (or Arrow Keys)
* **Aim & Fire:** Mouse Look + `Left Click` (or HUD `FIRE` button)
* **Toggle Mag-Boots vs. Free-Float (0G):** `V`
* **Snap Orientation to Floor / Wall / Ceiling:** `F`
* **Zero-G Vertical RCS Thrusters:** `Space` (Up) / `C` (Down)
* **Plant / Defuse Thermite Core:** `E`
* **Deploy Tactical Utility:** `4` (Foam Canister), `5` (Strobe Pulse), `6` (Plasma Trap), `7` (Micro-Breach), or `G`
* **Drop Emergency Blast Bulkhead:** `H`
* **Toggle Site A 1G Gravity Generator:** `J` (or shoot the floating green octahedron node at Site A)
* **Open Orbital Buy Menu:** `B`
* **Open Multiplayer & Network Hub:** `M`
* **Open 5v5 Scoreboard & Tactical Spec:** `Tab`

## Running Locally

### 1. Instant Browser / Multi-Tab P2P Mode
Open `index.html` directly in two or more browser tabs/windows to test real-time 60Hz `BroadcastChannel` P2P synchronization alongside the 5v5 tactical bot squads.

### 2. Authoritative Node.js WebSocket Server
```bash
npm install
npm start
# Open http://localhost:8080 and click [M] -> Connect WS
```
