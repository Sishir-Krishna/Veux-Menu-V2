/* ═══════════════════════════════════════════════════════════════════════════
 * VEUX GOURMET EATERY — MENU DATA
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE THE MENU.
 * Nothing here is code you have to understand — it is a list of dishes.
 * Edit the text between the "quote marks", save, and the app updates.
 *
 * ---------------------------------------------------------------------------
 * THE THREE RULES
 * ---------------------------------------------------------------------------
 *   1. Text always sits between "double quotes".      name: "Har Gow"
 *   2. Prices are plain numbers — no ₹, no commas.    price: 499
 *   3. Every line inside { } ends with a comma.       desc: "Steamed.",
 *
 * If the site goes blank after an edit, you almost certainly deleted a comma,
 * a quote mark, or a closing brace. Undo (Cmd+Z) and try again.
 *
 * Apostrophes: write them as ’ inside a name (e.g. "Chef’s Table")
 * so they render as a proper curly apostrophe. A plain ' also works.
 *
 * ---------------------------------------------------------------------------
 * WHAT A DISH CAN HAVE
 * ---------------------------------------------------------------------------
 *   name    (required)  "Har Gow"
 *   price   (required)  499
 *   desc    (optional)  One line. Shown under the name, and in the dish view.
 *   tag     (optional)  Small gold pill, e.g. "Must try". Use sparingly.
 *   origin  (optional)  The story paragraph in the dish view. This is where
 *                       the menu earns its keep — 1-2 sentences, no more.
 *   photo   (optional)  "/photos/<category>/<name>.webp"  — one image
 *   photos  (optional)  ["/photos/a.webp", "/photos/b.webp"] — a swipeable
 *                       gallery. Use for dishes with variants (the pastas).
 *                       Use photo OR photos, never both.
 *   video   (optional)  "/videos/<name>.mp4" — unlocks "Watch it being made".
 *   diet    (optional)  "Vegetarian" / "Contains nuts" / "Raw fish" etc.
 *
 * A dish with no photo is NOT broken — it shows a gold clover tile instead.
 * Drop the file in at the exact path above and it appears automatically.
 *
 * ---------------------------------------------------------------------------
 * WHAT A CATEGORY HAS
 * ---------------------------------------------------------------------------
 *   id         The web address: id "sushi" lives at /menu/sushi.
 *              CHANGING AN id BREAKS ANY PRINTED QR CODE POINTING AT IT.
 *   name, tagline, icon
 *   accent     The category's tint. Brand palette only — see PALETTE below.
 *   eyebrow    Optional tiny label above the name on the home screen.
 *   countNoun  "plates" / "pours" — used for "26 plates" on the home screen.
 *   notes      The chef's-craft highlight. { emoji, text }
 *   featured   Either  { ordered: [...], tryThis: [...] }   (two strips)
 *              or      [ ... ]                              (one strip)
 *   items      Either a flat list of dishes,
 *              or  [ { group: "Soups", dishes: [...] }, ... ] for sub-groups.
 *
 * PALETTE — do not introduce colours outside this set:
 *   #45111F aubergine · #6B2238 rose · #805E27 gold
 *   #A8884A muted gold · #C4A265 light gold · #6B6058 stone
 *
 * Note: the "[S]" markers from the seasonal insert have been removed from the
 * customer-facing descriptions, as they were never meant to be read by guests.
 * ═══════════════════════════════════════════════════════════════════════════ */

/* Restaurant details shown on the home screen and in the footer. */
export const site = {
  name: "Veux Gourmet Eatery",
  tagline: "The Infinite Craving",
  descriptor: "Pan-Asian Gourmet · All-Day Café",
  hours: "Open daily · 11:30 AM — 10:30 PM",
  city: "Siripuram, Visakhapatnam",
  // Closing line at the foot of every category page.
  priceNote: "All prices in ₹ · Taxes as applicable",
};

const menu = [
  // ═══════════════════════════════════════════
  // CHEF'S TABLE
  // ═══════════════════════════════════════════
  {
    id: "signatures",
    name: "Chef’s Table",
    tagline: "What the kitchen is proudest of",
    icon: "✦",
    accent: "#45111F",
    eyebrow: "Signature",
    countNoun: "plates",
    cover: "/photos/chefs-table/massaman-curry-lamb.webp",
    notes: [
      { emoji: "🔥", text: "Every reduction curry spends thirty minutes on a low flame — the time the sauce needs to tighten and the flavour to gather." },
    ],
    featured: {
      ordered: [
        { name: "Chef Special Avocado Roll", price: 550, desc: "Crunchy tempura, Hass avocado, truffle mayo, spring roll.", tag: "Most ordered", origin: "The chef’s personal creation — built around the best Hass avocados, finished with truffle mayo.", photo: "/photos/chefs-table/chef-special-avocado-roll.webp" },
        { name: "7 Spice Chicken", price: 399, desc: "Tempura-battered fried chicken dusted with Japanese spices.", tag: "Most ordered", origin: "Seven spices, each from a different corner of Japan — sansho, ginger, nori, sesame, citrus peel, shiso, and poppy seed.", photo: "/photos/chefs-table/seven-spice-chicken.webp" },
        { name: "Vietnamese Rice Paper Roll", price: 299, desc: "Grilled cottage cheese & seasonal greens with peanut sauce.", tag: "Most ordered", origin: "Fresh, not fried. The rice paper stays translucent so you see exactly what you’re eating.", photo: "/photos/chefs-table/vietnamese-rice-paper-roll.webp" },
        { name: "Exotic Asian Veg & Cheese Dimsum", price: 399, desc: "Crystal dough — water chestnut, bokchoy, broccoli & cheese in green curry reduction.", tag: "Most ordered", origin: "The translucent crystal dough is made from starch — steamed until it turns glassy.", photo: "/photos/chefs-table/exotic-asian-veg-cheese-dimsum.webp" },
      ],
      tryThis: [
        { name: "Massaman Curry Lamb", price: 700, desc: "Slow-braised lamb in a Thai curry with peanuts, potato, and warm spice.", tag: "Must try", origin: "From the kitchens of Southern Thailand — a Muslim-Thai crossover that became a royal favourite.", photo: "/photos/chefs-table/massaman-curry-lamb.webp" },
        { name: "Blue Pea Exotic Fried Rice", price: 450, desc: "Blue pea jasmine rice with edamame & vegetables. The colour is natural.", tag: "Must try", origin: "The blue comes from butterfly pea flower — zero dye, zero gimmick.", photo: "/photos/chefs-table/blue-pea-exotic-fried-rice.webp" },
        { name: "Salmon Carpaccio", price: 800, desc: "Thin slices of raw salmon with onion, jalapeño, micro green, onion dressing.", tag: "Must try", origin: "Italian technique meets Japanese-grade salmon. Best eaten slowly.", photo: "/photos/chefs-table/salmon-carpaccio.webp" },
        { name: "Har Gow", price: 499, desc: "Cantonese-style prawn dimsum with coconut & gochujang reduction.", tag: "Must try", origin: "The pleats on a har gow test a dim sum chef’s skill — tradition says at least seven folds.", photo: "/photos/chefs-table/har-gow.webp" },
      ],
    },
    items: [
      { name: "Salmon Carpaccio", price: 800, desc: "Raw salmon, onion, jalapeño, micro green, onion dressing", photo: "/photos/chefs-table/salmon-carpaccio.webp" },
      { name: "Tuna Carpaccio", price: 850, desc: "Raw tuna, onion, tri pepper, spring onion, togarashi, yuzu dressing", photo: "/photos/chefs-table/tuna-carpaccio.webp" },
      { name: "Thai Green Curry with Steamed Jasmine Rice", price: 550, desc: "Add on: Chicken ₹100 / Prawn ₹125", photo: "/photos/chefs-table/thai-green-curry-with-steamed-jasmine-rice.webp" },
      { name: "Thai Red Curry with Steamed Jasmine Rice", price: 550, desc: "Add on: Chicken ₹100 / Prawn ₹125", photo: "/photos/chefs-table/thai-red-curry-with-steamed-jasmine-rice.webp" },
      { name: "Massaman Curry Lamb", price: 700, desc: "", photo: "/photos/chefs-table/massaman-curry-lamb.webp" },
    ],
  },

  // ═══════════════════════════════════════════
  // BEVERAGES
  // ═══════════════════════════════════════════
  {
    id: "beverages",
    name: "Beverages",
    tagline: "Brewed, shaken, poured — never boring",
    icon: "◉",
    accent: "#A8884A",
    countNoun: "pours",
    // ⚠️ No beverage photograph exists yet — this tile shows the clover
    // placeholder until a file lands at the path below.
    cover: "/photos/beverages/signature/tropical-punch.webp",
    featured: {
      ordered: [
        { name: "Biscoff Latte", price: 280, desc: "Espresso layered with Biscoff spread — speculoos in a cup.", tag: "Top pick", origin: "The Belgian cookie meets Italian espresso.", photo: "/photos/beverages/lattes/biscoff-latte.webp" },
        { name: "Coconut Pine Cooler", price: 330, desc: "Tropical, refreshing, impossible to drink slowly.", tag: "Top pick", photo: "/photos/beverages/mocktails/coconut-pine-cooler.webp" },
        { name: "Tropical Punch", price: 350, desc: "House signature blend — fruity, punchy, always a conversation starter.", tag: "Top pick", origin: "The recipe stays in the kitchen. Customers have tried guessing for months.", photo: "/photos/beverages/signature/tropical-punch.webp" },
      ],
      tryThis: [
        { name: "Cinnamon Brew", price: 350, desc: "Hot or iced. Warm spice, smooth coffee, a finish that lingers.", tag: "Must try", origin: "Vietnamese-inspired, with a cinnamon twist unlike any coffee in Vizag.", photo: "/photos/beverages/signature/cinnamon-brew.webp" },
        { name: "Cranberry Cold Brew", price: 280, desc: "One of our most popular cold brew variants, classic cold brew meets the tangy cranberry", tag: "Must try", photo: "/photos/beverages/cold-brews/cranberry-cold-brew.webp" },
        { name: "Blueberry Cheesecake Shake", price: 400, desc: "Dessert in a glass — blueberry, cream cheese, biscuit crumble.", tag: "Must try", photo: "/photos/beverages/milkshakes/blueberry-cheesecake-shake.webp" },
      ],
    },
    items: [
      { group: "Signature", dishes: [
        { name: "Saigon Brew", price: 350, desc: "", photo: "/photos/beverages/signature/saigon-brew.webp" },
        { name: "Cinnamon Brew", price: 350, desc: "Hot or iced", photo: "/photos/beverages/signature/cinnamon-brew.webp" },
        { name: "Tropical Punch", price: 350, desc: "", photo: "/photos/beverages/signature/tropical-punch.webp" },
        { name: "Signature Hot Chocolate", price: 400, desc: "", photo: "/photos/beverages/signature/signature-hot-chocolate.webp" },
        { name: "Hot Chocolate", price: 350, desc: "", photo: "/photos/beverages/signature/hot-chocolate.webp" },
      ]},
      { group: "Hot Coffees", dishes: [
        { name: "Single Origin Espresso", price: 130, desc: "Single shot of our freshly ground, carefully brewed, rich and smooth espresso", photo: "/photos/beverages/hot-coffees/single-origin-espresso.webp" },
        { name: "Double Espresso", price: 150, desc: "Double the shot, double the fun", photo: "/photos/beverages/hot-coffees/double-espresso.webp" },
        { name: "Americano", price: 180, desc: "Hot water topped with our freshly brewed espresso", photo: "/photos/beverages/hot-coffees/americano.webp" },
        { name: "Morning Reset", price: 180, desc: "A refreshing start to your day", photo: "/photos/beverages/hot-coffees/morning-reset.webp" },
        { name: "Classic Cappuccino", price: 220, desc: "A double shot of our espresso mixed with equal ratios of milk and microfoam", photo: "/photos/beverages/hot-coffees/classic-cappuccino.webp" },
        { name: "Latte", price: 230, desc: "A shot of our espresso mixed with milk and topped off with a thin layer of microfoam", photo: "/photos/beverages/hot-coffees/latte.webp" },
        { name: "House Mocha", price: 260, desc: "Coffee blended with deliciously rich chocolate and steamed milk", photo: "/photos/beverages/hot-coffees/house-mocha.webp" },
        { name: "Hazelnut Velvet", price: 260, desc: "Milk-based", photo: "/photos/beverages/hot-coffees/hazelnut-velvet.webp" },
        { name: "Biscoff Latte", price: 280, desc: "A shot of our espresso blended with Biscoff spread and steamed milk", photo: "/photos/beverages/hot-coffees/biscoff-latte.webp" },
        { name: "Nutella Cappuccino", price: 280, desc: "A shot of our espresso blended with Ferrero Nutella and steamed milk", photo: "/photos/beverages/hot-coffees/nutella-cappuccino.webp" },
      ]},
      { group: "On The Rocks", dishes: [
        { name: "Iced Long Black", price: 200, desc: "An espresso topped with cold water and ice", photo: "/photos/beverages/on-the-rocks/iced-long-black.webp" },
        { name: "Iced Over Coffee", price: 220, desc: "An espresso topped with tonic water and ice", photo: "/photos/beverages/on-the-rocks/iced-over-coffee.webp" },
        { name: "Iced Velvet Latte", price: 280, desc: "One of the most iconic Lattes, made with milk topped off with our espresso and served over ice", photo: "/photos/beverages/on-the-rocks/iced-velvet-latte.webp" },
        { name: "Iced House Mocha", price: 300, desc: "Coffee blended with deliciously rich chocolate and steamed milk topped off with ice", photo: "/photos/beverages/on-the-rocks/iced-house-mocha.webp" },
        { name: "Veux Cold Coffee", price: 320, desc: "Our unique cold coffee blend", photo: "/photos/beverages/on-the-rocks/veux-cold-coffee.webp" },
        { name: "Signature Frappe", price: 320, desc: "Our signature frappe blend", photo: "/photos/beverages/on-the-rocks/signature-frappe.webp" },
      ]},
      { group: "Cold Brews", dishes: [
        { name: "Classic Cold Brew", price: 250, desc: "When coffee meets cold water", photo: "/photos/beverages/cold-brews/classic-cold-brew.webp" },
        { name: "Peach", price: 280, desc: "A refreshing twist on our classic cold brew, paired with a peach", photo: "/photos/beverages/cold-brews/peach.webp" },
        { name: "Cranberry", price: 280, desc: "One of our most popular cold brew variants, classic cold brew meets the tangy cranberry", photo: "/photos/beverages/cold-brews/cranberry.webp" },
        { name: "Orange", price: 280, desc: "A citrusy kick to your cold brew", photo: "/photos/beverages/cold-brews/orange.webp" },
      ]},
      { group: "Frappes", dishes: [
        { name: "Mocha", price: 350, desc: "", photo: "/photos/beverages/frappes/mocha.webp" },
        { name: "Brownie Blend", price: 370, desc: "", photo: "/photos/beverages/frappes/brownie-blend.webp" },
        { name: "Cookies & Cream", price: 350, desc: "", photo: "/photos/beverages/frappes/cookies-cream.webp" },
        { name: "Caramel Hazelnut Blend", price: 350, desc: "", photo: "/photos/beverages/frappes/caramel-hazelnut-blend.webp" },
        { name: "Biscoff", price: 370, desc: "", photo: "/photos/beverages/frappes/biscoff.webp" },
      ]},
      { group: "Mocktails", dishes: [
        { name: "Orange Basil Cooler", price: 290, desc: "", photo: "/photos/beverages/mocktails/orange-basil-cooler.webp" },
        { name: "Heat & Melon", price: 270, desc: "", photo: "/photos/beverages/mocktails/heat-melon.webp" },
        { name: "Blue Smoke", price: 290, desc: "", photo: "/photos/beverages/mocktails/blue-smoke.webp" },
        { name: "Wild Cat", price: 250, desc: "", photo: "/photos/beverages/mocktails/wild-cat.webp" },
        { name: "Coconut Pine Cooler", price: 330, desc: "", photo: "/photos/beverages/mocktails/coconut-pine-cooler.webp" },
        { name: "Saffron Citrus Spritz", price: 280, desc: "", photo: "/photos/beverages/mocktails/saffron-citrus-spritz.webp" },
        { name: "Berry Blend", price: 270, desc: "", photo: "/photos/beverages/mocktails/berry-blend.webp" },
        { name: "Classic Mojito", price: 230, desc: "", photo: "/photos/beverages/mocktails/classic-mojito.webp" },
      ]},
      { group: "Milkshakes", dishes: [
        { name: "Brownie Indulgence", price: 400, desc: "", photo: "/photos/beverages/milkshakes/brownie-indulgence.webp" },
        { name: "Cream Cookie", price: 400, desc: "", photo: "/photos/beverages/milkshakes/cream-cookie.webp" },
        { name: "Strawberry Cheesecake", price: 400, desc: "", photo: "/photos/beverages/milkshakes/strawberry-cheesecake.webp" },
        { name: "Blueberry Cheesecake", price: 400, desc: "", photo: "/photos/beverages/milkshakes/blueberry-cheesecake.webp" },
      ]},
      { group: "Iced Teas", dishes: [
        { name: "Citrus Iced Tea", price: 280, desc: "", photo: "/photos/beverages/iced-teas/citrus-iced-tea.webp" },
        { name: "Summer Peach Tea", price: 280, desc: "", photo: "/photos/beverages/iced-teas/summer-peach-tea.webp" },
        { name: "Raspberry Iced Tea", price: 280, desc: "", photo: "/photos/beverages/iced-teas/raspberry-iced-tea.webp" },
      ]},
      { group: "Hot Tea", dishes: [
        { name: "Herbal Detox", price: 180, desc: "", photo: "/photos/beverages/hot-tea/herbal-detox.webp" },
        { name: "Green Tea", price: 200, desc: "", photo: "/photos/beverages/hot-tea/green-tea.webp" },
        { name: "Ginger & Lemon Infusion", price: 230, desc: "", photo: "/photos/beverages/hot-tea/ginger-lemon-infusion.webp" },
      ]},
      { group: "Matcha", dishes: [
        { name: "Iced Matcha Latte", price: 320, desc: "Matcha green tea blended with milk and served over ice", photo: "/photos/beverages/matcha/iced-matcha-latte.webp" },
        { name: "Mango Infused Matcha", price: 380, desc: "Matcha green tea blended with mango and served over ice", photo: "/photos/beverages/matcha/mango-infused-matcha.webp" },
        { name: "Infused Strawberry Matcha", price: 380, desc: "Matcha green tea blended with strawberry and served over ice", photo: "/photos/beverages/matcha/infused-strawberry-matcha.webp" },
      ]},
    ],
  },

  // ═══════════════════════════════════════════
  // SUSHI & JAPANESE
  // ═══════════════════════════════════════════
  {
    id: "sushi",
    name: "Sushi & Japanese",
    tagline: "Rolled, sliced, and composed with care",
    icon: "◇",
    accent: "#6B6058",
    countNoun: "plates",
    cover: "/photos/sushi-and-japanese/sushi/non-veg/rainbow-sushi.webp",
    featured: {
      ordered: [
        { name: "Chef Special Avocado Roll", price: 550, desc: "Crunchy tempura, Hass avocado, truffle mayo, spring roll.", tag: "Most ordered", photo: "/photos/sushi-and-japanese/sushi/veg/chef-special-avocado-roll.webp" },
        { name: "Veg California Roll", price: 475, desc: "Cucumber, cream cheese, asparagus wrapped with avocado, goma dressing.", tag: "Most ordered", photo: "/photos/sushi-and-japanese/sushi/veg/veg-california-roll.webp" },
        { name: "Spicy Thai Basil Chicken Dimsum", price: 449, desc: "Crystal dough with Thai basil chicken, coconut-herb reduction.", tag: "Most ordered", photo: "/photos/sushi-and-japanese/spicy-thai-basil-chicken-dimsum.webp" },
      ],
      tryThis: [
        { name: "Rainbow Sushi", price: 850, desc: "Prawn tempura, crab stick, wrapped hamachi, salmon, tuna, teriyaki & spicy sauce.", tag: "Must try", origin: "Named for the way each slice catches light differently.", photo: "/photos/sushi-and-japanese/sushi/non-veg/rainbow-sushi.webp" },
        { name: "Tiger Roll", price: 750, desc: "Tempura soft shell crab, lettuce, tobiko, drizzle with teriyaki sauce.", tag: "Must try", photo: "/photos/sushi-and-japanese/sushi/non-veg/tiger-roll.webp" },
        { name: "Har Gow", price: 499, desc: "Cantonese-style prawn dimsum with coconut & gochujang reduction.", tag: "Must try", photo: "/photos/sushi-and-japanese/har-gow.webp" },
      ],
    },
    items: [
      { group: "Sushi — Veg", dishes: [
        { name: "Asparagus Maki Roll / Cream Cheese", price: 500, desc: "", photo: "/photos/sushi-and-japanese/sushi/veg/asparagus-maki-roll-cream-cheese.webp" },
        { name: "Mexican Hat Boy", price: 450, desc: "Asparagus tempura, cream cheese, spicy sauce, jalapeño", photo: "/photos/sushi-and-japanese/sushi/veg/mexican-hat-boy.webp" },
        { name: "Chef Special Avocado Roll", price: 550, desc: "Crunchy tempura, Hass avocado, truffle mayo, spring roll", photo: "/photos/sushi-and-japanese/sushi/veg/chef-special-avocado-roll.webp" },
        { name: "Veg California Roll", price: 475, desc: "Cucumber, cream cheese, asparagus wrapped with avocado, goma dressing", photo: "/photos/sushi-and-japanese/sushi/veg/veg-california-roll.webp" },
        { name: "Truffle Edamame & Asparagus Roll", price: 450, desc: "Edamame paste, Thai asparagus, tempura crunchy truffle mayo, spring onion", photo: "/photos/sushi-and-japanese/sushi/veg/truffle-edamame-and-asparagus-roll.webp" },
        { name: "Veg Tempura Sushi", price: 525, desc: "Carrot, asparagus, mushroom, furikake, spicy mayo", photo: "/photos/sushi-and-japanese/sushi/veg/veg-tempura-sushi.webp" },
        { name: "Asparagus & Cream Cheese Roll", price: 500, desc: "", photo: "/photos/sushi-and-japanese/sushi/veg/asparagus-and-cream-cheese-roll.webp" },
      ]},
      { group: "Sushi — Non-Veg", dishes: [
        { name: "Salmon Maki Roll", price: 650, desc: "", photo: "/photos/sushi-and-japanese/sushi/non-veg/salmon-maki-roll.webp" },
        { name: "Alaska Roll", price: 700, desc: "Avocado, cream cheese, wrapped salmon, tobiko", photo: "/photos/sushi-and-japanese/sushi/non-veg/alaska-roll.webp" },
        { name: "Tuna Maki Roll", price: 650, desc: "", photo: "/photos/sushi-and-japanese/sushi/non-veg/tuna-maki-roll.webp" },
        { name: "Spicy Tuna Maki Roll", price: 690, desc: "", photo: "/photos/sushi-and-japanese/sushi/non-veg/spicy-tuna-maki-roll.webp" },
        { name: "Rainbow Sushi", price: 850, desc: "Prawn tempura, crab stick, wrapped hamachi, salmon, tuna, teriyaki & spicy sauce", photo: "/photos/sushi-and-japanese/sushi/non-veg/rainbow-sushi.webp" },
        { name: "Ebi Tempura Sushi Roll", price: 600, desc: "", photo: "/photos/sushi-and-japanese/sushi/non-veg/ebi-tempura-sushi-roll.webp" },
        { name: "Classic California Roll", price: 700, desc: "Crab stick, avocado, cucumber, tobiko & wasabi mayo", photo: "/photos/sushi-and-japanese/sushi/non-veg/classic-california-roll.webp" },
        { name: "Tiger Roll", price: 750, desc: "Tempura soft shell crab, lettuce, tobiko, teriyaki sauce", photo: "/photos/sushi-and-japanese/sushi/non-veg/tiger-roll.webp" },
        { name: "Classic Ebi Tempura Sushi", price: 600, desc: "Crab stick & avocado with Japanese mayo and prawn tempura", photo: "/photos/sushi-and-japanese/sushi/non-veg/classic-ebi-tempura-sushi.webp" },
        { name: "Chicken Katsu Sushi", price: 549, desc: "Batter-fried chicken sushi with cream cheese", photo: "/photos/sushi-and-japanese/sushi/non-veg/chicken-katsu-sushi.webp" },
      ]},
      { group: "Nigiri (4 pcs) — Veg", dishes: [
        { name: "Avocado", price: 300, desc: "", photo: "/photos/sushi-and-japanese/nigiri/veg/avocado.webp" },
        { name: "Teriyaki Baby Corn", price: 250, desc: "", photo: "/photos/sushi-and-japanese/nigiri/veg/teriyaki-baby-corn.webp" },
        { name: "Asparagus", price: 250, desc: "", photo: "/photos/sushi-and-japanese/nigiri/veg/asparagus.webp" },
      ]},
      { group: "Nigiri (4 pcs) — Non-Veg", dishes: [
        { name: "Salmon", price: 400, desc: "", photo: "/photos/sushi-and-japanese/nigiri/non-veg/salmon.webp" },
        { name: "Tuna", price: 425, desc: "", photo: "/photos/sushi-and-japanese/nigiri/non-veg/tuna.webp" },
        { name: "Yellowtail", price: 450, desc: "", photo: "/photos/sushi-and-japanese/nigiri/non-veg/yellowtail.webp" },
      ]},
      { group: "Sashimi (3 pcs)", dishes: [
        { name: "Salmon", price: 400, desc: "", photo: "/photos/sushi-and-japanese/sashimi/salmon.webp" },
        { name: "Tuna", price: 425, desc: "", photo: "/photos/sushi-and-japanese/sashimi/tuna.webp" },
        { name: "Yellowtail", price: 450, desc: "", photo: "/photos/sushi-and-japanese/sashimi/yellowtail.webp" },
      ]},
    ],
  },

  // ═══════════════════════════════════════════
  // MAIN COURSE
  // ═══════════════════════════════════════════
  {
    id: "mains",
    name: "Main Course",
    tagline: "Where four cuisines share one kitchen",
    icon: "▣",
    accent: "#805E27",
    countNoun: "dishes",
    cover: "/photos/main-course/burgers/caramelized-lamb-supreme.webp",
    notes: [
      { emoji: "🧑‍🍳", text: "The dough, the pasta and every sauce are made in this kitchen — nothing comes out of a packet." },
    ],
    featured: {
      ordered: [
        { name: "Caramelized Lamb Supreme", price: 650, desc: "Double minced lamb, double cheese, red onion, garlic mayo, pickle veg & caramelized onion.", tag: "Chef’s pick", origin: "The Italian chef’s pride — double-patty, caramelized onion, garlic mayo made fresh daily.", photo: "/photos/main-course/burgers/caramelized-lamb-supreme.webp" },
        { name: "Ravioli Pasta", price: 499, desc: "Homemade ravioli with spinach & cottage cheese. Choice of Alfredo / Pink / Pesto / Arrabbiata.", tag: "Chef’s pick", origin: "Rolled and filled by hand every morning.", photo: "/photos/main-course/pasta/ravioli-pasta.webp" },
        { name: "Romano Margherita", price: 600, desc: "Mozzarella, burrata cheese, bocconcini, tomato, olive, house-made pizza sauce.", tag: "Chef’s pick", origin: "House-made dough, house-made sauce, real burrata.", photo: "/photos/main-course/pizza/veg/romano-margherita.webp" },
        { name: "Spicy Buffalo Pulled Chicken", price: 425, desc: "Sriracha mayo, garlic mayo, fried egg, cheese.", tag: "Chef’s pick", photo: "/photos/main-course/sandwiches/non-veg/spicy-buffalo-pulled-chicken.webp" },
      ],
      tryThis: [
        { name: "Lasagna", price: 499, desc: "Layered baked pasta with pomodori pelati — Veg / Chicken ₹569.", tag: "Must try", origin: "Pomodori pelati — Italian whole peeled tomatoes. Sauce takes 4 hours, bake takes 40 minutes.", photo: "/photos/main-course/pasta/lasagna.webp" },
        { name: "Crumbfried Truffle Mushroom Burger", price: 400, desc: "Sriracha mayo, tonkatsu sauce, lettuce, coleslaw, cheese, fries.", tag: "Must try", photo: "/photos/main-course/burgers/crumbfried-truffle-mushroom-burger.webp" },
        { name: "Veggie Nepolitana Pizza", price: 500, desc: "Mozzarella, burrata, peppers, mushroom, olive, spiced pineapple.", tag: "Must try", photo: "/photos/main-course/pizza/veg/veggie-nepolitana-pizza.webp" },
        { name: "Sloppy Joe", price: 425, desc: "Hoisin chicken, lettuce mayo, caramelized onion, cheddar, pulled chicken.", tag: "Must try", origin: "American comfort food via East Asia — the hoisin marinade makes ours different.", photo: "/photos/main-course/sandwiches/non-veg/sloppy-joe.webp" },
        { name: "Veux Katsu Burger", price: 475, desc: "Panko fried chicken, Asian slaw, fried egg, sriracha mayo, cheese.", tag: "Must try", origin: "Continental meets Japanese in a brioche bun.", photo: "/photos/main-course/burgers/veux-katsu-burger.webp" },
      ],
    },
    items: [
      { group: "Soups", dishes: [
        { name: "Clear Tofu Soup", price: 180, desc: "", photo: "/photos/main-course/soups/clear-tofu-soup.webp" },
        { name: "Tom Yum", price: 180, desc: "Hot & sour, lemongrass, galangal", photo: "/photos/main-course/soups/tom-yum.webp" },
        { name: "Spicy Thai Coconut Soup", price: 200, desc: "Creamy coconut, chilli, herbs", photo: "/photos/main-course/soups/spicy-thai-coconut-soup.webp" },
        { name: "Miso Soup", price: 200, desc: "Dashi, tofu, wakame", photo: "/photos/main-course/soups/miso-soup.webp" },
      ]},
      { group: "Salads — Veg", dishes: [
        { name: "Exotic Asian Green Salad", price: 375, desc: "Creamy wasabi dressing, lettuce, arugula, edamame, asparagus, broccoli", photo: "/photos/main-course/salads/veg/exotic-asian-green-salad.webp" },
        { name: "Silken Tofu Salad", price: 395, desc: "Lettuce, cucumber, cherry tomato, silken tofu, goma dressing, crisp lotus stem", photo: "/photos/main-course/salads/veg/silken-tofu-salad.webp" },
      ]},
      { group: "Salads — Non-Veg", dishes: [
        { name: "Tempura Soft Shell Crab Salad", price: 590, desc: "Lettuce, avocado, cherry tomato, onion, wasabi sesame dressing", photo: "/photos/main-course/salads/non-veg/tempura-soft-shell-crab-salad.webp" },
        { name: "Asian Grilled Chicken Salad", price: 450, desc: "Grilled chicken, tomato, celery, mint, spring onion, house special sauce", photo: "/photos/main-course/salads/non-veg/asian-grilled-chicken-salad.webp" },
        { name: "Yum Woon Sen", price: 500, desc: "Thai glass noodle salad with prawn, black fungus, spicy chilli sauce", photo: "/photos/main-course/salads/non-veg/yum-woon-sen.webp" },
      ]},
      { group: "Appetizers — Veg", dishes: [
        { name: "Veggies Spring Roll", price: 400, desc: "Sweet chilli dip", photo: "/photos/main-course/appetizers/veg/veggies-spring-roll.webp" },
        { name: "Japanese Vegetable Gyoza", price: 380, desc: "Chilli ponzu", photo: "/photos/main-course/appetizers/veg/japanese-vegetable-gyoza.webp" },
        { name: "Kung Pao Tofu Dry", price: 400, desc: "", photo: "/photos/main-course/appetizers/veg/kung-pao-tofu-dry.webp" },
        { name: "Edamame Steamed Truffle (Salted)", price: 400, desc: "", photo: "/photos/main-course/appetizers/veg/edamame-steamed-truffle-salted.webp" },
        { name: "Spicy Baby Potato", price: 400, desc: "", photo: "/photos/main-course/appetizers/veg/spicy-baby-potato.webp" },
        { name: "Lemongrass Mock Meat", price: 400, desc: "Spicy chilli dip", photo: "/photos/main-course/appetizers/veg/lemongrass-mock-meat.webp" },
        { name: "Crispy Lotus Stem & Water Chestnut", price: 400, desc: "", photo: "/photos/main-course/appetizers/veg/crispy-lotus-stem-water-chestnut.webp" },
        { name: "Teriyaki Miso Eggplant", price: 400, desc: "", photo: "/photos/main-course/appetizers/veg/teriyaki-miso-eggplant.webp" },
        { name: "Vietnamese Rice Paper Roll", price: 299, desc: "Grilled cottage cheese & seasonal greens, peanut sauce", photo: "/photos/main-course/appetizers/veg/vietnamese-rice-paper-roll.webp" },
        { name: "Exotic Asian Veg & Cheese Dimsum (4pc)", price: 399, desc: "Crystal dough — water chestnut, bokchoy, broccoli, cheese, green curry reduction", photo: "/photos/main-course/appetizers/veg/exotic-asian-veg-cheese-dimsum.webp" },
        { name: "Thai Style Tofu Satay", price: 329, desc: "Extra firm tofu, Thai herbs, lime, coconut, peanut sauce", photo: "/photos/main-course/appetizers/veg/thai-style-tofu-satay.webp" },
        { name: "Bruschetta (4pc)", price: 299, desc: "Avocado or tomato salsa on toasted bread — Non-veg ₹349", photo: "/photos/main-course/appetizers/veg/bruschetta-4pc.webp" },
        { name: "Arancini (Sicilian Rice Balls)", price: 349, desc: "Crispy mozzarella-filled risotto balls, marinara", photo: "/photos/main-course/appetizers/veg/arancini-sicilian-rice-balls.webp" },
      ]},
      { group: "Appetizers — Non-Veg", dishes: [
        { name: "Thai Chicken Satay", price: 450, desc: "Peanut sauce", photo: "/photos/main-course/appetizers/non-veg/thai-chicken-satay.webp" },
        { name: "Thai Style Chilli Chicken", price: 450, desc: "", photo: "/photos/main-course/appetizers/non-veg/thai-style-chilli-chicken.webp" },
        { name: "Japanese Chicken Gyoza", price: 450, desc: "Chilli ponzu dip", photo: "/photos/main-course/appetizers/non-veg/japanese-chicken-gyoza.webp" },
        { name: "Sichuan Mala Chicken", price: 500, desc: "", photo: "/photos/main-course/appetizers/non-veg/sichuan-mala-chicken.webp" },
        { name: "Leeks and Chicken Skewers", price: 500, desc: "", photo: "/photos/main-course/appetizers/non-veg/leeks-and-chicken-skewers.webp" },
        { name: "Panko Crumbed Prawn", price: 500, desc: "Japanese tartare sauce", photo: "/photos/main-course/appetizers/non-veg/panko-crumbed-prawn.webp" },
        { name: "Chilli Basil Prawn", price: 550, desc: "", photo: "/photos/main-course/appetizers/non-veg/chilli-basil-prawn.webp" },
        { name: "Wasabi Prawn", price: 550, desc: "", photo: "/photos/main-course/appetizers/non-veg/wasabi-prawn.webp" },
        { name: "Thai Fish Cake", price: 550, desc: "", photo: "/photos/main-course/appetizers/non-veg/thai-fish-cake.webp" },
        { name: "Crispy Tempura Calamari (Squid)", price: 550, desc: "", photo: "/photos/main-course/appetizers/non-veg/crispy-tempura-calamari-squid.webp" },
        { name: "Crispy Soft Shell Crab", price: 600, desc: "Chilli garlic", photo: "/photos/main-course/appetizers/non-veg/crispy-soft-shell-crab.webp" },
        { name: "Almond Prawn Roll (4pc)", price: 459, desc: "Chopped prawns, crushed almonds, sesame oil, spring onion, spring sheet", photo: "/photos/main-course/appetizers/non-veg/almond-prawn-roll.webp" },
        { name: "7 Spice Chicken", price: 399, desc: "Tempura-battered fried chicken, Japanese spices", photo: "/photos/main-course/appetizers/non-veg/seven-spice-chicken.webp" },
        { name: "Prawn Tempura with Ponzu", price: 499, desc: "Crispy tempura prawns, soy dip", photo: "/photos/main-course/appetizers/non-veg/prawn-tempura-with-ponzu.webp" },
        { name: "Chicken Katsu with Tonkatsu Dip", price: 450, desc: "Crumb-fried chicken breast, Japanese slaw, tonkatsu dip", photo: "/photos/main-course/appetizers/non-veg/chicken-katsu-with-tonkatsu-dip.webp" },
        { name: "Spicy Thai Basil Chicken Dimsum (4pc)", price: 449, desc: "Crystal dough, Thai basil chicken, coconut-herb reduction", photo: "/photos/main-course/appetizers/non-veg/spicy-thai-basil-chicken-dimsum.webp" },
        { name: "Har Gow (Prawns Dimsum) (4pc)", price: 499, desc: "Cantonese-style prawn dimsum, coconut & gochujang reduction", photo: "/photos/main-course/appetizers/non-veg/har-gow.webp" },
        { name: "Malaysian Style Chicken", price: 399, desc: "Fried julienned chicken, bell peppers, peanuts, spinach, green chilli sauce", photo: "/photos/main-course/appetizers/non-veg/malaysian-style-chicken.webp" },
        { name: "Chicken Nuggets (2pc)", price: 349, desc: "Cheese-filled crumb-fried chicken breast, greens, tartar sauce", photo: "/photos/main-course/appetizers/non-veg/chicken-nuggets.webp" },
      ]},
      { group: "Curry — Veg", dishes: [
        { name: "Stir Fry Aubergine in Thai Chilli Sauce", price: 380, desc: "", photo: "/photos/main-course/curry/veg/stir-fry-aubergine-in-thai-chilli-sauce.webp" },
        { name: "Assorted Wild Mushroom in Ginger Soy Sauce", price: 450, desc: "", photo: "/photos/main-course/curry/veg/assorted-wild-mushroom-in-ginger-soy-sauce.webp" },
        { name: "Stir Fry Asian Green in Butter Garlic Sauce", price: 450, desc: "", photo: "/photos/main-course/curry/veg/stir-fry-asian-green-in-butter-garlic-sauce.webp" },
        { name: "Wok Tossed Mock Meat in Thai Chilli Paste", price: 450, desc: "", photo: "/photos/main-course/curry/veg/wok-tossed-mock-meat-in-thai-chilli-paste.webp" },
        { name: "Stir Fry Tofu with Cashew Nut", price: 500, desc: "", photo: "/photos/main-course/curry/veg/stir-fry-tofu-with-cashew-nut.webp" },
        { name: "Stir Fry Baby Bokchoy, Bamboo Shoot & Broccoli", price: 450, desc: "Soy garlic sauce", photo: "/photos/main-course/curry/veg/stir-fry-baby-bokchoy-bamboo-shoot-broccoli.webp" },
      ]},
      { group: "Curry — Non-Veg", dishes: [
        { name: "Pad Karpow Gai (Minced Chicken Chilli Basil)", price: 525, desc: "", photo: "/photos/main-course/curry/non-veg/pad-karpow-gai-minced-chicken-chilli-basil.webp" },
        { name: "Stir Fried Chicken With Cashew Nut", price: 525, desc: "", photo: "/photos/main-course/curry/non-veg/stir-fried-chicken-with-cashew-nut.webp" },
        { name: "Kung Pao Chicken", price: 500, desc: "", photo: "/photos/main-course/curry/non-veg/kung-pao-chicken.webp" },
        { name: "Stir Fried Chicken in Chilli Black Bean Sauce", price: 525, desc: "", photo: "/photos/main-course/curry/non-veg/stir-fried-chicken-in-chilli-black-bean-sauce.webp" },
        { name: "Stir Fried Prawn in Chilli Basil Sauce", price: 600, desc: "", photo: "/photos/main-course/curry/non-veg/stir-fried-prawn-in-chilli-basil-sauce.webp" },
        { name: "Wok Tossed Sea Bass in Thai Chilli Sauce", price: 600, desc: "", photo: "/photos/main-course/curry/non-veg/wok-tossed-sea-bass-in-thai-chilli-sauce.webp" },
        { name: "Wok Tossed Lamb in Chilli Black Bean Sauce", price: 700, desc: "", photo: "/photos/main-course/curry/non-veg/wok-tossed-lamb-in-chilli-black-bean-sauce.webp" },
      ]},
      { group: "Pasta", dishes: [
        { name: "Penne (Choice of Sauce)", price: 400, desc: "Alfredo, arrabiata, or creamy pesto", photos: ["/photos/main-course/pasta/penne-pesto.webp", "/photos/main-course/pasta/penne-arrabiata.webp", "/photos/main-course/pasta/penne-alfredo.webp"] },
        { name: "Fettuccine (Choice of Sauce)", price: 450, desc: "Creamy pesto, pomodoro, or alfredo", photos: ["/photos/main-course/pasta/fettuccine-pesto.webp", "/photos/main-course/pasta/fettuccine-arrabiata.webp", "/photos/main-course/pasta/fettuccine-alfredo.webp"] },
        { name: "Spaghetti (Choice of Sauce)", price: 450, desc: "Alfredo, arrabiata, creamy pesto, or aglio olio", photos: ["/photos/main-course/pasta/spaghetti-pesto.webp", "/photos/main-course/pasta/spaghetti-arrabiata.webp", "/photos/main-course/pasta/spaghetti-alfredo.webp"] },
        { name: "Macaroni", price: 500, desc: "Baked in triple cheese sauce", photo: "/photos/main-course/pasta/macaroni.webp" },
        { name: "Tortellini Pasta", price: 499, desc: "Homemade — soft potato & cream. Alfredo / Pink / Pesto / Arrabbiata", photo: "/photos/main-course/pasta/tortellini-pasta.webp" },
        { name: "Ravioli Pasta", price: 499, desc: "Homemade — spinach & cottage cheese. Alfredo / Pink / Pesto / Arrabbiata", photo: "/photos/main-course/pasta/ravioli-pasta.webp" },
        { name: "Lasagna", price: 499, desc: "Layered baked pasta, pomodori pelati — Veg / Chicken ₹569", photo: "/photos/main-course/pasta/lasagna.webp" },
      ]},
      { group: "Pizza — Veg", dishes: [
        { name: "Asian Green", price: 600, desc: "Pizza sauce, Asian wok-tossed vegetable, cheese", photo: "/photos/main-course/pizza/veg/asian-green.webp" },
        { name: "Peri Peri Cottage Cheese", price: 550, desc: "Spiced cottage cheese, cheese, marinara", photo: "/photos/main-course/pizza/veg/peri-peri-cottage-cheese.webp" },
        { name: "Romano Margherita", price: 600, desc: "Mozzarella, burrata, bocconcini, tomato, olive, pizza sauce", photo: "/photos/main-course/pizza/veg/romano-margherita.webp" },
        { name: "Veggie Nepolitana", price: 500, desc: "Mozzarella, burrata, peppers, cherry tomato, mushroom, olive, spiced pineapple", photo: "/photos/main-course/pizza/veg/veggie-nepolitana.webp" },
        { name: "Simply Cheese", price: 550, desc: "Mozzarella, orange cheese, parmesan", photo: "/photos/main-course/pizza/veg/simply-cheese.webp" },
      ]},
      { group: "Pizza — Non-Veg", dishes: [
        { name: "Thai Chilli Chicken", price: 600, desc: "Mozzarella, Thai chilli chicken, onion, red pepper, paprika", photo: "/photos/main-course/pizza/non-veg/thai-chilli-chicken.webp" },
        { name: "Hawaiian Delicacy", price: 600, desc: "Mozzarella, bechamel, smoked chicken breast, spiced pineapple", photo: "/photos/main-course/pizza/non-veg/hawaiian-delicacy.webp" },
        { name: "Chilli Garlic Shrimp", price: 700, desc: "Wok tossed chilli garlic shrimp, feta crumble, mozzarella, peppers, onions", photo: "/photos/main-course/pizza/non-veg/chilli-garlic-shrimp.webp" },
      ]},
      { group: "Burgers", dishes: [
        { name: "Crumbfried Truffle Mushroom", price: 400, desc: "Veg — sriracha mayo, tonkatsu sauce, lettuce, coleslaw, cheese, fries", photo: "/photos/main-course/burgers/crumbfried-truffle-mushroom.webp" },
        { name: "Cottage Cheese", price: 400, desc: "Veg — grilled, kimchi, kewpie mayo, lettuce, cheese, caramelized onion, fries", photo: "/photos/main-course/burgers/cottage-cheese.webp" },
        { name: "Veux Katsu", price: 475, desc: "Non-veg — panko fried chicken, Asian slaw, fried egg, sriracha mayo, cheese", photo: "/photos/main-course/burgers/veux-katsu.webp" },
        { name: "Basil Chicken Mince", price: 500, desc: "Non-veg — grilled minced chicken patty, garlic mayo, cheese, Asian slaw, caramelized onion", photo: "/photos/main-course/burgers/basil-chicken-mince.webp" },
        { name: "Caramelized Lamb Supreme", price: 650, desc: "Non-veg — double minced lamb, double cheese, red onion, garlic mayo, pickle veg, caramelized onion", photo: "/photos/main-course/burgers/caramelized-lamb-supreme.webp", video: "/videos/burger-making.mp4" },
      ]},
      { group: "Sandwiches", dishes: [
        { name: "Grilled Veg Croissant Sandwich", price: 325, desc: "Veg — pesto mayo, peri peri grilled veg, 3 cheese, lettuce", photo: "/photos/main-course/sandwiches/veg/grilled-veg-croissant-sandwich.webp" },
        { name: "Smoked Cottage Cheese in Focaccia", price: 350, desc: "Veg — garlic mayo, lettuce, pickled veg, caramelized onion, cheese", photo: "/photos/main-course/sandwiches/veg/smoked-cottage-cheese-in-focaccia.webp" },
        { name: "Japanese Egg Sandwich", price: 299, desc: "Japanese omelette, multigrain bread, herb butter, lettuce, pumpkin crackers", photo: "/photos/main-course/sandwiches/non-veg/japanese-egg-sandwich.webp" },
        { name: "Egg Mustard Sandwich", price: 299, desc: "Boiled egg, Dijon mustard, multigrain bread, pumpkin crackers", photo: "/photos/main-course/sandwiches/non-veg/egg-mustard-sandwich.webp", video: "/videos/egg-mustard-sandwich.mp4" },
        { name: "Sloppy Joe", price: 425, desc: "Non-veg — hoisin chicken, lettuce mayo, caramelized onion, cheddar, pulled chicken", photo: "/photos/main-course/sandwiches/non-veg/sloppy-joe.webp" },
        { name: "Creole Chicken in Croissant", price: 425, desc: "Non-veg — sriracha & pesto mayo, lettuce, kimchi, cheddar, caramelized onion", photo: "/photos/main-course/sandwiches/non-veg/creole-chicken-in-croissant.webp" },
        { name: "Spicy Buffalo Pulled Chicken", price: 425, desc: "Non-veg — sriracha mayo, garlic mayo, fried egg, cheese", photo: "/photos/main-course/sandwiches/non-veg/spicy-buffalo-pulled-chicken.webp" },
      ]},
      { group: "Rice & Noodles", dishes: [
        { name: "Olive and Edamame Fried Rice", price: 500, desc: "Veg", photo: "/photos/main-course/rice-and-noodles/olive-and-edamame-fried-rice.webp" },
        { name: "Blue Pea Exotic Veg Fried Rice", price: 450, desc: "Blue pea jasmine rice, edamame & vegetables", photo: "/photos/main-course/rice-and-noodles/blue-pea-exotic-fried-rice.webp" },
        { name: "Seafood Spicy XO Fried Rice", price: 650, desc: "Non-veg", photo: "/photos/main-course/rice-and-noodles/seafood-spicy-xo-fried-rice.webp" },
        { name: "Korean Kimchi Fried Rice", price: 500, desc: "", photo: "/photos/main-course/rice-and-noodles/korean-kimchi-fried-rice.webp" },
        { name: "Khao Pad Kar Pow", price: 500, desc: "Spicy Thai basil fried rice", photo: "/photos/main-course/rice-and-noodles/khao-pad-kar-pow.webp" },
        { name: "Garlic Fried Rice", price: 450, desc: "", photo: "/photos/main-course/rice-and-noodles/garlic-fried-rice.webp" },
        { name: "Steamed Jasmine Rice (Half / Full)", price: 250, desc: "Full ₹350", photo: "/photos/main-course/rice-and-noodles/steamed-jasmine-rice.webp" },
        { name: "Drunken Noodle", price: 500, desc: "Thai style chilli basil noodle", photo: "/photos/main-course/rice-and-noodles/drunken-noodle.webp" },
        { name: "Pad Thai Noodle", price: 500, desc: "", photo: "/photos/main-course/rice-and-noodles/pad-thai-noodle.webp" },
        { name: "Street Hakka Noodle", price: 450, desc: "", photo: "/photos/main-course/rice-and-noodles/street-hakka-noodle.webp" },
        { name: "Pan Fried Noodles Hunan Style", price: 350, desc: "Hunan sauce — Exotic greens / Chicken ₹450", photo: "/photos/main-course/rice-and-noodles/pan-fried-noodles-hunan-style.webp" },
        { name: "Udon Noodles with Chilli Black Bean", price: 450, desc: "Veg / Chicken ₹500 / Seafood ₹550", photo: "/photos/main-course/rice-and-noodles/udon-noodles.webp" },
      ]},
      { group: "Around the World", dishes: [
        { name: "Mexican Tacos (3pc)", price: 299, desc: "Veg or Chicken ₹399, with sour cream", photo: "/photos/main-course/around-the-world/mexican-tacos.webp" },
        { name: "Mexican Rice Bowl", price: 399, desc: "Pomodori pelati sauce — Veg / Chicken ₹499 / Prawns ₹599", photo: "/photos/main-course/around-the-world/mexican-rice-bowl.webp" },
        { name: "Falafel with Hummus (5pc)", price: 499, desc: "Crispy chickpea falafel served with hummus", photo: "/photos/main-course/around-the-world/falafel-with-hummus.webp" },
        { name: "Chicken Nuggets (2pc)", price: 349, desc: "Cheese-filled crumb-fried chicken breast, greens, tartar sauce", photo: "/photos/main-course/appetizers/non-veg/chicken-nuggets.webp" },
      ]},
    ],
  },

  // ═══════════════════════════════════════════
  // DESSERTS
  // ═══════════════════════════════════════════
  {
    id: "desserts",
    name: "Desserts",
    tagline: "Where Baker’s Castle meets the unexpected",
    icon: "❋",
    accent: "#6B2238",
    countNoun: "sweets",
    cover: "/photos/desserts/classic-tiramisu.webp",
    // A single featured strip (a plain list, not ordered/tryThis).
    featuredTitle: "Worth Saving Room For",
    featured: [
      { name: "The Chocolate Affair", price: 450, desc: "Layers of dark chocolate mousse, ganache, and a molten centre.", tag: "Indulgent", origin: "Born in Baker’s Castle — our parent bakery’s most requested creation.", photo: "/photos/desserts/the-chocolate-affair.webp" },
      { name: "Classic Tiramisu", price: 400, desc: "Mascarpone, espresso-soaked ladyfingers, and a dusting of cocoa.", tag: "Timeless", origin: "From Treviso, Italy. We use our own single-origin espresso in the soak.", photo: "/photos/desserts/classic-tiramisu.webp" },
    ],
    items: [
      { name: "Matcha Cheesecake", price: 420, desc: "Baked Japanese-style, lighter than you’d expect", photo: "/photos/desserts/matcha-cheesecake.webp" },
      { name: "Biscoff Cheesecake", price: 420, desc: "Speculoos crust, Biscoff cream layers", photo: "/photos/desserts/biscoff-cheesecake.webp" },
    ],
  },
];

export default menu;
