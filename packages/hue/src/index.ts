import fetch from "node-fetch";

export interface HueServiceConfig {
  ip_address: string | undefined;
  hue_username: string | undefined;
  hub_id: string | undefined;
}

interface DeviceState {
  on?: boolean;
  alert?: string;
  effect?: string;
  xy?: number;
  colormode?: string;
}

export default class HueService {
  private hub_id: string;
  private ip_address: string;
  private hue_username: string;
  private base_url: string;

  constructor(config: HueServiceConfig) {
    this.ip_address = config.ip_address;
    this.hue_username = config.hue_username;
    this.hub_id = config.hub_id;
    this.base_url = `http://${this.ip_address}/api/${this.hue_username}`;
  }

  async getDevices(type: string) {
    const response = await fetch(`${this.base_url}/${type}`);
    if (!response.ok) {
      // Handle error case
    } else {
      return await response.json();
    }
  }

  /**
     * 
     * @param id device id (registered on Hue hub)
     * @param type device type (lights | sensors)
     */
  async getDevice(id: string, type: string) {
    const response = await fetch(`${this.base_url}/${type}/${id}`);
    if (!response.ok) {
      return console.error(
        `Error with this request ${await response.statusText}`,
      );
    }
    return await response.json();
  }

  async setDeviceState(id: string, type: string, stateObj: DeviceState) {
    const response = await fetch(`${this.base_url}/${type}/${id}`, {
      method: "PUT",
      body: JSON.stringify(stateObj),
    });

    if (!response.ok) {
      return console.error(
        `Error with this request ${await response.statusText}`,
      );
    }
    return await response.json();
  }

  /**
     * Groups
     */

  /**
      * get groups
      * return {Promise<Object>} lightGroups
      */
  async getGroups() {
    const response = await fetch(`${this.base_url}/groups`);
    return await response.json();
  }

  async setGroupState(groupId: string, stateObj: DeviceState) {
    const response = await fetch(`${this.base_url}/groups/${groupId}/action`, {
      method: "PUT",
      body: JSON.stringify(stateObj),
    });

    return await response.json();
  }
}
