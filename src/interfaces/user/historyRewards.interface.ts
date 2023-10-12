export interface iListHistoryRewards {
    id: number;
    status: string;
    date: string;
    reward_name: string;
    pub: {
        id: number;
        name: string;
        socialNumber: string;
    }
}