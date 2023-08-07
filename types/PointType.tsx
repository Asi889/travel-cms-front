export type ApiPoint = {
    id: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    title: string;
    content: string;
    location: LocationType
    userId: string;
    tourId: string;
    images: any[];
    
}

export type LocationType = {
    lat: number;
    lon: number;
  }