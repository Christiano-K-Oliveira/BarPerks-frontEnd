export interface iListHistoryRewards {
    id: number;
    status: string;
    date: string;
    reward_name: string;
    rescue_code: string;
    pub: {
        id: number;
        name: string;
        socialNumber: string;
    }
}