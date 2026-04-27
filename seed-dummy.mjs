import { createClient } from "@supabase/supabase-js";

// ⚠️ REPLACE THESE WITH YOUR ACTUAL SUPABASE URL AND "SERVICE_ROLE" KEY
const SUPABASE_URL = "";
const SUPABASE_SERVICE_KEY = "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const STORE_ID = "all-store";

const buildProduct = (category, name, basePrice, imgUrl, idx) => ({
  store_id: STORE_ID,
  title: name,
  description: `High-quality ${name.toLowerCase()} with exceptional durability. Perfect addition to your daily essentials.`,
  base_price: basePrice,
  categories: [category],
  type: category, // We use this exact type to identify dummy products for cleanup
  is_active: true,
  image_url: imgUrl,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now() + idx,
});

const DUMMY_PRODUCTS = [
  // Fashion
  buildProduct(
    "fashion",
    "Classic White T-Shirt",
    799,
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    1,
  ),
  buildProduct(
    "fashion",
    "Vintage Denim Jacket",
    1999,
    "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
    2,
  ),
  buildProduct(
    "fashion",
    "Summer Floral Dress",
    1499,
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    3,
  ),
  buildProduct(
    "fashion",
    "Comfortable Running Sneakers",
    2499,
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    4,
  ),

  // Electronics
  buildProduct(
    "electronics",
    "Noise Cancelling Headphones",
    4999,
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    5,
  ),
  buildProduct(
    "electronics",
    "Smart Fitness Watch",
    2999,
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    6,
  ),
  buildProduct(
    "electronics",
    "Portable Bluetooth Speaker",
    1999,
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    7,
  ),
  buildProduct(
    "electronics",
    "Fast Charging Power Bank",
    999,
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
    8,
  ),

  // Beauty
  buildProduct(
    "beauty",
    "Hydrating Face Serum",
    899,
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    9,
  ),
  buildProduct(
    "beauty",
    "Long-Lasting Matte Lipstick",
    599,
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    10,
  ),
  buildProduct(
    "beauty",
    "Revitalizing Night Cream",
    799,
    "https://images.unsplash.com/photo-1615397323204-624385cc9d05?auto=format&fit=crop&w=800&q=80",
    11,
  ),
  buildProduct(
    "beauty",
    "Volumizing Mascara",
    499,
    "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=800&q=80",
    12,
  ),

  // Home
  buildProduct(
    "home",
    "Ceramic Coffee Mug Set",
    599,
    "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    13,
  ),
  buildProduct(
    "home",
    "Cozy Throw Blanket",
    1299,
    "https://images.unsplash.com/photo-1580828369019-22204c329bd6?auto=format&fit=crop&w=800&q=80",
    14,
  ),
  buildProduct(
    "home",
    "Minimalist Table Lamp",
    1499,
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    15,
  ),
  buildProduct(
    "home",
    "Cotton Bed Sheets",
    1999,
    "https://images.unsplash.com/photo-1629949009765-40fc80173872?auto=format&fit=crop&w=800&q=80",
    16,
  ),

  // Auto
  buildProduct(
    "auto",
    "Premium Car Air Freshener",
    299,
    "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80",
    17,
  ),
  buildProduct(
    "auto",
    "Microfiber Cleaning Cloths",
    399,
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80",
    18,
  ),
  buildProduct(
    "auto",
    "Dashboard Phone Mount",
    699,
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80",
    19,
  ),
  buildProduct(
    "auto",
    "Leather Seat Covers",
    3499,
    "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=800&q=80",
    20,
  ),

  // Sports
  buildProduct(
    "sports",
    "Non-Slip Yoga Mat",
    899,
    "https://images.unsplash.com/photo-1601122616259-3fb70e7a177a?auto=format&fit=crop&w=800&q=80",
    21,
  ),
  buildProduct(
    "sports",
    "Adjustable Dumbbell Set",
    2499,
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    22,
  ),
  buildProduct(
    "sports",
    "Heavy Duty Resistance Bands",
    699,
    "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80",
    23,
  ),
  buildProduct(
    "sports",
    "Steel Water Bottle",
    499,
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    24,
  ),
];

async function seed() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error(
      "❌ Please provide SUPABASE_URL and SUPABASE_SERVICE_KEY at the top of the file.",
    );
    return;
  }

  console.log("Cleaning up previous dummy products...");
  // We use "in" for the "type" column because all our dummy products used these exact types
  const { error: deleteError } = await supabase
    .from("products")
    .delete()
    .in("type", ["fashion", "electronics", "beauty", "home", "auto", "sports"])
    .eq("store_id", STORE_ID);

  if (deleteError) {
    console.error("❌ Error deleting old products:", deleteError);
    return;
  }
  console.log("✅ Previous dummy products deleted.");

  console.log("Seeding realistic products for store:", STORE_ID);

  for (const product of DUMMY_PRODUCTS) {
    const { data, error } = await supabase
      .from("products")
      .insert([product])
      .select();

    if (error) {
      console.error(
        "❌ Error inserting product:",
        product.title,
        error.message,
      );
    } else {
      console.log(`✅ Successfully inserted: ${product.title}`);
    }
  }
  console.log(
    `\n🎉 Done seeding ${DUMMY_PRODUCTS.length} products with unique images!`,
  );
}

seed();
