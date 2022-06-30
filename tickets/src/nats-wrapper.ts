import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {
  // will not try to define this propert inside of any construtor
  // becuase running the constructor when export
  // so at this pt of time, too early to create a actual nats client and assign it to this property
  // -> not want to assign this property until we eventually try to call connect in index.ts
  // -> use ?
  private _client?: Stan;

  // want to expose _client to the outside world
  // but also throw in air if someone tries to access it before it is actually ready to be used
  // use getter -> access _client by this client property
  get client() {
    if (!this._client) {
      throw new Error('Cannot access NATS client before connecting');
    }
    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this.client.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });
      this.client.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
