export type ApiTour = {
    id: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    title: string;
    content: string;
    published: boolean;
    userId: string;
    points: any[];
    
}
export type CreateApiTour = { 
    title: string;
    content: string;
    published: boolean;
}
export type TourId = {
    id: string;
}

  
