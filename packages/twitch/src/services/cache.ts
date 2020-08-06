/**
 * 
 */

class CacheManager {
  private cacheObject: Map<string, any>;
  private ttlValue: number;

  constructor() {
    this.cacheObject = new Map<string, any>();
    this.ttlValue = 1000 * 60;
  }

  setItem(key: string, value: any): void {
    this.cacheObject.set(key, value);
    const self = this;
    setTimeout(() => {
      this.cacheObject.delete(key);
    }, this.ttlValue);
  }

  getItem(key: string): any | undefined {
    return this.cacheObject.get(key);
  }

  find(key): boolean {
    if (this.getItem(key)) {
      return true;
    } else {
      this.setItem(key, Date.now().toString());
      return false;
    }
  }
}

export default CacheManager;
