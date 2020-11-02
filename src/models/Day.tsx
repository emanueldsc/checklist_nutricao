export interface Day {
    uid: string;
    date?: string;
    checklist: {
        waterCups: number;
        consumedFruit: boolean;
        consumedVegetable: boolean;
        consumedLegumen: boolean;
        exerciseTime: number;
    }
    meals?: string[];
}