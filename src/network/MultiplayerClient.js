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
      this.bc.onmessage = (ev) => this.onPacket(ev.data);
    }
  }

  connectWebSocket(url) {
    this.ws = new WebSocket(url);
    this.ws.onmessage = (ev) => {
      try { this.onPacket(JSON.parse(ev.data)); } catch (e) {}
    };
  }

  send(payload) {
    const packet = Object.assign({ senderId: this.localId, ts: Date.now() }, payload);
    if (this.bc) {
      try { this.bc.postMessage(packet); } catch (e) {}
    }
    if (this.ws && this.ws.readyState === 1) {
      this.ws.send(JSON.stringify(packet));
    }
  }
}
