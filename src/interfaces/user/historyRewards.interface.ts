export interface iListHistoryRewards {
    id: number;
    status: string;
    date: string;
    reward_name: string;
    code_rescue: string;
    pub: {
        id: number;
        name: string;
        socialNumber: string;
    }
}

export interface iRewardInfo {
    name: string;
    points: string;
}

export interface iListHistoryRewardsClient {
    id: number;
    status: string;
    reward_name: string;
    code_rescue: string;
    rescue_date: string;
}