export type RedemptionListItem = {
  name: string;
  description: string;
};

export type RedemptionItem = {
  name: string;
  description: string;
  run(): Promise<void>;
};

export type RedemptionConfig = {
  [index: string]: RedemptionItem;
};

export interface IRedemptionManager {
  //   getInstance(): RedemptionManager;
  //   private redemptions: Map<string, RedemptionItem>;
  getRedemptionList(): Array<RedemptionListItem>;
  getReward(name: string): RedemptionItem | undefined;
}
