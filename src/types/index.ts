export interface ProjectStats {
  maps: number;
  images: number;
  points: number;
  virtualTours?: number;
  videos?: number;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  thumbnailUrl: string;
  orders: number;
  orderId: string;
  lastOrderDate: string;
  stats: ProjectStats;
}