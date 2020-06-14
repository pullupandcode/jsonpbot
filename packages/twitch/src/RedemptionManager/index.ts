import {
  IRedemptionManager,
  RedemptionItem,
  RedemptionConfig,
  RedemptionListItem,
} from "./types";
import redemptions from "./redemptions";

class RedemptionManager implements IRedemptionManager {
  private static instance: RedemptionManager;
  private redemptions: Map<string, RedemptionItem>;
  private constructor(redemptions: RedemptionConfig) {
    this.redemptions = new Map<string, RedemptionItem>();
    for (const name in redemptions) {
      this.redemptions.set(name, redemptions[name]);
    }
  }
  static getInstance() {
    if (!RedemptionManager.instance) {
      RedemptionManager.instance = new RedemptionManager(redemptions);
    }

    return RedemptionManager.instance;
  }

  getRedemptionList(): Array<RedemptionListItem> {
    let results: Array<RedemptionListItem> = [];
    for (const item in this.redemptions) {
      let reward = this.redemptions.get(item);
      results.push({
        name: reward.name,
        description: reward.description,
      });
    }

    return results;
  }

  getReward(name: string): RedemptionItem | undefined {
    return this.redemptions.get(name);
  }
}

export default RedemptionManager;
