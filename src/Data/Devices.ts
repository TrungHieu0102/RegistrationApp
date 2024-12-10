export interface Devices {
    id: number;
    brandId: number;
    name: string;
    image: string;
    isActive: boolean;
  }
  
  const devices: Devices[] = [  
    { id: 1, brandId: 1, name: "AirPods", image: "airpods.png", isActive: true },
    { id: 2, brandId: 1, name: "Apple TV", image: "apple-tv.png", isActive: true },
    { id: 3, brandId: 1, name: "iPhone", image: "iphone.png", isActive: true },
    { id: 4, brandId: 1, name: "MacBook Pro", image: "macbook-pro.png", isActive: true },
    { id: 5, brandId: 2, name: "Galaxy S23", image: "galaxy-s23.png", isActive: true },
    { id: 6, brandId: 2, name: "Galaxy Note 20", image: "galaxy-note-20.png", isActive: true },
    { id: 7, brandId: 2, name: "Galaxy Tab", image: "galaxy-tab.png", isActive: true },
    { id: 8, brandId: 3, name: "Mi Band", image: "mi-band.png", isActive: true },
    { id: 9, brandId: 3, name: "Redmi Note", image: "redmi-note.png", isActive: true },
    { id: 10, brandId: 3, name: "Mi Pad", image: "mi-pad.png", isActive: true },
  ];
  
  export default devices;
  