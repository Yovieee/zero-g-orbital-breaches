# Zero-Gravity Orbital Breaches (`zero-g-orbital-breaches`)

**Zero-Gravity Orbital Breaches** is a 5v5 tactical zero-G first-person shooter built with **Three.js (WebGL)** and **hybrid WebSocket / P2P WebRTC + BroadcastChannel networking**. It translates Counter-Strike's round-based lethality, shared team economy, and high-precision map control into an orbital station (**Station Alpha**) where gravity, atmospheric pressure, and 3D surface orientation are tactical resources.

## Implemented 5-Phase Roadmap

| Phase | System | Implementation Details |
| :--- | :--- | :--- |
| **Phase 1** | **Movement & Gunplay Sandbox** | Dual-state 3D character controller: **Mag-Locked (`[V]`)** surface walking with crisp counter-strafing and metallic hull footsteps vs. **Free-Float (0G)** 6-DOF momentum drift and **Newtonian recoil impulse**. Press **`[F]`** to clamp magnetic boots onto floors, walls, or ceilings (`[0, +1, 0]`, `[0, -1, 0]`, `[+1, 0, 0]`). |
| **Phase 2** | **Tactical Utility & Station Hazards** | **Foam Canister (`[4]`)** expands into a volumetric cluster of 18 sealant spheres that block sightlines, plug active hull breaches, and **can be carved with weapon fire** to open peek-holes. **Strobe Mag-Pulse (`[5]`)** blinds optic visors & scrambles enemy radar for 2.5s; **Plasma Arc Trap (`[6]`)** electrifies corridors; **Micro-Breach Charge (`[7]`)** & heavy kinetic rifles shatter exterior glass to trigger **Room Decompression Pull**. |
| **Phase 3** | **Round Loop & Buy Economy** | Full **`[B]` Buy Menu** with CS-style economy (`$800` pistol start, `$300–$900` kill rewards, `$3,250` win / `$1,900` loss bonuses), 5 weapons (**Flechette Pistol**, **Volt-9 Stun SMG**, **Mag-Scatter Shotgun**, **AR-77 Rail Rifle**, **HV-Lance Gauss Sniper**), **Pressurized Visor + 25s O2 Reserve**, **Cryo-Welder Overclock Kit**, and a **45s Thermite Core** plant/defuse state machine (`[E]`). |
| **Phase 4** | **Station Alpha 3-Lane Map** | 3-lane orbital layout featuring **Site A (Life Support)** with a destructible/toggleable **1G Artificial Gravity Node (`[J]`)**, **Central Zero-G Hub**, and **Site B (Thruster Array)** in permanent 0G with dual ion cones and breachable exterior viewports. |
| **Phase 5** | **Multiplayer & 5v5 Tactical AI** | Hybrid 60Hz networking (`[M]`): connects to the authoritative Node.js **WebSocket server (`server/server.js`)**, syncs across browser tabs immediately via **BroadcastChannel P2P**, and auto-fills slots with **5v5 Tactical Bot Squads**. |

## Repository Structure

```text
zero-g-orbital-breaches/
├── index.html                      # Self-contained 3D Three.js client (playable directly or via server)
├── package.json                    # Node.js package manifest
├── server/
│   └── server.js                   # 60Hz Authoritative WebSocket server (state sync, breach & core state)
└── src/
    ├── config/
    │   └── arsenal.js              # Phase 3 Weapon tiers, recoil impulses, hull-risk flags & utility costs
    ├── physics/
    │   └── ZeroGController.js      # Phase 1 Dual-mode Mag-Boot surface-normal & Newtonian 0G physics
    ├── world/
    │   └── StationAlphaMap.js      # Phase 2 & 4 Station Alpha 3-lane sectors, viewports & Foam carving
    └── network/
        └── MultiplayerClient.js    # Phase 5 Hybrid WebSocket + BroadcastChannel P2P & 5v5 Bot controller
```

## Quick Start

### 1. Instant Browser / Multi-Tab P2P Mode
Open `index.html` directly in any modern browser. Open a second browser tab or window alongside it to test live 60Hz `BroadcastChannel` peer synchronization with zero server setup.

### 2. Dedicated Authoritative WebSocket Server
```bash
npm install
npm start
# Server listens on http://localhost:8080 and ws://localhost:8080
```

## Controls Reference

* **`WASD` / Arrow Keys:** Move (Grounded counter-strafe when Mag-Locked; 6-DOF thruster drift in Free-Float)
* **`Mouse / Touch-Drag` + `Left Click`:** Aim & Fire active weapon
* **`[V]`:** Toggle **Mag-Boots** (Grounded) vs. **Free-Float** (Zero-G Drift with Newtonian weapon recoil)
* **`[F]`:** Snap Mag-Boots to nearest surface normal (**Floor**, **Ceiling**, or **Wall**)
* **`[Space]` / `[C]`:** Vertical RCS Up / Down thrusters in Free-Float mode
* **`[B]`:** Open Orbital Armory & Loadout **Buy Menu**
* **`[4]` `[5]` `[6]` `[7]` / `[G]`:** Deploy **Foam Canister**, **Strobe Mag-Pulse**, **Plasma Arc Trap**, or **Micro-Breach Charge**
* **`[E]`:** Plant **Thermite Core** (Attackers) or **Cryo-Weld Defuse** (Defenders) at Site A or Site B
* **`[H]`:** Drop Emergency Blast Bulkhead to seal shattered viewports
* **`[J]`:** Toggle Site A (Life Support) 1G Artificial Gravity Generator
* **`[M]`:** Open Multiplayer Network & Sandbox Director Hub
* **`[Tab]`:** Open 5v5 Live Scoreboard & Tactical Specification
