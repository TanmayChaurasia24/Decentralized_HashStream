import { db } from "@/db";
import { categories } from "@/db/schema";

const categories_name = [
  "cars",
  "bikes",
  "music",
  "sports",
  "comedy",
  "entertainment",
  "news",
  "science",
  "politics",
  "fashion",
  "film and animation",
  "travel",
  "vlogging",
  "lifestyle",
  "business",
  "web3",
  "solana",
  "rust",
];

async function main() {
  console.log("running seed categories...");

  try {
    const values: any = categories_name.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("categories seeded successfully!");
    
  } catch (error) {
    console.log("error while seeding the video categories");
    process.exit(1);
  }
}

main()
