# Haptic Message Server — Roadmap

## Core Encryption & Transport
- [ ] Implement public/private streaming channels for full E2E communication
- [ ] Add automatic key negotiation (identity, signed, and one-time prekeys)
- [ ] Add secure session ratcheting for encrypted message envelopes
- [ ] Integrate IndexedDB + WebCrypto private key storage

## Real-Time Messaging
- [ ] Implement real-time message delivery via WebSockets
- [ ] Add delivery/read receipts
- [ ] Add typing indicators with rate limiting
- [ ] Add online presence + last active
- [ ] Add offline sync + retry queue

## Message Game Engine
- [ ] Build message-based mini-game engine
- [ ] Support turn-based logic and real-time state updates
- [ ] Provide developer API for message-based games
- [ ] Sandbox game code for safety

## API & SDK Integration
- [ ] Finalize full API documentation
- [ ] Add Postly SDK support for both public + private streams
- [ ] Create helpers for E2E session management and encryption
- [ ] Add fallback transports for unstable networks
