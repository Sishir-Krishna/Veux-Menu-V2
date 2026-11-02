# Menu worklist

Everything in the menu that needs a person to decide, grouped by who. Each
item says what is missing and where it lives, so it can be answered without
going looking.

Generated from `src/data/menu.js` on 2026-10-31. The two-descriptions, veg /
non-veg and no-description sections were regenerated on 2026-11-02. Re-check
it after any large edit to the data.

## For Krishna

### 1. The duplicate Chicken Nuggets listing

`Chicken Nuggets (2pc)`, ₹349, appears twice in **Main Course** — once under
**Appetizers — Non-Veg** and once under **Around the World** — with the same
price, the same description and the same photograph.

Both rows currently open the same dish page, so nothing is broken for a guest.
Neither was deleted. The question is whether that is deliberate:

- **If it is a cross-listing** — the same plate offered under two headings —
  leave it. It works.
- **If one is a leftover**, say which and it goes.
- **If they are meant to be two different things** (different portion, different
  sauce), they need different names, because two dishes with one name in one
  category cannot both be reachable.

### 2. The restaurant's phone number

`site.phone` in `src/data/menu.js` is `null`.

It is shown to a guest whose phone has JavaScript turned off — the one case
where they cannot read the menu on screen at all. Right now that block tells
them the name, address and hours and asks them to request a printed menu, but
it cannot offer a number to call.

Write it the way you would dial it: `phone: "+91 98765 43210"`.

### 3. Where the menu is deployed

`site.url` is `null`. It is only used to make the WhatsApp link preview point
at an absolute address. The preview card itself works without it; set it to
the real address — `https://menu.veux.in` or whatever it ends up being — and
the preview becomes a proper link rather than a bare image.

### 4. Two descriptions for the same dish

Resolved. Every dish in a featured strip now carries the same description
as its full-menu row, so a guest no longer sees two versions on one page.

### 5. One lowercase description

`Mexican Tacos (3pc)` now reads `with sour cream`, because the price fragment
was removed from the front of it and the rest was left exactly as written.
It probably wants a capital, or a fuller sentence.

---

## For the chef

### 1. Allergens — nothing is recorded anywhere

The menu has no allergen data at all, and none was inferred: a dish name is
not evidence. This is the item on this list with the most at stake.

Four need naming explicitly, because a guest asking about them is usually
asking for a medical reason:

- **Nuts** — the peanut sauces (satay, Vietnamese rice paper roll, massaman),
  the cashew stir-fries, the almond prawn roll, the hazelnut and Biscoff drinks.
- **Raw fish** — the sashimi, the nigiri, both carpaccios, several rolls.
- **Dairy** — the cream-cheese rolls, the cheesecakes, every milk-based drink.
- **Gluten** — the tempura, the pasta, the pizza, the bao and dumpling wrappers,
  and the soy sauces that are not tamari.

Those four are a starting point, not a finding. The whole menu needs going
through, and the site has nowhere to display the answer yet — that can be
built once there is something to display.

### 2. Dishes still missing a veg / non-veg mark

**101** of 182 rows. The mark was filled in only where a group heading
states it outright — `Appetizers — Veg`, `Curry — Non-Veg` and so on — which
covered 81. The rest are mixed groups or drinks, and were deliberately left
blank rather than guessed.

Two worth looking at first:

- **Sashimi (4 pcs)** — raw fish, but the group heading does not say so, so
  the rule did not apply. Three rows.
- **Bruschetta (4pc)** sits under *Appetizers — Veg* and is marked vegetarian,
  but it carries a non-veg option at ₹349. One mark cannot say both.

**Chef’s Table** — 5

- *(no group)* (5): Salmon Carpaccio, Tuna Carpaccio, Thai Green Curry with Steamed Jasmine Rice, Thai Red Curry with Steamed Jasmine Rice, Massaman Curry Lamb

**Beverages** — 50

- *Signature* (5): Saigon Brew, Cinnamon Brew, Tropical Punch, Signature Hot Chocolate, Hot Chocolate
- *Hot Coffees* (9): Single Origin Espresso, Double Espresso, Americano, Classic Cappuccino, Latte, House Mocha, Hazelnut Velvet, Biscoff Latte, Nutella Cappuccino
- *On The Rocks* (6): Iced Long Black, Iced Over Coffee, Iced Velvet Latte, Iced House Mocha, Veux Cold Coffee, Signature Frappe
- *Cold Brews* (4): Classic Cold Brew, Peach, Cranberry, Orange
- *Frappes* (5): Mocha, Brownie Blend, Cookies & Cream, Caramel Hazelnut Blend, Biscoff
- *Mocktails* (8): Orange Basil Cooler, Heat & Melon, Blue Smoke, Wild Cat, Coconut Pine Cooler, Saffron Citrus Spritz, Berry Blend, Classic Mojito
- *Milkshakes* (4): Brownie Indulgence, Cream Cookie, Strawberry Cheesecake, Blueberry Cheesecake
- *Iced Teas* (3): Citrus Iced Tea, Summer Peach Tea, Raspberry Iced Tea
- *Hot Tea* (3): Herbal Detox, Green Tea, Ginger & Lemon Infusion
- *Matcha* (3): Iced Matcha Latte, Mango Infused Matcha, Infused Strawberry Matcha

**Sushi & Japanese** — 3

- *Sashimi (4 pcs)* (3): Salmon Sashimi, Tuna Sashimi, Yellowtail Sashimi

**Main Course** — 39

- *Soups* (4): Clear Tofu Soup, Tom Yum, Spicy Thai Coconut Soup, Miso Soup
- *Pasta* (7): Penne (Choice of Sauce), Fettuccine (Choice of Sauce), Spaghetti (Choice of Sauce), Macaroni, Tortellini Pasta, Ravioli Pasta, Lasagna
- *Burgers* (5): Crumbfried Truffle Mushroom, Cottage Cheese, Veux Katsu, Basil Chicken Mince, Caramelized Lamb Supreme
- *Sandwiches* (7): Grilled Veg Croissant Sandwich, Smoked Cottage Cheese in Focaccia, Japanese Egg Sandwich, Egg Mustard Sandwich, Sloppy Joe, Creole Chicken in Croissant, Spicy Buffalo Pulled Chicken
- *Rice & Noodles* (12): Olive and Edamame Fried Rice, Blue Pea Exotic Veg Fried Rice, Seafood Spicy XO Fried Rice, Korean Kimchi Fried Rice, Khao Pad Kar Pow, Garlic Fried Rice, Steamed Jasmine Rice (Half / Full), Drunken Noodle, Pad Thai Noodle, Street Hakka Noodle, Pan Fried Noodles Hunan Style, Udon Noodles with Chilli Black Bean
- *Around the World* (4): Mexican Tacos (3pc), Mexican Rice Bowl, Falafel with Hummus (5pc), Chicken Nuggets (2pc)

**Desserts** — 4

- *(no group)* (4): The Chocolate Affair, Classic Tiramisu, Matcha Cheesecake, Biscoff Cheesecake

### 3. Dishes with no description

Resolved. All 182 rows have a description.

---

## For the photo shoot

**146** photographs are named in the menu data but have no file behind
them. Each one already has its path — drop a file in at exactly that path and
it appears, with no other change needed. See the README for size and naming.

The layout is built to work without them, so this is not urgent everywhere.
It is urgent where marked below.

### Highest priority

**The six featured drinks.** Beverages is still the thinnest category — eight
photographs across 50 drinks — and five of its six featured cards render as
type with no image at all.

All five category covers now resolve, so the home screen is fully
photographed. Three of them are stand-ins pointed at a surviving dish photo
rather than a picture chosen for the job, and they are worth revisiting once
these are shot: Beverages shows the cappuccino, Sushi the Alaska roll, and
Main Course the truffle mushroom burger.

- `/photos/beverages/lattes/biscoff-latte.webp` — Biscoff Latte *(featured: Most Ordered)*
- `/photos/beverages/mocktails/coconut-pine-cooler.webp` — Coconut Pine Cooler *(featured: Most Ordered)*
- `/photos/beverages/signature/tropical-punch.webp` — Tropical Punch *(featured: Most Ordered)*
- `/photos/beverages/signature/cinnamon-brew.webp` — Cinnamon Brew *(featured: Must Try)*
- `/photos/beverages/cold-brews/cranberry-cold-brew.webp` — Cranberry Cold Brew *(featured: Must Try)*

### Everything else, by category

<details><summary><strong>Chef’s Table</strong> — 5 missing</summary>

| Dish | Where | Path |
| --- | --- | --- |
| Salmon Carpaccio | featured: Must Try | `/photos/chefs-table/salmon-carpaccio.webp` |
| Har Gow | featured: Must Try | `/photos/main-course/appetizers/non-veg/har-gow.webp` |
| Tuna Carpaccio | — | `/photos/chefs-table/tuna-carpaccio.webp` |
| Thai Green Curry with Steamed Jasmine Rice | — | `/photos/chefs-table/thai-green-curry-with-steamed-jasmine-rice.webp` |
| Thai Red Curry with Steamed Jasmine Rice | — | `/photos/chefs-table/thai-red-curry-with-steamed-jasmine-rice.webp` |

</details>

<details><summary><strong>Beverages</strong> — 44 missing</summary>

| Dish | Where | Path |
| --- | --- | --- |
| Biscoff Latte | featured: Most Ordered | `/photos/beverages/lattes/biscoff-latte.webp` |
| Coconut Pine Cooler | featured: Most Ordered | `/photos/beverages/mocktails/coconut-pine-cooler.webp` |
| Tropical Punch | featured: Most Ordered | `/photos/beverages/signature/tropical-punch.webp` |
| Cinnamon Brew | featured: Must Try | `/photos/beverages/signature/cinnamon-brew.webp` |
| Cranberry Cold Brew | featured: Must Try | `/photos/beverages/cold-brews/cranberry-cold-brew.webp` |
| Saigon Brew | Signature | `/photos/beverages/signature/saigon-brew.webp` |
| Signature Hot Chocolate | Signature | `/photos/beverages/signature/signature-hot-chocolate.webp` |
| Hot Chocolate | Signature | `/photos/beverages/signature/hot-chocolate.webp` |
| Single Origin Espresso | Hot Coffees | `/photos/beverages/hot-coffees/single-origin-espresso.webp` |
| Double Espresso | Hot Coffees | `/photos/beverages/hot-coffees/double-espresso.webp` |
| Americano | Hot Coffees | `/photos/beverages/hot-coffees/americano.webp` |
| Latte | Hot Coffees | `/photos/beverages/hot-coffees/latte.webp` |
| House Mocha | Hot Coffees | `/photos/beverages/hot-coffees/house-mocha.webp` |
| Hazelnut Velvet | Hot Coffees | `/photos/beverages/hot-coffees/hazelnut-velvet.webp` |
| Biscoff Latte | Hot Coffees | `/photos/beverages/hot-coffees/biscoff-latte.webp` |
| Nutella Cappuccino | Hot Coffees | `/photos/beverages/hot-coffees/nutella-cappuccino.webp` |
| Iced Long Black | On The Rocks | `/photos/beverages/on-the-rocks/iced-long-black.webp` |
| Iced Over Coffee | On The Rocks | `/photos/beverages/on-the-rocks/iced-over-coffee.webp` |
| Veux Cold Coffee | On The Rocks | `/photos/beverages/on-the-rocks/veux-cold-coffee.webp` |
| Signature Frappe | On The Rocks | `/photos/beverages/on-the-rocks/signature-frappe.webp` |
| Classic Cold Brew | Cold Brews | `/photos/beverages/cold-brews/classic-cold-brew.webp` |
| Peach | Cold Brews | `/photos/beverages/cold-brews/peach.webp` |
| Cranberry | Cold Brews | `/photos/beverages/cold-brews/cranberry.webp` |
| Orange | Cold Brews | `/photos/beverages/cold-brews/orange.webp` |
| Mocha | Frappes | `/photos/beverages/frappes/mocha.webp` |
| Brownie Blend | Frappes | `/photos/beverages/frappes/brownie-blend.webp` |
| Cookies & Cream | Frappes | `/photos/beverages/frappes/cookies-cream.webp` |
| Caramel Hazelnut Blend | Frappes | `/photos/beverages/frappes/caramel-hazelnut-blend.webp` |
| Orange Basil Cooler | Mocktails | `/photos/beverages/mocktails/orange-basil-cooler.webp` |
| Heat & Melon | Mocktails | `/photos/beverages/mocktails/heat-melon.webp` |
| Saffron Citrus Spritz | Mocktails | `/photos/beverages/mocktails/saffron-citrus-spritz.webp` |
| Berry Blend | Mocktails | `/photos/beverages/mocktails/berry-blend.webp` |
| Classic Mojito | Mocktails | `/photos/beverages/mocktails/classic-mojito.webp` |
| Brownie Indulgence | Milkshakes | `/photos/beverages/milkshakes/brownie-indulgence.webp` |
| Cream Cookie | Milkshakes | `/photos/beverages/milkshakes/cream-cookie.webp` |
| Strawberry Cheesecake | Milkshakes | `/photos/beverages/milkshakes/strawberry-cheesecake.webp` |
| Citrus Iced Tea | Iced Teas | `/photos/beverages/iced-teas/citrus-iced-tea.webp` |
| Summer Peach Tea | Iced Teas | `/photos/beverages/iced-teas/summer-peach-tea.webp` |
| Raspberry Iced Tea | Iced Teas | `/photos/beverages/iced-teas/raspberry-iced-tea.webp` |
| Herbal Detox | Hot Tea | `/photos/beverages/hot-tea/herbal-detox.webp` |
| Green Tea | Hot Tea | `/photos/beverages/hot-tea/green-tea.webp` |
| Ginger & Lemon Infusion | Hot Tea | `/photos/beverages/hot-tea/ginger-lemon-infusion.webp` |
| Iced Matcha Latte | Matcha | `/photos/beverages/matcha/iced-matcha-latte.webp` |
| Infused Strawberry Matcha | Matcha | `/photos/beverages/matcha/infused-strawberry-matcha.webp` |

</details>

<details><summary><strong>Sushi & Japanese</strong> — 18 missing</summary>

| Dish | Where | Path |
| --- | --- | --- |
| Spicy Thai Basil Chicken Dimsum | featured: Most Ordered | `/photos/main-course/appetizers/non-veg/spicy-thai-basil-chicken-dimsum.webp` |
| Rainbow Sushi | featured: Must Try | `/photos/sushi-and-japanese/sushi/non-veg/rainbow-sushi.webp` |
| Har Gow | featured: Must Try | `/photos/main-course/appetizers/non-veg/har-gow.webp` |
| Asparagus Maki Roll / Cream Cheese | Sushi — Veg | `/photos/sushi-and-japanese/sushi/veg/asparagus-maki-roll-cream-cheese.webp` |
| Mexican Hat Boy | Sushi — Veg | `/photos/sushi-and-japanese/sushi/veg/mexican-hat-boy.webp` |
| Veg Tempura Sushi | Sushi — Veg | `/photos/sushi-and-japanese/sushi/veg/veg-tempura-sushi.webp` |
| Asparagus & Cream Cheese Roll | Sushi — Veg | `/photos/sushi-and-japanese/sushi/veg/asparagus-and-cream-cheese-roll.webp` |
| Tuna Maki Roll | Sushi — Non-Veg | `/photos/sushi-and-japanese/sushi/non-veg/tuna-maki-roll.webp` |
| Ebi Tempura Sushi Roll | Sushi — Non-Veg | `/photos/sushi-and-japanese/sushi/non-veg/ebi-tempura-sushi-roll.webp` |
| Chicken Katsu Sushi | Sushi — Non-Veg | `/photos/sushi-and-japanese/sushi/non-veg/chicken-katsu-sushi.webp` |
| Avocado Nigiri | Nigiri (4 pcs) — Veg | `/photos/sushi-and-japanese/nigiri/veg/avocado-nigiri.webp` |
| Teriyaki Baby Corn Nigiri | Nigiri (4 pcs) — Veg | `/photos/sushi-and-japanese/nigiri/veg/teriyaki-baby-corn-nigiri.webp` |
| Salmon Nigiri | Nigiri (4 pcs) — Non-Veg | `/photos/sushi-and-japanese/nigiri/non-veg/salmon-nigiri.webp` |
| Tuna Nigiri | Nigiri (4 pcs) — Non-Veg | `/photos/sushi-and-japanese/nigiri/non-veg/tuna-nigiri.webp` |
| Yellowtail Nigiri | Nigiri (4 pcs) — Non-Veg | `/photos/sushi-and-japanese/nigiri/non-veg/yellowtail-nigiri.webp` |
| Salmon Sashimi | Sashimi (4 pcs) | `/photos/sushi-and-japanese/sashimi/salmon-sashimi.webp` |
| Tuna Sashimi | Sashimi (4 pcs) | `/photos/sushi-and-japanese/sashimi/tuna-sashimi.webp` |
| Yellowtail Sashimi | Sashimi (4 pcs) | `/photos/sushi-and-japanese/sashimi/yellowtail-sashimi.webp` |

</details>

<details><summary><strong>Main Course</strong> — 77 missing</summary>

| Dish | Where | Path |
| --- | --- | --- |
| Caramelized Lamb Supreme | featured: Most Ordered | `/photos/main-course/burgers/caramelized-lamb-supreme.webp` |
| Ravioli Pasta | featured: Most Ordered | `/photos/main-course/pasta/ravioli-pasta.webp` |
| Romano Margherita | featured: Most Ordered | `/photos/main-course/pizza/veg/romano-margherita.webp` |
| Spicy Buffalo Pulled Chicken | featured: Most Ordered | `/photos/main-course/sandwiches/non-veg/spicy-buffalo-pulled-chicken.webp` |
| Lasagna | featured: Must Try | `/photos/main-course/pasta/lasagna.webp` |
| Veggie Nepolitana Pizza | featured: Must Try | `/photos/main-course/pizza/veg/veggie-nepolitana-pizza.webp` |
| Sloppy Joe | featured: Must Try | `/photos/main-course/sandwiches/non-veg/sloppy-joe.webp` |
| Veux Katsu Burger | featured: Must Try | `/photos/main-course/burgers/veux-katsu-burger.webp` |
| Clear Tofu Soup | Soups | `/photos/main-course/soups/clear-tofu-soup.webp` |
| Tom Yum | Soups | `/photos/main-course/soups/tom-yum.webp` |
| Spicy Thai Coconut Soup | Soups | `/photos/main-course/soups/spicy-thai-coconut-soup.webp` |
| Miso Soup | Soups | `/photos/main-course/soups/miso-soup.webp` |
| Exotic Asian Green Salad | Salads — Veg | `/photos/main-course/salads/veg/exotic-asian-green-salad.webp` |
| Silken Tofu Salad | Salads — Veg | `/photos/main-course/salads/veg/silken-tofu-salad.webp` |
| Tempura Soft Shell Crab Salad | Salads — Non-Veg | `/photos/main-course/salads/non-veg/tempura-soft-shell-crab-salad.webp` |
| Asian Grilled Chicken Salad | Salads — Non-Veg | `/photos/main-course/salads/non-veg/asian-grilled-chicken-salad.webp` |
| Yum Woon Sen | Salads — Non-Veg | `/photos/main-course/salads/non-veg/yum-woon-sen.webp` |
| Veggies Spring Roll | Appetizers — Veg | `/photos/main-course/appetizers/veg/veggies-spring-roll.webp` |
| Japanese Vegetable Gyoza | Appetizers — Veg | `/photos/main-course/appetizers/veg/japanese-vegetable-gyoza.webp` |
| Kung Pao Tofu Dry | Appetizers — Veg | `/photos/main-course/appetizers/veg/kung-pao-tofu-dry.webp` |
| Edamame Steamed Truffle (Salted) | Appetizers — Veg | `/photos/main-course/appetizers/veg/edamame-steamed-truffle-salted.webp` |
| Spicy Baby Potato | Appetizers — Veg | `/photos/main-course/appetizers/veg/spicy-baby-potato.webp` |
| Lemongrass Mock Meat | Appetizers — Veg | `/photos/main-course/appetizers/veg/lemongrass-mock-meat.webp` |
| Teriyaki Miso Eggplant | Appetizers — Veg | `/photos/main-course/appetizers/veg/teriyaki-miso-eggplant.webp` |
| Thai Style Tofu Satay | Appetizers — Veg | `/photos/main-course/appetizers/veg/thai-style-tofu-satay.webp` |
| Bruschetta (4pc) | Appetizers — Veg | `/photos/main-course/appetizers/veg/bruschetta-4pc.webp` |
| Thai Chicken Satay | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/thai-chicken-satay.webp` |
| Sichuan Mala Chicken | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/sichuan-mala-chicken.webp` |
| Leeks and Chicken Skewers | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/leeks-and-chicken-skewers.webp` |
| Panko Crumbed Prawn | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/panko-crumbed-prawn.webp` |
| Chilli Basil Prawn | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/chilli-basil-prawn.webp` |
| Thai Fish Cake | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/thai-fish-cake.webp` |
| Crispy Tempura Calamari (Squid) | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/crispy-tempura-calamari-squid.webp` |
| Crispy Soft Shell Crab | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/crispy-soft-shell-crab.webp` |
| Prawn Tempura with Ponzu | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/prawn-tempura-with-ponzu.webp` |
| Chicken Katsu with Tonkatsu Dip | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/chicken-katsu-with-tonkatsu-dip.webp` |
| Spicy Thai Basil Chicken Dimsum (4pc) | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/spicy-thai-basil-chicken-dimsum.webp` |
| Har Gow (Prawns Dimsum) (4pc) | Appetizers — Non-Veg | `/photos/main-course/appetizers/non-veg/har-gow.webp` |
| Stir Fry Aubergine in Thai Chilli Sauce | Curry — Veg | `/photos/main-course/curry/veg/stir-fry-aubergine-in-thai-chilli-sauce.webp` |
| Assorted Wild Mushroom in Ginger Soy Sauce | Curry — Veg | `/photos/main-course/curry/veg/assorted-wild-mushroom-in-ginger-soy-sauce.webp` |
| Stir Fry Asian Green in Butter Garlic Sauce | Curry — Veg | `/photos/main-course/curry/veg/stir-fry-asian-green-in-butter-garlic-sauce.webp` |
| Wok Tossed Mock Meat in Thai Chilli Paste | Curry — Veg | `/photos/main-course/curry/veg/wok-tossed-mock-meat-in-thai-chilli-paste.webp` |
| Stir Fry Tofu with Cashew Nut | Curry — Veg | `/photos/main-course/curry/veg/stir-fry-tofu-with-cashew-nut.webp` |
| Pad Karpow Gai (Minced Chicken Chilli Basil) | Curry — Non-Veg | `/photos/main-course/curry/non-veg/pad-karpow-gai-minced-chicken-chilli-basil.webp` |
| Stir Fried Chicken With Cashew Nut | Curry — Non-Veg | `/photos/main-course/curry/non-veg/stir-fried-chicken-with-cashew-nut.webp` |
| Kung Pao Chicken | Curry — Non-Veg | `/photos/main-course/curry/non-veg/kung-pao-chicken.webp` |
| Stir Fried Chicken in Chilli Black Bean Sauce | Curry — Non-Veg | `/photos/main-course/curry/non-veg/stir-fried-chicken-in-chilli-black-bean-sauce.webp` |
| Stir Fried Prawn in Chilli Basil Sauce | Curry — Non-Veg | `/photos/main-course/curry/non-veg/stir-fried-prawn-in-chilli-basil-sauce.webp` |
| Wok Tossed Sea Bass in Thai Chilli Sauce | Curry — Non-Veg | `/photos/main-course/curry/non-veg/wok-tossed-sea-bass-in-thai-chilli-sauce.webp` |
| Wok Tossed Lamb in Chilli Black Bean Sauce | Curry — Non-Veg | `/photos/main-course/curry/non-veg/wok-tossed-lamb-in-chilli-black-bean-sauce.webp` |
| Penne (Choice of Sauce) | Pasta | `/photos/main-course/pasta/penne-arrabiata.webp` |
| Penne (Choice of Sauce) | Pasta | `/photos/main-course/pasta/penne-alfredo.webp` |
| Fettuccine (Choice of Sauce) | Pasta | `/photos/main-course/pasta/fettuccine-pesto.webp` |
| Fettuccine (Choice of Sauce) | Pasta | `/photos/main-course/pasta/fettuccine-arrabiata.webp` |
| Fettuccine (Choice of Sauce) | Pasta | `/photos/main-course/pasta/fettuccine-alfredo.webp` |
| Spaghetti (Choice of Sauce) | Pasta | `/photos/main-course/pasta/spaghetti-pesto.webp` |
| Spaghetti (Choice of Sauce) | Pasta | `/photos/main-course/pasta/spaghetti-arrabiata.webp` |
| Macaroni | Pasta | `/photos/main-course/pasta/macaroni.webp` |
| Asian Green | Pizza — Veg | `/photos/main-course/pizza/veg/asian-green.webp` |
| Peri Peri Cottage Cheese | Pizza — Veg | `/photos/main-course/pizza/veg/peri-peri-cottage-cheese.webp` |
| Veggie Nepolitana | Pizza — Veg | `/photos/main-course/pizza/veg/veggie-nepolitana.webp` |
| Simply Cheese | Pizza — Veg | `/photos/main-course/pizza/veg/simply-cheese.webp` |
| Hawaiian Delicacy | Pizza — Non-Veg | `/photos/main-course/pizza/non-veg/hawaiian-delicacy.webp` |
| Chilli Garlic Shrimp | Pizza — Non-Veg | `/photos/main-course/pizza/non-veg/chilli-garlic-shrimp.webp` |
| Crumbfried Truffle Mushroom | Burgers | `/photos/main-course/burgers/crumbfried-truffle-mushroom.webp` |
| Cottage Cheese | Burgers | `/photos/main-course/burgers/cottage-cheese.webp` |
| Veux Katsu | Burgers | `/photos/main-course/burgers/veux-katsu.webp` |
| Egg Mustard Sandwich | Sandwiches | `/photos/main-course/sandwiches/non-veg/egg-mustard-sandwich.webp` |
| Olive and Edamame Fried Rice | Rice & Noodles | `/photos/main-course/rice-and-noodles/olive-and-edamame-fried-rice.webp` |
| Seafood Spicy XO Fried Rice | Rice & Noodles | `/photos/main-course/rice-and-noodles/seafood-spicy-xo-fried-rice.webp` |
| Khao Pad Kar Pow | Rice & Noodles | `/photos/main-course/rice-and-noodles/khao-pad-kar-pow.webp` |
| Garlic Fried Rice | Rice & Noodles | `/photos/main-course/rice-and-noodles/garlic-fried-rice.webp` |
| Steamed Jasmine Rice (Half / Full) | Rice & Noodles | `/photos/main-course/rice-and-noodles/steamed-jasmine-rice.webp` |
| Street Hakka Noodle | Rice & Noodles | `/photos/main-course/rice-and-noodles/street-hakka-noodle.webp` |
| Pan Fried Noodles Hunan Style | Rice & Noodles | `/photos/main-course/rice-and-noodles/pan-fried-noodles-hunan-style.webp` |
| Mexican Tacos (3pc) | Around the World | `/photos/main-course/around-the-world/mexican-tacos.webp` |
| Mexican Rice Bowl | Around the World | `/photos/main-course/around-the-world/mexican-rice-bowl.webp` |

</details>

<details><summary><strong>Desserts</strong> — 2 missing</summary>

| Dish | Where | Path |
| --- | --- | --- |
| Matcha Cheesecake | — | `/photos/desserts/matcha-cheesecake.webp` |
| Biscoff Cheesecake | — | `/photos/desserts/biscoff-cheesecake.webp` |

</details>

