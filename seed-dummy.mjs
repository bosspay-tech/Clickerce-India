import { createClient } from "@supabase/supabase-js";

// ⚠️ REPLACE THESE WITH YOUR ACTUAL SUPABASE URL AND "SERVICE_ROLE" KEY
const SUPABASE_URL = "";
const SUPABASE_SERVICE_KEY = "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const STORE_ID = "all-store";

const generateProducts = (category, imgUrl, names, basePrice) => {
  return names.map((name, idx) => ({
    store_id: STORE_ID,
    title: name,
    description: `High-quality ${name.toLowerCase()} with exceptional durability. Perfect addition to your daily essentials.`,
    base_price: basePrice + idx * 300,
    categories: [category],
    type: category,
    is_active: true,
    image_url: imgUrl,
    slug:
      name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now() + idx,
  }));
};

const DUMMY_PRODUCTS = [
  // Fashion
  ...generateProducts(
    "fashion",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    [
      "Classic White T-Shirt",
      "Vintage Denim Jacket",
      "Summer Floral Dress",
      "Comfortable Running Sneakers",
    ],
    799,
  ),
  // Electronics
  ...generateProducts(
    "electronics",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80",
    [
      "Noise Cancelling Headphones",
      "Smart Fitness Watch",
      "Portable Bluetooth Speaker",
      "Fast Charging Power Bank",
    ],
    1499,
  ),
  // Beauty
  ...generateProducts(
    "beauty",
    "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=800&q=80",
    [
      "Hydrating Face Serum",
      "Long-Lasting Matte Lipstick",
      "Revitalizing Night Cream",
      "Volumizing Mascara",
    ],
    499,
  ),
  // Home
  ...generateProducts(
    "home",
    "https://images.unsplash.com/photo-1583847268964-b28ce8fba3d5?auto=format&fit=crop&w=800&q=80",
    [
      "Ceramic Coffee Mug Set",
      "Cozy Throw Blanket",
      "Minimalist Table Lamp",
      "Cotton Bed Sheets",
    ],
    599,
  ),
  // Auto
  ...generateProducts(
    "auto",
    "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80",
    [
      "Premium Car Air Freshener",
      "Microfiber Cleaning Cloths",
      "Dashboard Phone Mount",
      "Leather Seat Covers",
    ],
    299,
  ),
  // Sports
  ...generateProducts(
    "sports",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    [
      "Non-Slip Yoga Mat",
      "Adjustable Dumbbell Set",
      "Heavy Duty Resistance Bands",
      "Steel Water Bottle",
    ],
    699,
  ),
];

async function seed() {
  console.log("Seeding realistic products for store:", STORE_ID);

  for (const product of DUMMY_PRODUCTS) {
    const { data, error } = await supabase
      .from("products")
      .insert([product])
      .select();

    if (error) {
      console.error("Error inserting product:", product.title, error.message);
    } else {
      console.log(`✅ Successfully inserted: ${product.title}`);
    }
  }
  console.log(`\nDone seeding ${DUMMY_PRODUCTS.length} products!`);
}

seed();
