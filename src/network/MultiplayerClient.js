/**
 * Phase 5 Hybrid Multiplayer Client (Authoritative WebSocket + BroadcastChannel P2P)
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
        const packet = JSON.parse(ev.data);
        if (packet.senderId !== this.localId) this.onPacket(packet);
      } catch (e) {}
    };
  }

  broadcast(payload) {
    const packet = Object.assign({ senderId: this.localId, ts: Date.now() }, payload);
    if (this.bc) this.bc.postMessage(packet);
    if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(packet));
  }
}
