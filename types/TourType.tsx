export interface ApiTour {
    id: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    title: string;
    content: string;
    published: boolean;
    userId: string;
    points: any[];
    
}