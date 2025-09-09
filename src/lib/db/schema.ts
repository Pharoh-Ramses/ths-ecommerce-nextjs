import { pgTable, serial, varchar, text, decimal, integer, timestamp } from 'drizzle-orm/pg-core';
import { InferSelectModel } from 'drizzle-orm';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  brand: varchar('brand', { length: 100 }),
  stock: integer('stock').default(0).notNull(),
  imageUrl: varchar('image_url', { length: 500 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Product = InferSelectModel<typeof products>;