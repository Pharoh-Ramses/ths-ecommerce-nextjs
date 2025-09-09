# THS Medical Store

A modern, full-stack ecommerce platform built for medical and healthcare products. Built with Next.js, TypeScript, and powered by Bun for fast development and runtime.

## 🏥 Features

- **Product Catalog**: Browse medical equipment, diagnostic tools, and healthcare supplies
- **User Authentication**: Secure email/password authentication with Better Auth
- **Database Integration**: PostgreSQL with NeonDB and Drizzle ORM
- **State Management**: Zustand for efficient client-side state
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Fast Runtime**: Built and optimized with Bun

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Runtime**: [Bun](https://bun.sh/) for package management and runtime
- **Database**: [NeonDB](https://neon.tech/) (PostgreSQL)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- [NeonDB](https://neon.tech/) account and database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ths-store
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   DATABASE_URL="postgresql://username:password@your-neon-host/your-database-name?sslmode=require"
   BETTER_AUTH_SECRET="your-auth-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Push schema to your NeonDB database
   bun run db:push
   
   # Seed with sample medical products
   bun run db:seed
   ```

5. **Start the development server**
   ```bash
   bun run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see your medical store!

## 📁 Project Structure

```
ths-store/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   └── products/      # Product API
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   └── ProductCard.tsx    # Product card component
│   ├── lib/                   # Shared utilities
│   │   ├── auth/              # Authentication config
│   │   └── db/                # Database config and schema
│   └── store/                 # Zustand stores
│       └── products.ts        # Products state management
├── drizzle/                   # Database migrations
├── public/                    # Static assets
├── seed.ts                    # Database seeding script
└── drizzle.config.ts         # Drizzle configuration
```

## 🗄️ Database Schema

### Products Table
- **id**: Serial primary key
- **name**: Product name
- **description**: Product description
- **price**: Decimal price (10,2)
- **category**: Product category
- **brand**: Product brand
- **stock**: Integer stock quantity
- **imageUrl**: Product image URL
- **createdAt**: Creation timestamp
- **updatedAt**: Update timestamp

## 🔧 Available Scripts

```bash
# Development
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint

# Database
bun run db:generate  # Generate migrations
bun run db:push      # Push schema to database
bun run db:migrate   # Run migrations
bun run db:studio    # Open Drizzle Studio
bun run db:seed      # Seed database with sample data
```

## 🔐 Authentication

The application uses Better Auth for secure authentication:

- **Email/Password Registration**: Users can create accounts with email and password
- **Secure Sessions**: JWT-based session management
- **Database Integration**: User data stored in PostgreSQL via Drizzle ORM

### Future Authentication Options
The system is designed to easily support social authentication:
- Google OAuth (ready to implement)
- Microsoft OAuth (ready to implement)
- Additional providers as needed

## 📦 Product Categories

Current medical product categories:
- **Diagnostic Equipment**: Blood pressure monitors, pulse oximeters, thermometers
- **Emergency Supplies**: First aid kits, emergency medical supplies
- **Medical Wear**: Compression socks, medical garments
- **Mobility Aids**: Wheelchair accessories, mobility equipment
- **Diabetes Care**: Glucose testing supplies, diabetic care products

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
DATABASE_URL=your_neon_database_url
BETTER_AUTH_SECRET=your_production_secret
BETTER_AUTH_URL=https://your-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Shopping cart functionality
- [ ] Order management system
- [ ] Payment integration (Stripe)
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Social authentication (Google, Microsoft)
- [ ] Product reviews and ratings
- [ ] Search and filtering
- [ ] Wishlist functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Bun](https://bun.sh/) for the fast JavaScript runtime
- [NeonDB](https://neon.tech/) for serverless PostgreSQL
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- [Better Auth](https://www.better-auth.com/) for authentication
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

**THS Medical Store** - Your trusted partner in healthcare products 🏥