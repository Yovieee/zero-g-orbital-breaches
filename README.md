# ORBITAL BREACH — Zero-Gravity Tactical 5v5 FPS (Three.js + WebSocket/P2P)

**Orbital Breach** brings Counter-Strike's high-stakes round-based lethality, shared team economy, and readable map control into a **3D zero-gravity orbital station ("Station Alpha")** where gravity, atmosphere, and 3D surface orientation are tactical resources.

## Implemented 5-Phase Architecture

| Phase | System | Implementation Details |
| :--- | :--- | :--- |
| **Phase 1** | **Movement & Gunplay Sandbox** | Dual-state 3D controller: **Mag-Locked (`[V]`)** surface walking with crisp counter-strafing vs. **Free-Float (0G)** 6-DOF momentum drift and **Newtonian recoil impulse**. Press **`[F]`** to clamp magnetic boots onto floors, walls, or ceilings. |
| **Phase 2** | **Tactical Utility & Station Hazards** | **Foam Canister (`[4]`)** expands into a volumetric cluster of sealant spheres that block line-of-sight, plug hull breaches, and can be carved with gunfire to open peek-holes. **Strobe (`[5]`)** blinds visors & scrambles radar; **Plasma (`[6]`)** denies corridors; **Micro-Breach (`[7]`)** & heavy kinetic rifles shatter exterior glass to trigger **Room Decompression Pull**. |
| **Phase 3** | **Round Loop & Buy Economy** | Full **`[B]` Buy Menu** with credits (`$800`–`$16,000`), 5 weapons (**Flechette Pistol**, **Volt-9 Stun SMG**, **Mag-Scatter Shotgun**, **AR-77 Rail Rifle**, **HV-Lance Gauss Sniper**), **Pressurized Visor + O2 Reserve**, and **45s Thermite Core** plant/defuse loop (`[E]`). |
| **Phase 4** | **Station Alpha 3-Lane Map** | **Site A (Life Support)** with a destructible/toggleable **1G Gravity Generator (`[J]`)**, **Central Zero-G Hub**, and **Site B (Thruster Array)** in permanent 0G with breachable observation viewports. |
| **Phase 5** | **Multiplayer & 5v5 Tactical AI** | Hybrid networking (`[M]`): connects to the authoritative Node.js **WebSocket server (`server/server.js`)**, syncs across browser tabs via **BroadcastChannel P2P**, and auto-fills slots with **5v5 Tactical Bot Squads**. |

## Quick Start

1. **Instant Browser Play**: Open `index.html` in one or more browser tabs (multi-tab P2P sync works automatically via `BroadcastChannel`).
2. **Dedicated Authoritative WebSocket Server**:
   ```bash
   npm install
   npm start
   # Open http://localhost:8080
   ```
