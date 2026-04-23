import { createClient } from "@supabase/supabase-js";

// ⚠️ REPLACE THESE WITH YOUR ACTUAL SUPABASE URL AND "SERVICE_ROLE" KEY
const SUPABASE_URL = "";
const SUPABASE_SERVICE_KEY = "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const STORE_ID = "all-store";

const DUMMY_PRODUCTS = [
  {
    store_id: STORE_ID,
    title: "Dummy Fashion Item",
    description: "This is a dummy fashion product.",
    base_price: 999,
    categories: ["fashion"],
    type: "fashion",
    is_active: true,
    image_url:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    slug: "dummy-fashion-item-" + Date.now(),
  },
  {
    store_id: STORE_ID,
    title: "Dummy Electronics Item",
    description: "This is a dummy electronics product.",
    base_price: 19999,
    categories: ["electronics"],
    type: "electronics",
    is_active: true,
    image_url:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    slug: "dummy-electronics-item-" + Date.now(),
  },
  {
    store_id: STORE_ID,
    title: "Dummy Beauty Item",
    description: "This is a dummy beauty product.",
    base_price: 499,
    categories: ["beauty"],
    type: "beauty",
    is_active: true,
    image_url:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    slug: "dummy-beauty-item-" + Date.now(),
  },
  {
    store_id: STORE_ID,
    title: "Dummy Home Item",
    description: "This is a dummy home product.",
    base_price: 1499,
    categories: ["home"],
    type: "home",
    is_active: true,
    image_url:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    slug: "dummy-home-item-" + Date.now(),
  },
  {
    store_id: STORE_ID,
    title: "Dummy Auto Item",
    description: "This is a dummy auto product.",
    base_price: 2999,
    categories: ["auto"],
    type: "auto",
    is_active: true,
    image_url:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    slug: "dummy-auto-item-" + Date.now(),
  },
  {
    store_id: STORE_ID,
    title: "Dummy Sports Item",
    description: "This is a dummy sports product.",
    base_price: 899,
    categories: ["sports"],
    type: "sports",
    is_active: true,
    image_url:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    slug: "dummy-sports-item-" + Date.now(),
  },
];

async function seed() {
  console.log("Seeding dummy products for store:", STORE_ID);

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
  console.log("\nDone seeding!");
}

seed();
