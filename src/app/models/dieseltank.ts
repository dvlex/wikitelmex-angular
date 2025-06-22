export class Dieseltank {
  id: number | null;
  name: string;
  location: string;
  diameter: number; // in centimeters
  height: number; // in centimeters
  currentLevel: number; // in centimeters <= diameter
  lastRefillDate: Date;

  constructor(
    id: number | null = null,
    name: string,
    location: string,
    diameter: number,
    height: number,
    lastRefillDate: Date = new Date(),
    currentLevel: number = 0,
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.diameter = diameter;
    this.height = height;
    this.currentLevel = currentLevel > diameter ? diameter : currentLevel; // ensure current level does not exceed diameter
    this.lastRefillDate = lastRefillDate;
  }

  get CapacityInLiters(): number {
    // Calculate the capacity of the tank in liters
    const radius = this.diameter / 2 / 100; // convert diameter to meters and get radius
    const heightInMeters = this.height / 100; // convert height to meters
    return Math.PI * Math.pow(radius, 2) * heightInMeters * 1000; // convert cubic meters to liters
  }

  get CapacityInCubicCentimeters(): number {
    // Calculate the capacity of the tank in cubic centimeters
    const radius = this.diameter / 2; // diameter is in cm, so radius is also in cm
    const heightInCm = this.height; // height is already in cm
    return Math.PI * Math.pow(radius, 2) * heightInCm; // volume in cubic centimeters
  }

  get CurrentLevelInLiters(): number {
    // Calculate the current level in liters
    const radius = this.diameter / 2 / 100; // convert diameter to meters and get radius
    const currentHeightInMeters = this.currentLevel / 100; // convert current level to meters
    // For a horizontal cylinder, the volume at a given fill height (currentLevel) is:
    // V = L * (r^2 * acos((r-h)/r) - (r-h) * sqrt(2*r*h - h^2))
    // where L = length (height property), r = radius, h = currentLevel
    const r = this.diameter / 2 / 100; // radius in meters
    const L = this.height / 100; // length in meters (height property is the length of the cylinder)
    const h = Math.min(this.currentLevel, this.diameter) / 100; // fill height in meters, capped at diameter

    if (h <= 0) return 0;
    if (h >= 2 * r) return Math.PI * Math.pow(r, 2) * L * 1000; // full tank

    const theta = Math.acos((r - h) / r);
    const segmentArea = r * r * theta - (r - h) * Math.sqrt(2 * r * h - h * h);
    const volume = L * segmentArea * 1000; // convert m³ to liters
    return volume;
  }

  get CurrentLevelInCubicCentimeters(): number {
    // Calculate the current level in cubic centimeters
    const radius = this.diameter / 2; // radius in cm
    const currentHeightInCm = this.currentLevel; // current level in cm
    // For a horizontal cylinder, the volume at a given fill height (currentLevel) is:
    // V = L * (r^2 * acos((r-h)/r) - (r-h) * sqrt(2*r*h - h^2))
    const r = radius; // radius in cm
    const L = this.height; // length in cm (height property is the length of the cylinder)
    const h = Math.min(this.currentLevel, this.diameter); // fill height in cm, capped at diameter

    if (h <= 0) return 0;
    if (h >= 2 * r) return Math.PI * Math.pow(r, 2) * L; // full tank

    const theta = Math.acos((r - h) / r);
    const segmentArea = r * r * theta - (r - h) * Math.sqrt(2 * r * h - h * h);
    const volume = L * segmentArea; // volume in cubic centimeters
    return volume;
  }
}


// Example usage:
const tank = new Dieseltank(
  null,
  'Main Tank',
  'North Field',
  200, // diameter in cm
  500, // height in cm
  new Date('2023-10-01'),
  150 // current level in cm
);
console.log(`Capacity in Liters: ${tank.CapacityInLiters}`);
console.log(`Current Level in Liters: ${tank.CurrentLevelInLiters}`);
console.log(`Capacity in Cubic Centimeters: ${tank.CapacityInCubicCentimeters
}`);
console.log(`Current Level in Cubic Centimeters: ${tank.CurrentLevelInCubicCentimeters}`);
console.log(`Current Level: ${tank.currentLevel} cm`);
console.log(`Last Refill Date: ${tank.lastRefillDate.toLocaleDateString()}`);
console.log(`Tank ID: ${tank.id}`);