ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "is_active";