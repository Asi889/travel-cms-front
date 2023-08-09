export type ApiPoint = {
    id: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    title: string;
    content: string;
    location: LocationType
    userId: string;
    tourId: string;
    images: ImageType[];
    
}

export type LocationType = {
    lat: number;
    lon: number;
  }

  export type ImageType = {
    fileName: string;
    path: string;
    user: { connect: { id: string } };
    tour?: { connect: { id: string } };
    point?: { connect: { id: string } };
  }