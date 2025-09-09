import { drizzle } from 'drizzle-orm/postgres-js';
import { products } from './src/lib/db/schema';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);
const db = drizzle(client);

const medicalProducts = [
  {
    name: "Digital Blood Pressure Monitor",
    description: "Accurate automatic blood pressure monitor with large LCD display and memory function for tracking readings over time.",
    price: "79.99",
    category: "Diagnostic Equipment",
    brand: "MedTech Pro",
    stock: 25,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop",
  },
  {
    name: "Pulse Oximeter",
    description: "Fingertip pulse oximeter for measuring oxygen saturation and pulse rate. Compact design with OLED display.",
    price: "24.99",
    category: "Diagnostic Equipment", 
    brand: "HealthCheck",
    stock: 40,
    imageUrl: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=500&fit=crop",
  },
  {
    name: "Thermometer Digital",
    description: "Fast and accurate digital thermometer with fever alarm and flexible tip for comfortable use.",
    price: "12.99",
    category: "Diagnostic Equipment",
    brand: "TempSure",
    stock: 60,
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&h=500&fit=crop",
  },
  {
    name: "First Aid Kit Complete",
    description: "Comprehensive first aid kit with bandages, antiseptic, pain relievers, and emergency supplies for home or travel.",
    price: "34.99",
    category: "Emergency Supplies",
    brand: "SafeGuard Medical",
    stock: 20,
    imageUrl: "https://images.unsplash.com/photo-1603398938311-5ac4635d5662?w=500&h=500&fit=crop",
  },
  {
    name: "Compression Socks (Pair)",
    description: "Medical grade compression socks for improved circulation, reduced swelling, and leg fatigue relief.",
    price: "19.99", 
    category: "Medical Wear",
    brand: "ComfortFlex",
    stock: 50,
    imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
  },
  {
    name: "Wheelchair Cushion",
    description: "Memory foam wheelchair cushion with removable cover for enhanced comfort and pressure relief during extended sitting.",
    price: "89.99",
    category: "Mobility Aids",
    brand: "ComfortSeating",
    stock: 15,
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=500&fit=crop",
  },
  {
    name: "Glucose Test Strips (50 count)",
    description: "Accurate glucose test strips compatible with most blood glucose meters. No coding required.",
    price: "29.99",
    category: "Diabetes Care",
    brand: "GlucoTest",
    stock: 35,
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=500&fit=crop",
  },
  {
    name: "Stethoscope Professional",
    description: "High-quality stethoscope with dual-head chest piece for clear auscultation of heart, lung, and bowel sounds.",
    price: "149.99",
    category: "Diagnostic Equipment",
    brand: "MediScope Pro",
    stock: 12,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop",
  }
];

async function seed() {
  console.log('🌱 Seeding database...');
  
  try {
    await db.insert(products).values(medicalProducts);
    console.log('✅ Database seeded successfully with', medicalProducts.length, 'medical products');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  } finally {
    await client.end();
  }
}

seed().catch((error) => {
  console.error('Seed script failed:', error);
  process.exit(1);
});