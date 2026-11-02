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
 *   diet    (optional)  "Vegetarian" or "Non-vegetarian". Shows as a coloured
 *                       square in the list and as a chip in the dish view.
 *                       Allergen wording does NOT belong here — see the chef.
 *   allergens (optional) Only what the chef has confirmed. Any of:
 *                         allergens: ["gluten", "milk"]
 *                       gluten → Contains Wheat/Rye/Barley/Oats
 *                       nuts   → Contains Nuts
 *                       egg    → Contains Egg
 *                       milk   → Contains Milk
 *                       soy    → Contains Soy
 *                       Shows as symbols in the list, with the wording in
 *                       the dish view, and adds the legend to the page foot.
 *   variants(optional)  A second price, for dishes served more than one way:
 *                         variants: [{ label: "Chicken", price: 569 }]
 *                       Add supplement: true when the number is an add-on
 *                       rather than a full price — it renders as "+ ₹ 100".
 *                       Never leave a second price inside desc.
 *
 * A dish with no photo is NOT broken — it shows a gold clover tile instead.
 * Drop the file in at the exact path above and it appears automatically.
 *
 * ---------------------------------------------------------------------------
 * WHAT A CATEGORY HAS
 * ---------------------------------------------------------------------------
 *   id         The web address: id "sushi" lives at /menu/sushi.
 *              CHANGING AN id BREAKS ANY PRINTED QR CODE POINTING AT IT.
 *   name, tagline
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
 *   #787068 slate   — the faint grey, darkened to pass WCAG AA on cream.
 *   #8A6C2D deep gold — the Beverages accent, likewise darkened for contrast.
 *   #1E7A1E veg green — reserved. The vegetarian mark only, never decoration:
 *                       guests read it as the standard Indian veg symbol, so
 *                       it has to stay the colour they expect. Non-vegetarian
 *                       uses the aubergine above.
 *
 * Note: the "[S]" markers from the seasonal insert have been removed from the
 * customer-facing descriptions, as they were never meant to be read by guests.
 * ═══════════════════════════════════════════════════════════════════════════ */

/* Restaurant details shown on the home screen and in the footer. */
export const site = {
  name: "Veux Gourmet Eatery",
  tagline: "The Infinite Craving",
  descriptor: "All-Day Café · Pan-Asian Kitchen",
  hours: "Open daily · 11:30 AM — 10:30 PM",
  city: "Siripuram, Visakhapatnam",

  // TODO — ask Krishna. Shown to a guest whose phone has JavaScript
  // turned off, which is the one case where they cannot read the menu
  // on screen and need to call or ask for a printed one. Write it the
  // way you would dial it: "+91 98765 43210".
  phone: null,

  // TODO — the address this menu is deployed at, e.g. "https://menu.veux.in".
  // Only used to make the WhatsApp link preview absolute; the site works
  // without it.
  url: null,

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
    accent: "#45111F",
    eyebrow: "Signature",
    countNoun: "plates",
    cover: "/photos/chefs-table/massaman-curry-lamb.webp",
    notes: [
      { emoji: "🔥", text: "Every reduction curry spends thirty minutes on a low flame — the time the sauce needs to tighten and the flavour to gather." },
    ],
    featured: {
      ordered: [
        { name: "Chef Special Avocado Roll", price: 550, desc: "Hass avocado, crunchy tempura crumb, truffle mayo. The rich one on the veg side.", tag: "Most ordered", origin: "The chef’s personal creation — built around the best Hass avocados, finished with truffle mayo.", photo: "/photos/sushi-and-japanese/sushi/veg/chef-special-avocado-roll.webp" },
        { name: "7 Spice Chicken", price: 399, desc: "Tempura-battered fried chicken, togarashi dust.", tag: "Most ordered", origin: "Seven spices, each from a different corner of Japan — sansho, ginger, nori, sesame, citrus peel, shiso, and poppy seed.", photo: "/photos/main-course/appetizers/non-veg/seven-spice-chicken.webp" },
        { name: "Vietnamese Rice Paper Roll", price: 299, desc: "Grilled paneer and seasonal greens in rice paper. Peanut sauce. No fry.", tag: "Most ordered", origin: "Fresh, not fried. The rice paper stays translucent so you see exactly what you’re eating.", photo: "/photos/main-course/appetizers/veg/vietnamese-rice-paper-roll.webp" },
        { name: "Exotic Asian Veg & Cheese Dimsum (4pc)", price: 399, desc: "Steamed — vegetables, water chestnut, cheese filling. Green curry reduction.", diet: "Vegetarian", tag: "Most ordered", origin: "The translucent crystal dough is made from starch — steamed until it turns glassy.", photo: "/photos/main-course/appetizers/veg/exotic-asian-veg-cheese-dimsum.webp" },
      ],
      tryThis: [
        { name: "Massaman Curry Lamb", price: 700, desc: "Slow-cooked lamb in massaman paste, coconut milk, peanut, potato. The heaviest curry on the menu. Thai-Malay crossover.", tag: "Must try", origin: "From the kitchens of Southern Thailand — a Muslim-Thai crossover that became a royal favourite.", photo: "/photos/chefs-table/massaman-curry-lamb.webp" },
        { name: "Blue Pea Exotic Veg Fried Rice", price: 450, desc: "Jasmine rice coloured with butterfly pea flower. Edamame, seasonal vegetables. Looks vivid, tastes clean.", diet: "Vegetarian", tag: "Must try", origin: "The blue comes from butterfly pea flower — zero dye, zero gimmick.", photo: "/photos/main-course/rice-and-noodles/blue-pea-exotic-fried-rice.webp" },
        { name: "Salmon Carpaccio", price: 800, desc: "Thin-sliced raw salmon, jalapeño, microgreens, onion dressing. Plated cold.", tag: "Must try", origin: "Italian technique, Japanese-grade salmon. Carpaccio was invented at Harry’s Bar in Venice in 1950, for a countess whose doctor had told her to avoid cooked meat.", photo: "/photos/chefs-table/salmon-carpaccio.webp" },
        { name: "Har Gow (Prawns Dimsum) (4pc)", price: 499, desc: "Translucent-skinned prawn dimsum, Cantonese style. Coconut-gochujang dip.", diet: "Non-vegetarian", tag: "Must try", origin: "The pleats on a har gow test a dim sum chef’s skill — tradition says at least seven folds.", photo: "/photos/main-course/appetizers/non-veg/har-gow.webp" },
      ],
    },
    items: [
      { name: "Salmon Carpaccio", price: 800, desc: "Thin-sliced raw salmon, jalapeño, microgreens, onion dressing. Plated cold.", photo: "/photos/chefs-table/salmon-carpaccio.webp" },
      { name: "Tuna Carpaccio", price: 850, desc: "Thin-sliced raw tuna, tri-pepper, spring onion, togarashi. Yuzu dressing. Sharper than the salmon.", photo: "/photos/chefs-table/tuna-carpaccio.webp" },
      { name: "Thai Green Curry with Steamed Jasmine Rice", price: 550, variants: [{ label: "Chicken", price: 100, supplement: true }, { label: "Prawn", price: 125, supplement: true }], desc: "Green curry paste, coconut milk, Thai basil, seasonal vegetables. Served with steamed jasmine rice.", photo: "/photos/chefs-table/thai-green-curry-with-steamed-jasmine-rice.webp" },
      { name: "Thai Red Curry with Steamed Jasmine Rice", price: 550, variants: [{ label: "Chicken", price: 100, supplement: true }, { label: "Prawn", price: 125, supplement: true }], desc: "Red curry paste, coconut milk, bamboo shoot, kaffir lime. Served with steamed jasmine rice.", photo: "/photos/chefs-table/thai-red-curry-with-steamed-jasmine-rice.webp" },
      { name: "Massaman Curry Lamb", price: 700, desc: "Slow-cooked lamb in massaman paste, coconut milk, peanut, potato. The heaviest curry on the menu. Thai-Malay crossover.", photo: "/photos/chefs-table/massaman-curry-lamb.webp" },
    ],
  },

  // ═══════════════════════════════════════════
  // BEVERAGES
  // ═══════════════════════════════════════════
  {
    id: "beverages",
    name: "Beverages",
    tagline: "Brewed, shaken, poured — never boring",
    accent: "#8A6C2D",
    countNoun: "pours",
    // The signature pours have not been shot yet; the cappuccino stands in.
    // It is also the most on-brand tile available now that the landing page
    // leads with "All-Day Café".
    cover: "/photos/beverages/hot-coffees/classic-cappuccino.webp",
    featured: {
      ordered: [
        { name: "Biscoff Latte", price: 280, desc: "Biscoff spread blended into espresso and steamed milk. Speculoos in a cup.", diet: "Vegetarian", tag: "Top pick", origin: "The Belgian cookie meets Italian espresso.", photo: "/photos/beverages/lattes/biscoff-latte.webp" },
        { name: "Coconut Pine Cooler", price: 330, desc: "Pineapple, coconut milk and coconut syrup with blue curaçao. Finished with fresh cream.", diet: "Vegetarian", tag: "Top pick", origin: "The blue is curaçao — orange-peel syrup, which puts a note of citrus under the coconut.", photo: "/photos/beverages/mocktails/coconut-pine-cooler.webp" },
        { name: "Tropical Punch", price: 350, desc: "Orange, cranberry, pineapple and mango over ice cream. Thick and cold.", diet: "Vegetarian", tag: "Top pick", origin: "Most fruit punches lead with one juice. This one pours all four in equal measure.", photo: "/photos/beverages/signature/tropical-punch.webp" },
      ],
      tryThis: [
        { name: "Cinnamon Brew", price: 350, desc: "Espresso, steamed milk and cinnamon under a foam cap. Hot or iced.", diet: "Vegetarian", tag: "Must try", origin: "The iced version is built stronger — more coffee, more cinnamon — because cold flattens both.", photo: "/photos/beverages/signature/cinnamon-brew.webp" },
        { name: "Cranberry Cold Brew", price: 280, desc: "Cold brew cut with cranberry juice. Tart against the smooth.", diet: "Vegetarian", tag: "Must try", origin: "Cold brew is steeped, never heated, which is why it reads smooth rather than sharp. The cranberry puts the edge back.", photo: "/photos/beverages/cold-brews/cranberry-cold-brew.webp" },
        { name: "Blueberry Cheesecake", price: 400, desc: "Blueberry, cream cheese and biscuit crumble in a glass.", diet: "Vegetarian", tag: "Must try", origin: "A dessert worked backwards into a glass. The cream cheese is the whole difference between this and a blueberry milkshake.", photo: "/photos/beverages/milkshakes/blueberry-cheesecake.webp" },
      ],
    },
    items: [
      { group: "Signature", dishes: [
        { name: "Saigon Brew", price: 350, desc: "Condensed milk under a double shot, over ice. Vietnamese style.", diet: "Vegetarian", photo: "/photos/beverages/signature/saigon-brew.webp" },
        { name: "Cinnamon Brew", price: 350, desc: "Espresso, steamed milk and cinnamon under a foam cap. Hot or iced.", diet: "Vegetarian", photo: "/photos/beverages/signature/cinnamon-brew.webp" },
        { name: "Tropical Punch", price: 350, desc: "Orange, cranberry, pineapple and mango over ice cream. Thick and cold.", diet: "Vegetarian", photo: "/photos/beverages/signature/tropical-punch.webp" },
        { name: "Signature Hot Chocolate", price: 400, desc: "Melted chocolate, milk, fresh cream and a hazelnut finish.", diet: "Vegetarian", photo: "/photos/beverages/signature/signature-hot-chocolate.webp" },
        { name: "Hot Chocolate", price: 350, desc: "Melted chocolate, milk and fresh cream. Thick, not powdery.", diet: "Vegetarian", photo: "/photos/beverages/signature/hot-chocolate.webp" },
      ]},
      { group: "Hot Coffees", dishes: [
        { name: "Single Origin Espresso", price: 130, desc: "A single 30 ml shot. Nothing added.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/single-origin-espresso.webp" },
        { name: "Double Espresso", price: 150, desc: "Two shots, 60 ml. No milk.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/double-espresso.webp" },
        { name: "Americano", price: 180, desc: "A shot of espresso lengthened with 180 ml hot water.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/americano.webp" },
        { name: "Classic Cappuccino", price: 220, desc: "A single shot under 100 ml of steamed milk and fine microfoam.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/classic-cappuccino.webp" },
        { name: "Latte", price: 230, desc: "A shot of espresso in 120 ml steamed milk. Milkier than the cappuccino.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/latte.webp" },
        { name: "House Mocha", price: 260, desc: "Espresso, dark chocolate, steamed milk. The sweet one.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/house-mocha.webp" },
        { name: "Hazelnut Velvet", price: 260, desc: "Hazelnut syrup, espresso, steamed milk.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/hazelnut-velvet.webp" },
        { name: "Biscoff Latte", price: 280, desc: "Biscoff spread blended into espresso and steamed milk. Speculoos in a cup.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/biscoff-latte.webp" },
        { name: "Nutella Cappuccino", price: 280, desc: "Nutella blended into espresso and steamed milk.", diet: "Vegetarian", photo: "/photos/beverages/hot-coffees/nutella-cappuccino.webp" },
      ]},
      { group: "On The Rocks", dishes: [
        { name: "Iced Long Black", price: 200, desc: "A double shot over 210 ml cold water and ice. No milk.", diet: "Vegetarian", photo: "/photos/beverages/on-the-rocks/iced-long-black.webp" },
        { name: "Iced Over Coffee", price: 220, desc: "Espresso over cold soda and ice. Sharp and fizzy.", diet: "Vegetarian", photo: "/photos/beverages/on-the-rocks/iced-over-coffee.webp" },
        { name: "Iced Velvet Latte", price: 280, desc: "Espresso, cold milk, ice, and a cap of velvet foam.", diet: "Vegetarian", photo: "/photos/beverages/on-the-rocks/iced-velvet-latte.webp" },
        { name: "Iced House Mocha", price: 300, desc: "Espresso, chocolate and cold milk over ice, finished with foam.", diet: "Vegetarian", photo: "/photos/beverages/on-the-rocks/iced-house-mocha.webp" },
        { name: "Veux Cold Coffee", price: 320, desc: "Espresso, milk and ice cream, blended thick.", diet: "Vegetarian", photo: "/photos/beverages/on-the-rocks/veux-cold-coffee.webp" },
        { name: "Signature Frappe", price: 320, desc: "Espresso, milk and ice cream with Irish syrup, blended thick.", diet: "Vegetarian", photo: "/photos/beverages/on-the-rocks/signature-frappe.webp" },
      ]},
      { group: "Cold Brews", dishes: [
        { name: "Classic Cold Brew", price: 250, desc: "Steeped cold for hours, never heated. Served long over ice.", diet: "Vegetarian", photo: "/photos/beverages/cold-brews/classic-cold-brew.webp" },
        { name: "Peach Cold Brew", price: 280, desc: "Cold brew with peach. A lighter, sweeter cup.", diet: "Vegetarian", photo: "/photos/beverages/cold-brews/peach-cold-brew.webp" },
        { name: "Cranberry Cold Brew", price: 280, desc: "Cold brew cut with cranberry juice. Tart against the smooth.", diet: "Vegetarian", photo: "/photos/beverages/cold-brews/cranberry-cold-brew.webp" },
        { name: "Orange Cold Brew", price: 280, desc: "Cold brew and orange juice in equal measure. Citrus-forward.", diet: "Vegetarian", photo: "/photos/beverages/cold-brews/orange-cold-brew.webp" },
      ]},
      { group: "Frappes", dishes: [
        { name: "Mocha", price: 350, desc: "Chocolate, espresso, milk and ice cream, blended.", diet: "Vegetarian", photo: "/photos/beverages/frappes/mocha.webp" },
        { name: "Brownie Blend", price: 370, desc: "Blended with a whole brownie, chocolate, espresso and ice cream.", diet: "Vegetarian", photo: "/photos/beverages/frappes/brownie-blend.webp" },
        { name: "Cookies & Cream", price: 350, desc: "Cookie syrup, caramel, espresso and ice cream, blended.", diet: "Vegetarian", photo: "/photos/beverages/frappes/cookies-cream.webp" },
        { name: "Caramel Hazelnut Blend", price: 350, desc: "Caramel and hazelnut blended with espresso and ice cream.", diet: "Vegetarian", photo: "/photos/beverages/frappes/caramel-hazelnut-blend.webp" },
        { name: "Biscoff", price: 370, desc: "Biscoff blended with espresso and ice cream.", diet: "Vegetarian", photo: "/photos/beverages/frappes/biscoff.webp" },
      ]},
      { group: "Mocktails", dishes: [
        { name: "Orange Basil Cooler", price: 290, desc: "Fresh orange and basil, apricot syrup, over soda.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/orange-basil-cooler.webp" },
        { name: "Heat & Melon", price: 270, desc: "Watermelon and jalapeño with mint, over soda. The heat is deliberate.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/heat-melon.webp" },
        { name: "Blue Smoke", price: 290, desc: "Blueberry and mint over soda, finished with fresh rosemary.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/blue-smoke.webp" },
        { name: "Wild Cat", price: 250, desc: "Blueberry, cranberry and mint over soda.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/wild-cat.webp" },
        { name: "Coconut Pine Cooler", price: 330, desc: "Pineapple, coconut milk and coconut syrup with blue curaçao. Finished with fresh cream.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/coconut-pine-cooler.webp" },
        { name: "Saffron Citrus Spritz", price: 280, desc: "Orange juice and saffron syrup with fresh cream.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/saffron-citrus-spritz.webp" },
        { name: "Berry Blend", price: 270, desc: "Blueberry and strawberry with mint, over soda.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/berry-blend.webp" },
        { name: "Classic Mojito", price: 230, desc: "Fresh lemon, mint and mojito syrup over soda. No rum.", diet: "Vegetarian", photo: "/photos/beverages/mocktails/classic-mojito.webp" },
      ]},
      { group: "Milkshakes", dishes: [
        { name: "Brownie Indulgence", price: 400, desc: "Four scoops, a whole brownie, hazelnut and chocolate. No coffee.", diet: "Vegetarian", photo: "/photos/beverages/milkshakes/brownie-indulgence.webp" },
        { name: "Cream Cookie", price: 400, desc: "Cookie syrup, caramel, fresh cream and three cookies, blended.", diet: "Vegetarian", photo: "/photos/beverages/milkshakes/cream-cookie.webp" },
        { name: "Strawberry Cheesecake", price: 400, desc: "Strawberry, cream cheese and biscuit crumble in a glass.", diet: "Vegetarian", photo: "/photos/beverages/milkshakes/strawberry-cheesecake.webp" },
        { name: "Blueberry Cheesecake", price: 400, desc: "Blueberry, cream cheese and biscuit crumble in a glass.", diet: "Vegetarian", photo: "/photos/beverages/milkshakes/blueberry-cheesecake.webp" },
      ]},
      { group: "Iced Teas", dishes: [
        { name: "Citrus Iced Tea", price: 280, desc: "Black tea brewed to order, fresh lemon, over ice.", diet: "Vegetarian", photo: "/photos/beverages/iced-teas/citrus-iced-tea.webp" },
        { name: "Summer Peach Tea", price: 280, desc: "Black tea brewed to order, peach, over ice.", diet: "Vegetarian", photo: "/photos/beverages/iced-teas/summer-peach-tea.webp" },
        { name: "Raspberry Iced Tea", price: 280, desc: "Black tea brewed to order, raspberry, over ice.", diet: "Vegetarian", photo: "/photos/beverages/iced-teas/raspberry-iced-tea.webp" },
      ]},
      { group: "Hot Tea", dishes: [
        { name: "Herbal Detox", price: 180, desc: "A spiced herbal infusion. Served with honey and a lemon wedge.", diet: "Vegetarian", photo: "/photos/beverages/hot-tea/herbal-detox.webp" },
        { name: "Green Tea", price: 200, desc: "Simply brewed. Served with honey and a lemon wedge.", diet: "Vegetarian", photo: "/photos/beverages/hot-tea/green-tea.webp" },
        { name: "Ginger & Lemon Infusion", price: 230, desc: "Fresh ginger and a whole lemon, brewed strong. Honey on the side.", diet: "Vegetarian", photo: "/photos/beverages/hot-tea/ginger-lemon-infusion.webp" },
      ]},
      { group: "Matcha", dishes: [
        { name: "Iced Matcha Latte", price: 320, desc: "Ceremonial matcha whisked into cold milk, over ice.", diet: "Vegetarian", photo: "/photos/beverages/matcha/iced-matcha-latte.webp" },
        { name: "Mango Infused Matcha", price: 380, desc: "Matcha and mango whisked into cold milk, over ice.", diet: "Vegetarian", photo: "/photos/beverages/matcha/mango-infused-matcha.webp" },
        { name: "Infused Strawberry Matcha", price: 380, desc: "Matcha and strawberry pulp whisked into cold milk, over ice.", diet: "Vegetarian", photo: "/photos/beverages/matcha/infused-strawberry-matcha.webp" },
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
    accent: "#6B6058",
    countNoun: "plates",
    // Was the rainbow sushi until that photograph was withdrawn. The Alaska
    // roll is the closest surviving plate: a colourful non-veg roll, clean
    // background, still legible at the 78px the tile renders at.
    cover: "/photos/sushi-and-japanese/sushi/non-veg/alaska-roll.webp",
    featured: {
      ordered: [
        { name: "Chef Special Avocado Roll", price: 550, desc: "Hass avocado, crunchy tempura crumb, truffle mayo. The rich one on the veg side.", tag: "Most ordered", origin: "The chef’s personal creation — built around the best Hass avocados, finished with truffle mayo.", photo: "/photos/sushi-and-japanese/sushi/veg/chef-special-avocado-roll.webp" },
        { name: "Veg California Roll", price: 475, desc: "Cucumber, cream cheese, asparagus inside. Avocado-wrapped. Goma dressing.", tag: "Most ordered", origin: "Invented in Los Angeles, not Japan — avocado standing in for fatty tuna, and the rice turned outside so the seaweed never put anyone off.", photo: "/photos/sushi-and-japanese/sushi/veg/veg-california-roll.webp" },
        { name: "Spicy Thai Basil Chicken Dimsum (4pc)", price: 449, desc: "Thai basil chicken in starch-dough wrapper. Coconut-herb reduction.", diet: "Non-vegetarian", tag: "Most ordered", origin: "Thai basil, not Italian. The aniseed note is the part that survives the steam.", photo: "/photos/main-course/appetizers/non-veg/spicy-thai-basil-chicken-dimsum.webp" },
      ],
      tryThis: [
        { name: "Rainbow Sushi", price: 850, desc: "Prawn tempura and crab stick inside. Hamachi, salmon, and tuna draped on top. Teriyaki and spicy sauce. The showpiece roll.", tag: "Must try", origin: "Named for the way each slice catches light differently.", photo: "/photos/sushi-and-japanese/sushi/non-veg/rainbow-sushi.webp" },
        { name: "Tiger Roll", price: 750, desc: "Tempura soft shell crab inside. Tobiko on top, teriyaki drizzle. Substantial.", tag: "Must try", origin: "Soft shell crab is a crab caught in the days after it moults, when the whole shell is still edible. The window is a few days long.", photo: "/photos/sushi-and-japanese/sushi/non-veg/tiger-roll.webp" },
        { name: "Har Gow (Prawns Dimsum) (4pc)", price: 499, desc: "Translucent-skinned prawn dimsum, Cantonese style. Coconut-gochujang dip.", diet: "Non-vegetarian", tag: "Must try", origin: "The pleats on a har gow test a dim sum chef’s skill — tradition says at least seven folds.", photo: "/photos/main-course/appetizers/non-veg/har-gow.webp" },
      ],
    },
    items: [
      { group: "Sushi — Veg", dishes: [
        { name: "Asparagus Maki Roll", price: 500, desc: "Blanched asparagus, rolled in rice and nori, sliced. Clean and simple.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/sushi/veg/asparagus-maki-roll.webp" },
        { name: "Mexican Hat Boy", price: 450, desc: "Asparagus tempura, cream cheese inside. Spicy sauce, sliced jalapeño on top.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/sushi/veg/mexican-hat-boy.webp" },
        { name: "Chef Special Avocado Roll", price: 550, desc: "Hass avocado, crunchy tempura crumb, truffle mayo. The rich one on the veg side.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/sushi/veg/chef-special-avocado-roll.webp" },
        { name: "Veg California Roll", price: 475, desc: "Cucumber, cream cheese, asparagus inside. Avocado-wrapped. Goma dressing.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/sushi/veg/veg-california-roll.webp" },
        { name: "Truffle Edamame & Asparagus Roll", price: 450, desc: "Edamame paste and Thai asparagus inside. Tempura crunch, truffle mayo, spring onion on top.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/sushi/veg/truffle-edamame-and-asparagus-roll.webp" },
        { name: "Veg Tempura Sushi", price: 525, desc: "Carrot, asparagus, mushroom — battered and rolled. Furikake seasoning, spicy mayo drizzle.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/sushi/veg/veg-tempura-sushi.webp" },
        { name: "Asparagus & Cream Cheese Roll", price: 500, desc: "Asparagus, cream cheese, nori-wrapped. Straightforward.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/sushi/veg/asparagus-and-cream-cheese-roll.webp" },
      ]},
      { group: "Sushi — Non-Veg", dishes: [
        { name: "Salmon Maki Roll", price: 650, desc: "Salmon, sushi rice, nori. The baseline.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/salmon-maki-roll.webp" },
        { name: "Alaska Roll", price: 700, desc: "Salmon-wrapped outside. Avocado, cream cheese inside. Tobiko on top.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/alaska-roll.webp" },
        { name: "Tuna Maki Roll", price: 650, desc: "Tuna, sushi rice, nori. Clean cut.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/tuna-maki-roll.webp" },
        { name: "Spicy Tuna Maki Roll", price: 690, desc: "Tuna with spicy mayo, rolled. More heat than the standard maki.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/spicy-tuna-maki-roll.webp" },
        { name: "Rainbow Sushi", price: 850, desc: "Prawn tempura and crab stick inside. Hamachi, salmon, and tuna draped on top. Teriyaki and spicy sauce. The showpiece roll.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/rainbow-sushi.webp" },
        { name: "Ebi Tempura Sushi Roll", price: 600, desc: "Tempura prawn and avocado inside, rolled simple. Crisp centre, soft rice.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/ebi-tempura-sushi-roll.webp" },
        { name: "Classic California Roll", price: 700, desc: "Crab stick, avocado, cucumber. Tobiko and wasabi mayo. The one everyone knows.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/classic-california-roll.webp" },
        { name: "Tiger Roll", price: 750, desc: "Tempura soft shell crab inside. Tobiko on top, teriyaki drizzle. Substantial.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/tiger-roll.webp" },
        { name: "Classic Ebi Tempura Sushi", price: 600, desc: "Tempura prawn with chopped avocado, crab stick and spring onion in truffle mayo. Finished with truffle, spicy and sriracha mayo.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/classic-ebi-tempura-sushi.webp" },
        { name: "Chicken Katsu Sushi", price: 549, desc: "Panko-fried chicken inside, cream cheese. A crossover roll — not traditional, deliberately so.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sushi/non-veg/chicken-katsu-sushi.webp" },
      ]},
      { group: "Nigiri (4 pcs) — Veg", dishes: [
        { name: "Avocado Nigiri", price: 300, desc: "Hass avocado over pressed rice. Four pieces.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/nigiri/veg/avocado-nigiri.webp" },
        { name: "Teriyaki Baby Corn Nigiri", price: 250, desc: "Baby corn, teriyaki glaze, pressed rice. Four pieces.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/nigiri/veg/teriyaki-baby-corn-nigiri.webp" },
        { name: "Asparagus Nigiri", price: 250, desc: "Blanched asparagus over pressed rice. Four pieces.", diet: "Vegetarian", photo: "/photos/sushi-and-japanese/nigiri/veg/asparagus-nigiri.webp" },
      ]},
      { group: "Nigiri (4 pcs) — Non-Veg", dishes: [
        { name: "Salmon Nigiri", price: 400, desc: "Raw salmon over pressed rice. Four pieces.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/nigiri/non-veg/salmon-nigiri.webp" },
        { name: "Tuna Nigiri", price: 425, desc: "Raw tuna over pressed rice. Four pieces.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/nigiri/non-veg/tuna-nigiri.webp" },
        { name: "Yellowtail Nigiri", price: 450, desc: "Raw hamachi over pressed rice. Four pieces. The fattiest of the three.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/nigiri/non-veg/yellowtail-nigiri.webp" },
      ]},
      { group: "Sashimi (4 pcs)", dishes: [
        { name: "Salmon Sashimi", price: 400, desc: "Four slices, raw. No rice.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sashimi/salmon-sashimi.webp" },
        { name: "Tuna Sashimi", price: 425, desc: "Four slices, raw. Leaner, cleaner.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sashimi/tuna-sashimi.webp" },
        { name: "Yellowtail Sashimi", price: 450, desc: "Four slices, raw. Buttery.", diet: "Non-vegetarian", photo: "/photos/sushi-and-japanese/sashimi/yellowtail-sashimi.webp" },
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
    accent: "#805E27",
    countNoun: "dishes",
    // Was the caramelized lamb supreme until that photograph was withdrawn.
    // Kept it a burger — the other one the kitchen has shot.
    cover: "/photos/main-course/burgers/crumbfried-truffle-mushroom-burger.webp",
    notes: [
      { emoji: "🧑‍🍳", text: "The dough, the pasta and every sauce are made in this kitchen — nothing comes out of a packet." },
    ],
    featured: {
      ordered: [
        { name: "Caramelized Lamb Supreme", price: 650, desc: "Double lamb mince, double cheese, garlic mayo, pickled vegetables, caramelised onion. Served with fries. The heaviest burger on the menu.", tag: "Chef’s pick", origin: "The Italian chef’s pride — double-patty, caramelized onion, garlic mayo made fresh daily.", photo: "/photos/main-course/burgers/caramelized-lamb-supreme.webp" },
        { name: "Ravioli Pasta", price: 499, desc: "Handmade in-house. Spinach and cottage cheese filling. Choose alfredo, pink, pesto, or arrabbiata sauce.", tag: "Chef’s pick", origin: "Rolled and filled by hand every morning.", photo: "/photos/main-course/pasta/ravioli-pasta.webp" },
        { name: "Romano Margherita", price: 600, desc: "Mozzarella, tomato, olive. The straightforward one.", tag: "Chef’s pick", origin: "House-made dough, house-made sauce.", photo: "/photos/main-course/pizza/veg/romano-margherita.webp" },
        { name: "Spicy Buffalo Pulled Chicken", price: 425, desc: "Pulled chicken in buffalo sauce, sriracha mayo, garlic mayo, fried egg, cheese. Double sauce, double mayo — not subtle.", tag: "Chef’s pick", origin: "Buffalo sauce was improvised in a bar in Buffalo, New York, in 1964 — cayenne cut with butter, and nothing else.", photo: "/photos/main-course/sandwiches/non-veg/spicy-buffalo-pulled-chicken.webp" },
      ],
      tryThis: [
        { name: "Lasagna", price: 499, variants: [{ label: "Chicken", price: 569 }], desc: "Layered baked pasta, pomodori pelati sauce, English vegetables.", tag: "Must try", origin: "Pomodori pelati — Italian whole peeled tomatoes. Sauce takes 4 hours, bake takes 40 minutes.", photo: "/photos/main-course/pasta/lasagna.webp" },
        { name: "Crumbfried Truffle Mushroom", price: 400, desc: "Crumb-fried mushroom patty, truffle finish. Truffle mayo, tonkatsu sauce, cheese. Served with fries.", tag: "Must try", origin: "Tonkatsu sauce — fruit, vinegar and soy — is Japan’s answer to brown sauce, and the reason a crumbed patty reads Tokyo rather than diner.", photo: "/photos/main-course/burgers/crumbfried-truffle-mushroom-burger.webp" },
        { name: "Veggie Nepolitana", price: 500, desc: "Mozzarella, bell peppers, cherry tomato, mushroom, olive, spiced pineapple. Loaded.", diet: "Vegetarian", tag: "Must try", origin: "Named for Naples, where pizza began. The spiced pineapple is the house’s own addition — sweet heat against the olive and mozzarella.", photo: "/photos/main-course/pizza/veg/veggie-nepolitana.webp" },
        { name: "Sloppy Joe", price: 425, desc: "Hoisin-marinated pulled chicken, cheddar, lettuce, garlic mayo. Asian take on the American original.", tag: "Must try", origin: "American comfort food via East Asia — the hoisin marinade makes ours different.", photo: "/photos/main-course/sandwiches/non-veg/sloppy-joe.webp" },
        { name: "Veux Katsu", price: 475, desc: "Panko-fried chicken, Asian slaw, fried egg, sriracha mayo, cheese. Served with fries. The house burger — Japanese-inspired, substantial.", tag: "Must try", origin: "Continental meets Japanese in a brioche bun.", photo: "/photos/main-course/burgers/veux-katsu.webp" },
      ],
    },
    items: [
      { group: "Soups", dishes: [
        { name: "Clear Tofu Soup", price: 180, desc: "Silken tofu in clear broth, scallion, white pepper. Light start.", photo: "/photos/main-course/soups/clear-tofu-soup.webp" },
        { name: "Tom Yum", price: 180, variants: [{ label: "Chicken", price: 80, supplement: true }, { label: "Prawn", price: 100, supplement: true }], desc: "Thai hot-and-sour. Lemongrass, galangal, kaffir lime, chilli.", photo: "/photos/main-course/soups/tom-yum.webp" },
        { name: "Spicy Thai Coconut Soup", price: 200, variants: [{ label: "Chicken", price: 80, supplement: true }, { label: "Prawn", price: 100, supplement: true }], desc: "Coconut milk, galangal, lemongrass, chilli. Creamy base, sharp heat.", photo: "/photos/main-course/soups/spicy-thai-coconut-soup.webp" },
        { name: "Miso Soup", price: 200, desc: "White miso, silken tofu, wakame. The Japanese daily.", photo: "/photos/main-course/soups/miso-soup.webp" },
      ]},
      { group: "Salads — Veg", dishes: [
        { name: "Exotic Asian Green Salad", price: 375, desc: "Edamame, asparagus and broccoli over green and iceberg lettuce. Creamy wasabi dressing.", diet: "Vegetarian", photo: "/photos/main-course/salads/veg/exotic-asian-green-salad.webp" },
        { name: "Silken Tofu Salad", price: 395, desc: "Silken tofu, cherry tomato and cucumber over green and iceberg lettuce. Goma sesame dressing.", diet: "Vegetarian", photo: "/photos/main-course/salads/veg/silken-tofu-salad.webp" },
      ]},
      { group: "Salads — Non-Veg", dishes: [
        { name: "Tempura Soft Shell Crab Salad", price: 590, desc: "Tempura-fried soft shell crab, avocado, cherry tomato, sliced onion, green and iceberg lettuce. Wasabi sesame dressing.", diet: "Non-vegetarian", photo: "/photos/main-course/salads/non-veg/tempura-soft-shell-crab-salad.webp" },
        { name: "Asian Grilled Chicken Salad", price: 450, desc: "Grilled chicken, tomato, celery, fresh mint, spring onion. House dressing.", diet: "Non-vegetarian", photo: "/photos/main-course/salads/non-veg/asian-grilled-chicken-salad.webp" },
        { name: "Yum Woon Sen", price: 500, desc: "Thai glass noodle salad. Prawn, black fungus, chilli-lime dressing. Served cold.", diet: "Non-vegetarian", photo: "/photos/main-course/salads/non-veg/yum-woon-sen.webp" },
      ]},
      { group: "Appetizers — Veg", dishes: [
        { name: "Veggies Spring Roll", price: 400, desc: "Crisp-fried vegetable rolls. Sweet chilli dip.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/veggies-spring-roll.webp" },
        { name: "Japanese Vegetable Gyoza", price: 380, desc: "Pan-seared vegetable dumplings, crisp base, soft top. Chilli ponzu.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/japanese-vegetable-gyoza.webp" },
        { name: "Kung Pao Tofu Dry", price: 400, desc: "Wok-tossed tofu, cashews, dried chilli, Sichuan pepper. No sauce.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/kung-pao-tofu-dry.webp" },
        { name: "Edamame with Pods", price: 400, desc: "Steamed edamame pods. Choose salted, truffle or spicy.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/edamame-steamed-truffle-salted.webp" },
        { name: "Spicy Baby Potato", price: 400, desc: "Crisp baby potatoes in chilli-garlic glaze. Wok-finished.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/spicy-baby-potato.webp" },
        { name: "Lemongrass Mock Meat", price: 400, desc: "Lemongrass-marinated soya chop, crisp-fried. Spicy chilli dip.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/lemongrass-mock-meat.webp" },
        { name: "Crispy Lotus Stem & Water Chestnut", price: 400, desc: "Batter-fried lotus stem and water chestnut. Light crunch, clean flavour.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/crispy-lotus-stem-water-chestnut.webp" },
        { name: "Teriyaki Miso Eggplant", price: 400, desc: "Eggplant in teriyaki-miso glaze. Caramelised edges.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/teriyaki-miso-eggplant.webp" },
        { name: "Vietnamese Rice Paper Roll", price: 299, desc: "Grilled paneer and seasonal greens in rice paper. Peanut sauce. No fry.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/vietnamese-rice-paper-roll.webp" },
        { name: "Exotic Asian Veg & Cheese Dimsum (4pc)", price: 399, desc: "Steamed — vegetables, water chestnut, cheese filling. Green curry reduction.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/exotic-asian-veg-cheese-dimsum.webp" },
        { name: "Thai Style Tofu Satay", price: 329, desc: "Firm tofu, Thai herb and lime marinade, grilled. Peanut sauce.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/thai-style-tofu-satay.webp" },
        { name: "Bruschetta (4pc)", price: 299, variants: [{ label: "Non-veg", price: 349 }], desc: "Toasted bread, avocado salsa or tomato salsa. Choose one.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/bruschetta-4pc.webp" },
        { name: "Arancini (Sicilian Rice Balls)", price: 349, desc: "Mozzarella-stuffed risotto balls, fried golden. Marinara.", diet: "Vegetarian", photo: "/photos/main-course/appetizers/veg/arancini-sicilian-rice-balls.webp" },
      ]},
      { group: "Appetizers — Non-Veg", dishes: [
        { name: "Thai Chicken Satay", price: 450, desc: "Grilled chicken skewers, charred edges. Thai peanut sauce.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/thai-chicken-satay.webp" },
        { name: "Thai Style Chilli Chicken", price: 450, desc: "Batter-fried chicken in sweet chilli glaze. Wok-tossed.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/thai-style-chilli-chicken.webp" },
        { name: "Japanese Chicken Gyoza", price: 450, desc: "Pan-seared chicken dumplings. Chilli ponzu dip.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/japanese-chicken-gyoza.webp" },
        { name: "Sichuan Mala Chicken", price: 500, desc: "Chicken in mala numbing-spice sauce. Sichuan peppercorn, dried chilli, real heat.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/sichuan-mala-chicken.webp" },
        { name: "Leeks and Chicken Skewers", price: 500, desc: "Chicken and leek, skewered and grilled. Clean char, simple seasoning.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/leeks-and-chicken-skewers.webp" },
        { name: "Panko Crumbed Prawn", price: 500, desc: "Panko-crusted prawns, deep-fried crisp. Japanese tartare sauce.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/panko-crumbed-prawn.webp" },
        { name: "Chilli Basil Prawn", price: 550, desc: "Prawns wok-tossed with fresh Thai basil and bird's eye chilli.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/chilli-basil-prawn.webp" },
        { name: "Wasabi Prawn", price: 550, desc: "Crisp-fried prawns in wasabi mayo. Sharp, creamy heat.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/wasabi-prawn.webp" },
        { name: "Thai Fish Cake", price: 550, desc: "Pan-fried Thai fish cakes, aromatic herbs. Spicy Thai chilli-coriander dip.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/thai-fish-cake.webp" },
        { name: "Crispy Tempura Calamari (Squid)", price: 550, desc: "Squid rings in light tempura batter. Not heavy.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/crispy-tempura-calamari-squid.webp" },
        { name: "Crispy Soft Shell Crab", price: 600, desc: "Tempura-fried soft shell crab, chilli-garlic toss.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/crispy-soft-shell-crab.webp" },
        { name: "Almond Prawn Roll (4pc)", price: 459, desc: "Chopped prawn and crushed almond in spring roll wrapper. Sesame oil finish.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/almond-prawn-roll.webp" },
        { name: "7 Spice Chicken", price: 399, desc: "Tempura-battered fried chicken, togarashi dust.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/seven-spice-chicken.webp" },
        { name: "Prawn Tempura with Ponzu", price: 499, desc: "Tiger prawns in tempura batter. Ponzu dip.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/prawn-tempura-with-ponzu.webp" },
        { name: "Chicken Katsu with Tonkatsu Dip", price: 450, desc: "Panko-crusted chicken breast, Japanese slaw. Tonkatsu sauce.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/chicken-katsu-with-tonkatsu-dip.webp" },
        { name: "Spicy Thai Basil Chicken Dimsum (4pc)", price: 449, desc: "Thai basil chicken in starch-dough wrapper. Coconut-herb reduction.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/spicy-thai-basil-chicken-dimsum.webp" },
        { name: "Har Gow (Prawns Dimsum) (4pc)", price: 499, desc: "Translucent-skinned prawn dimsum, Cantonese style. Coconut-gochujang dip.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/har-gow.webp" },
        { name: "Malaysian Style Chicken", price: 399, desc: "Julienned chicken, peanuts, bell pepper, spinach. Green chilli sauce.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/malaysian-style-chicken.webp" },
      ]},
      { group: "Curry — Veg", dishes: [
        { name: "Stir Fry Aubergine in Thai Chilli Sauce", price: 380, desc: "Wok-fried eggplant in Thai chilli paste. Smoky, sweet-hot. The cheapest main — doesn't eat like it.", diet: "Vegetarian", photo: "/photos/main-course/curry/veg/stir-fry-aubergine-in-thai-chilli-sauce.webp" },
        { name: "Assorted Wild Mushroom in Ginger Soy Sauce", price: 450, desc: "Mixed mushrooms, ginger, soy. Wok-finished. Clean umami.", diet: "Vegetarian", photo: "/photos/main-course/curry/veg/assorted-wild-mushroom-in-ginger-soy-sauce.webp" },
        { name: "Stir Fry Asian Green in Butter Garlic Sauce", price: 450, desc: "Seasonal Asian greens — pak choi, broccoli, morning glory or similar — in butter-garlic. Simple wok work.", diet: "Vegetarian", photo: "/photos/main-course/curry/veg/stir-fry-asian-green-in-butter-garlic-sauce.webp" },
        { name: "Wok Tossed Mock Meat in Thai Chilli Paste", price: 450, desc: "Plant protein in Thai chilli paste, wok-tossed. Same treatment as the chicken mains, different protein.", diet: "Vegetarian", photo: "/photos/main-course/curry/veg/wok-tossed-mock-meat-in-thai-chilli-paste.webp" },
        { name: "Stir Fry Tofu with Cashew Nut", price: 500, desc: "Firm tofu, roasted cashew, dried chilli, bell pepper. Wok-fried. The protein-heavy veg option.", diet: "Vegetarian", photo: "/photos/main-course/curry/veg/stir-fry-tofu-with-cashew-nut.webp" },
        { name: "Stir Fry Baby Bokchoy, Bamboo Shoot & Broccoli", price: 450, desc: "Three vegetables in soy-garlic sauce. Light, clean, intentionally simple.", diet: "Vegetarian", photo: "/photos/main-course/curry/veg/stir-fry-baby-bokchoy-bamboo-shoot-broccoli.webp" },
      ]},
      { group: "Curry — Non-Veg", dishes: [
        { name: "Pad Karpow Gai (Minced Chicken Chilli Basil)", price: 525, desc: "Minced chicken, holy basil, bird's eye chilli, fish sauce. Thai street standard. Properly spicy.", diet: "Non-vegetarian", photo: "/photos/main-course/curry/non-veg/pad-karpow-gai-minced-chicken-chilli-basil.webp" },
        { name: "Stir Fried Chicken With Cashew Nut", price: 525, desc: "Chicken, roasted cashew, dried chilli, onion. Wok-fried. The familiar one — done with better ingredients.", diet: "Non-vegetarian", photo: "/photos/main-course/curry/non-veg/stir-fried-chicken-with-cashew-nut.webp" },
        { name: "Kung Pao Chicken", price: 500, desc: "Chicken, cashew, dried chilli, Sichuan pepper. Sweet-sour-spicy. Classic Sichuan, dry style.", diet: "Non-vegetarian", photo: "/photos/main-course/curry/non-veg/kung-pao-chicken.webp" },
        { name: "Stir Fried Chicken in Chilli Black Bean Sauce", price: 525, desc: "Chicken wok-tossed in fermented black bean and chilli. Salty, pungent, rich. Pairs with steamed rice.", diet: "Non-vegetarian", photo: "/photos/main-course/curry/non-veg/stir-fried-chicken-in-chilli-black-bean-sauce.webp" },
        { name: "Stir Fried Prawn in Chilli Basil Sauce", price: 600, desc: "Prawns with Thai basil and fresh chilli. Wok heat, quick cook. The lighter seafood main.", diet: "Non-vegetarian", photo: "/photos/main-course/curry/non-veg/stir-fried-prawn-in-chilli-basil-sauce.webp" },
        { name: "Wok Tossed Sea Bass in Thai Chilli Sauce", price: 600, desc: "Sea bass fillet in Thai chilli paste. Wok-seared, not deep-fried. Premium fish, premium price.", diet: "Non-vegetarian", photo: "/photos/main-course/curry/non-veg/wok-tossed-sea-bass-in-thai-chilli-sauce.webp" },
        { name: "Wok Tossed Lamb in Chilli Black Bean Sauce", price: 700, desc: "Lamb in fermented black bean and chilli. The heaviest main on the menu. Slow-braised protein, wok-finished sauce.", diet: "Non-vegetarian", photo: "/photos/main-course/curry/non-veg/wok-tossed-lamb-in-chilli-black-bean-sauce.webp" },
      ]},
      { group: "Pasta", dishes: [
        { name: "Penne (Choice of Sauce)", price: 400, variants: [{ label: "Chicken", price: 100, supplement: true }, { label: "Prawn", price: 125, supplement: true }, { label: "Lamb meatball", price: 250, supplement: true }], desc: "Choose your sauce: alfredo, arrabbiata, or creamy pesto.", photos: ["/photos/main-course/pasta/penne-pesto.webp", "/photos/main-course/pasta/penne-arrabiata.webp", "/photos/main-course/pasta/penne-alfredo.webp"] },
        { name: "Fettuccine (Choice of Sauce)", price: 450, variants: [{ label: "Chicken", price: 100, supplement: true }, { label: "Prawn", price: 125, supplement: true }, { label: "Lamb meatball", price: 250, supplement: true }], desc: "Flat ribbon pasta. Creamy pesto, pomodoro, or alfredo.", photos: ["/photos/main-course/pasta/fettuccine-pesto.webp", "/photos/main-course/pasta/fettuccine-arrabiata.webp", "/photos/main-course/pasta/fettuccine-alfredo.webp"] },
        { name: "Spaghetti (Choice of Sauce)", price: 450, variants: [{ label: "Chicken", price: 100, supplement: true }, { label: "Prawn", price: 125, supplement: true }, { label: "Lamb meatball", price: 250, supplement: true }], desc: "Four sauce options: alfredo, arrabbiata, creamy pesto, or aglio olio.", photos: ["/photos/main-course/pasta/spaghetti-pesto.webp", "/photos/main-course/pasta/spaghetti-arrabiata.webp", "/photos/main-course/pasta/spaghetti-alfredo.webp"] },
        { name: "Macaroni", price: 500, desc: "Baked in triple cheese sauce. No sauce choice — this one's decided for you.", photo: "/photos/main-course/pasta/macaroni.webp" },
        { name: "Tortellini Pasta", price: 499, desc: "Handmade in-house. Potato and cream filling. Choose alfredo, pink, pesto, or arrabbiata sauce.", photo: "/photos/main-course/pasta/tortellini-pasta.webp" },
        { name: "Ravioli Pasta", price: 499, desc: "Handmade in-house. Spinach and cottage cheese filling. Choose alfredo, pink, pesto, or arrabbiata sauce.", photo: "/photos/main-course/pasta/ravioli-pasta.webp" },
        { name: "Lasagna", price: 499, variants: [{ label: "Chicken", price: 569 }], desc: "Layered baked pasta, pomodori pelati sauce, English vegetables.", photo: "/photos/main-course/pasta/lasagna.webp" },
      ]},
      { group: "Pizza — Veg", dishes: [
        { name: "Asian Green", price: 600, desc: "Wok-tossed Asian vegetables, mozzarella, pizza sauce. The crossover pizza.", diet: "Vegetarian", photo: "/photos/main-course/pizza/veg/asian-green.webp" },
        { name: "Peri Peri Cottage Cheese", price: 550, desc: "Spiced cottage cheese, bell peppers, black olive, mozzarella, marinara base. Moderate heat.", diet: "Vegetarian", photo: "/photos/main-course/pizza/veg/peri-peri-cottage-cheese.webp" },
        { name: "Romano Margherita", price: 600, desc: "Mozzarella, tomato, olive. The straightforward one.", diet: "Vegetarian", photo: "/photos/main-course/pizza/veg/romano-margherita.webp" },
        { name: "Veggie Nepolitana", price: 500, desc: "Mozzarella, bell peppers, cherry tomato, mushroom, olive, spiced pineapple. Loaded.", diet: "Vegetarian", photo: "/photos/main-course/pizza/veg/veggie-nepolitana.webp" },
        { name: "Simply Cheese", price: 550, desc: "Mozzarella, orange cheddar, parmesan. Three cheeses, nothing else. For when you just want cheese.", diet: "Vegetarian", photo: "/photos/main-course/pizza/veg/simply-cheese.webp" },
      ]},
      { group: "Pizza — Non-Veg", dishes: [
        { name: "Thai Chilli Chicken", price: 600, desc: "Thai chilli chicken, mozzarella, onion, red pepper, red paprika. Asian-Italian crossover, sharper than the Hawaiian.", diet: "Non-vegetarian", photo: "/photos/main-course/pizza/non-veg/thai-chilli-chicken.webp" },
        { name: "Hawaiian Delicacy", price: 600, desc: "Smoked chicken breast, spiced pineapple, mozzarella, cheddar, parmesan, béchamel. Sweet-savoury.", diet: "Non-vegetarian", photo: "/photos/main-course/pizza/non-veg/hawaiian-delicacy.webp" },
        { name: "Chilli Garlic Shrimp", price: 700, desc: "Wok-tossed shrimp, feta crumble, mozzarella, peppers, onion. The premium pizza — priced accordingly.", diet: "Non-vegetarian", photo: "/photos/main-course/pizza/non-veg/chilli-garlic-shrimp.webp" },
      ]},
      { group: "Burgers", dishes: [
        { name: "Crumbfried Truffle Mushroom", price: 400, desc: "Crumb-fried mushroom patty, truffle finish. Truffle mayo, tonkatsu sauce, cheese. Served with fries.", photo: "/photos/main-course/burgers/crumbfried-truffle-mushroom-burger.webp" },
        { name: "Cottage Cheese", price: 400, desc: "Grilled cottage cheese, kimchi, truffle mayo, cheese. Served with fries. The Korean-leaning one.", photo: "/photos/main-course/burgers/cottage-cheese.webp" },
        { name: "Veux Katsu", price: 475, desc: "Panko-fried chicken, Asian slaw, fried egg, sriracha mayo, cheese. Served with fries. The house burger — Japanese-inspired, substantial.", photo: "/photos/main-course/burgers/veux-katsu.webp" },
        { name: "Basil Chicken Mince", price: 500, desc: "Grilled chicken mince patty, garlic mayo, Asian slaw, cheese. Served with fries. Lighter than the Katsu.", photo: "/photos/main-course/burgers/basil-chicken-mince.webp" },
        { name: "Caramelized Lamb Supreme", price: 650, desc: "Double lamb mince, double cheese, garlic mayo, pickled vegetables, caramelised onion. Served with fries. The heaviest burger on the menu.", photo: "/photos/main-course/burgers/caramelized-lamb-supreme.webp", video: "/videos/burger-making.mp4" },
      ]},
      { group: "Sandwiches", dishes: [
        { name: "Grilled Veg Croissant Sandwich", price: 325, desc: "Peri peri grilled vegetables, three-cheese blend, pesto mayo in a croissant. Lighter side of the menu.", photo: "/photos/main-course/sandwiches/veg/grilled-veg-croissant-sandwich.webp" },
        { name: "Smoked Cottage Cheese in Focaccia", price: 350, desc: "Cottage cheese cubes, sriracha mayo, pickled vegetables, cheese. Focaccia bread.", photo: "/photos/main-course/sandwiches/veg/smoked-cottage-cheese-in-focaccia.webp" },
        { name: "Japanese Egg Sandwich", price: 299, desc: "Japanese-style omelette in multigrain bread. Herb butter, lettuce, pumpkin crackers. Clean and light.", photo: "/photos/main-course/sandwiches/non-veg/japanese-egg-sandwich.webp" },
        { name: "Egg Mustard Sandwich", price: 299, desc: "Boiled egg with Dijon mustard in multigrain bread. Pumpkin crackers. The café sandwich — simple, done well.", photo: "/photos/main-course/sandwiches/non-veg/egg-mustard-sandwich.webp", video: "/videos/egg-mustard-sandwich.mp4" },
        { name: "Sloppy Joe", price: 425, desc: "Hoisin-marinated pulled chicken, cheddar, lettuce, garlic mayo. Asian take on the American original.", photo: "/photos/main-course/sandwiches/non-veg/sloppy-joe.webp" },
        { name: "Creole Chicken in Croissant", price: 425, desc: "Sriracha mayo, garlic mayo, kimchi, cheddar, chicken in a croissant. The spicy option.", photo: "/photos/main-course/sandwiches/non-veg/creole-chicken-in-croissant.webp" },
        { name: "Spicy Buffalo Pulled Chicken", price: 425, desc: "Pulled chicken in buffalo sauce, sriracha mayo, garlic mayo, fried egg, cheese. Double sauce, double mayo — not subtle.", photo: "/photos/main-course/sandwiches/non-veg/spicy-buffalo-pulled-chicken.webp" },
      ]},
      { group: "Rice & Noodles", dishes: [
        { name: "Olive and Edamame Fried Rice", price: 500, desc: "Jasmine rice wok-fried with olive, edamame, garlic. Veg. Clean, Mediterranean-meets-Asian.", photo: "/photos/main-course/rice-and-noodles/olive-and-edamame-fried-rice.webp" },
        { name: "Blue Pea Exotic Veg Fried Rice", price: 450, desc: "Jasmine rice coloured with butterfly pea flower. Edamame, seasonal vegetables. Looks vivid, tastes clean.", diet: "Vegetarian", photo: "/photos/main-course/rice-and-noodles/blue-pea-exotic-fried-rice.webp" },
        { name: "Seafood Spicy XO Fried Rice", price: 650, desc: "Jasmine rice with mixed seafood in XO sauce. The premium fried rice — XO sauce is not a cheap ingredient.", photo: "/photos/main-course/rice-and-noodles/seafood-spicy-xo-fried-rice.webp" },
        { name: "Korean Kimchi Fried Rice", price: 500, desc: "Jasmine rice, house kimchi, sesame oil. Wok-charred. Veg. Fermented tang.", photo: "/photos/main-course/rice-and-noodles/korean-kimchi-fried-rice.webp" },
        { name: "Khao Pad Kar Pow", price: 500, desc: "Spicy Thai basil fried rice. Veg. Same flavour profile as the Pad Karpow Gai main, in rice form.", photo: "/photos/main-course/rice-and-noodles/khao-pad-kar-pow.webp" },
        { name: "Garlic Fried Rice", price: 450, variants: [{ label: "Chicken", price: 100, supplement: true }, { label: "Prawn", price: 125, supplement: true }], desc: "Jasmine rice, garlic, wok-finished. The base.", photo: "/photos/main-course/rice-and-noodles/garlic-fried-rice.webp" },
        { name: "Steamed Jasmine Rice (Half / Full)", price: 250, variants: [{ label: "Full", price: 350 }], desc: "Plain steamed jasmine rice. Meant to go with a curry or main.", photo: "/photos/main-course/rice-and-noodles/steamed-jasmine-rice.webp" },
        { name: "Drunken Noodle", price: 500, desc: "Thai flat noodles, chilli, basil, soy. Wok-charred. Veg. The name is the Thai pad kee mao — \"drunken\" refers to the heat, not the ingredients.", photo: "/photos/main-course/rice-and-noodles/drunken-noodle.webp" },
        { name: "Pad Thai Noodle", price: 500, desc: "Rice noodles, tamarind sauce, crushed peanut, bean sprout, lime. The one everyone orders first.", photo: "/photos/main-course/rice-and-noodles/pad-thai-noodle.webp" },
        { name: "Street Hakka Noodle", price: 450, desc: "Stir-fried egg noodles, Indo-Chinese style. Soy, chilli, vegetables. The comfort option.", photo: "/photos/main-course/rice-and-noodles/street-hakka-noodle.webp" },
        { name: "Pan Fried Noodles Hunan Style", price: 350, variants: [{ label: "Chicken", price: 450 }], desc: "Crisp-bottomed noodles, Hunan chilli sauce, exotic greens. Textural — crunchy base, saucy top.", photo: "/photos/main-course/rice-and-noodles/pan-fried-noodles-hunan-style.webp" },
        { name: "Udon Noodles with Chilli Black Bean", price: 450, variants: [{ label: "Chicken", price: 500 }, { label: "Seafood", price: 550 }], desc: "Thick wheat udon in fermented black bean and chilli. Chewy, salty, heavy.", photo: "/photos/main-course/rice-and-noodles/udon-noodles-with-chilli-black-bean.webp" },
      ]},
      { group: "Around the World", dishes: [
        { name: "Mexican Tacos (3pc)", price: 299, variants: [{ label: "Chicken", price: 399 }], desc: "Three tacos, sour cream. The lightest entry point on the menu.", diet: "Vegetarian", photo: "/photos/main-course/around-the-world/mexican-tacos.webp" },
        { name: "Mexican Rice Bowl", price: 399, variants: [{ label: "Chicken", price: 499 }, { label: "Prawns", price: 599 }], desc: "Rice, pomodori pelati sauce, cheese. A bowl format, not a burrito.", diet: "Vegetarian", photo: "/photos/main-course/around-the-world/mexican-rice-bowl.webp" },
        { name: "Falafel with Hummus (5pc)", price: 499, desc: "Chickpea falafel, crisp outside, soft centre. Hummus on the side.", diet: "Vegetarian", photo: "/photos/main-course/around-the-world/falafel-with-hummus.webp" },
        { name: "Chicken Nuggets (2pc)", price: 349, desc: "Cheese-stuffed chicken breast, crumb-fried. Tartare sauce, greens.", diet: "Non-vegetarian", photo: "/photos/main-course/appetizers/non-veg/chicken-nuggets.webp" },
      ]},
    ],
  },

  // ═══════════════════════════════════════════
  // DESSERTS
  // ═══════════════════════════════════════════
  {
    id: "desserts",
    name: "Desserts",
    tagline: "Saved for the sweetest ending",
    accent: "#6B2238",
    countNoun: "sweets",
    cover: "/photos/desserts/classic-tiramisu.webp",
    // A single featured strip (a plain list, not ordered/tryThis).
    featuredTitle: "Worth Saving Room For",
    featured: [
      { name: "The Chocolate Affair", price: 450, desc: "Layers of dark chocolate mousse, ganache, and a molten centre.", tag: "Indulgent", origin: "Three textures of one chocolate — mousse, ganache, and a centre still liquid when it reaches the table.", photo: "/photos/desserts/the-chocolate-affair.webp" },
      { name: "Classic Tiramisu", price: 400, desc: "Mascarpone, espresso-soaked ladyfingers, and a dusting of cocoa.", tag: "Timeless", origin: "From Treviso, Italy. We use our own single-origin espresso in the soak.", photo: "/photos/desserts/classic-tiramisu.webp" },
    ],
    items: [
      { name: "The Chocolate Affair", price: 450, desc: "Layers of dark chocolate mousse, ganache, and a molten centre.", photo: "/photos/desserts/the-chocolate-affair.webp" },
      { name: "Classic Tiramisu", price: 400, desc: "Mascarpone, espresso-soaked ladyfingers, and a dusting of cocoa.", photo: "/photos/desserts/classic-tiramisu.webp" },
      { name: "Matcha Cheesecake", price: 420, desc: "Baked Japanese-style, lighter than you’d expect", photo: "/photos/desserts/matcha-cheesecake.webp" },
      { name: "Biscoff Cheesecake", price: 420, desc: "Speculoos crust, Biscoff cream layers", photo: "/photos/desserts/biscoff-cheesecake.webp" },
    ],
  },
];

export default menu;
