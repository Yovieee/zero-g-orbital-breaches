/**
 * Phase 5: Hybrid 60Hz Multiplayer Networking (WebSocket + BroadcastChannel P2P)
 */
export class MultiplayerClient {
  constructor(localId, onPacket) {
    this.localId = localId;
    this.onPacket = onPacket;
    this.ws = null;
    this.bc = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('orbital-breach-net') : null;
    if (this.bc) {
      this.bc.onmessage = (ev) => {
        if (ev.data && ev.data.senderId !== this.localId) {
          this.onPacket(ev.data);
        }
      };
    }
  }

  connectWebSocket(url) {
    this.ws = new WebSocket(url);
    this.ws.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data);
        if (data.senderId !== this.localId) this.onPacket(data);
      } catch (e) {}
    };
  }

  broadcast(payload) {
    const packet = Object.assign({ senderId: this.localId, ts: Date.now() }, payload);
    if (this.bc) {
      try { this.bc.postMessage(packet); } catch (e) {}
    }
    if (this.ws && this.ws.readyState === 1) {
      try { this.ws.send(JSON.stringify(packet)); } catch (e) {}
    }
  }
}
