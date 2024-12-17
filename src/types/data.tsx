export interface Brand {
  id: number;
  name: string;
  image: string;
}
export interface Devices {
  id: number;
  brandId: number;
  name: string;
  image: string;
  isActive: boolean;
}
export interface DeviceService {
    deviceId: number;
    serviceIds:  number[]

  }
  export interface Services {
    id: number;
    name: string;
    price: number;
    duration: string;
    isActive: boolean;
  }
  export interface Selection {
    name: string;
    value: string | null;
  }
  export interface Location {
    id: number;
    name: string;
    coordinates: [number, number]; 
  }