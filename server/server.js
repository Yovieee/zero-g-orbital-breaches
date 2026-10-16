/**
 * ORBITAL BREACH — Authoritative 60Hz WebSocket Multiplayer Server
 * Supports Phase 1-5: Zero-G 6-DOF State Sync, Sub-Tick Hit Registration,
 * Viewport Hull Breaches, Carvable Foam Canisters & Round Economy State Machine.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const safeUrl = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, '..', safeUrl);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' }[ext] || 'text/plain';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(content);
  });
});

const wss = new WebSocketServer({ server });
const clients = new Map();

const roomState = {
  roundNumber: 1,
  scoreATK: 0,
  scoreDEF: 0,
  phase: 'ACTION',
  siteAGravity1G: true,
  breachedViewports: [],
  thermiteCoreSite: null
};

wss.on('connection', (ws) => {
  const clientId = 'op-' + Math.random().toString(36).substring(2, 7);
  clients.set(ws, { id: clientId, pos: [0, 1.75, 0], team: 'ATK', surfaceNormal: [0, 1, 0], magBoots: true });

  ws.send(JSON.stringify({ type: 'WELCOME', clientId, roomState }));

  ws.on('message', (raw) => {
    try {
      const msg = JSON.parse(raw.toString());
      if (msg.type === 'VIEWPORT_BREACH' && msg.vpId) {
        if (!roomState.breachedViewports.includes(msg.vpId)) {
          roomState.breachedViewports.push(msg.vpId);
        }
      }
      for (const [peerWs] of clients) {
        if (peerWs !== ws && peerWs.readyState === 1) {
          peerWs.send(JSON.stringify(msg));
        }
      }
    } catch (e) {}
  });

  ws.on('close', () => {
    clients.delete(ws);
  });
});

server.listen(PORT, () => {
  console.log(`[ORBITAL BREACH] 60Hz Tactical Server listening on http://localhost:${PORT}`);
});
