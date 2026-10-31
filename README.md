# Veux Menu

The QR menu guests open at the table. One phone-shaped page: a home screen
listing the five categories, a page per category, and a sheet per dish.

Most of the time, changing the menu means editing **one file** —
`src/data/menu.js` — and nothing else. The rest of this explains how.

---

## Changing the menu

### Opening it

Everything a guest reads lives in `src/data/menu.js`. Open it in any text
editor. It is a long list of dishes that looks like this:

```js
{ name: "Har Gow", price: 499, desc: "Cantonese-style prawn dimsum." },
```

Three rules, and the file explains them again at the top:

1. Text sits between `"double quotes"`.
2. Prices are plain numbers — `499`, never `₹499` or `1,240`.
3. Every line inside `{ }` ends with a comma.

If the site goes blank after an edit, you have almost certainly dropped a
comma, a quote mark or a closing brace. Press **Cmd+Z** until it comes back.

### Editing a dish

Change the words between the quotes and save:

```js
{ name: "Har Gow", price: 520, desc: "Prawn dimsum, coconut & gochujang." },
```

### Adding a dish

Copy a whole line, paste it beneath, change it. Put it inside the group you
want it to appear in — the group is the heading a guest taps to expand, like
`Hot Coffees`.

### What a dish can have

| Field      | Needed?  | What it does |
| ---------- | -------- | ------------ |
| `name`     | yes      | The dish name. Also becomes its web address. |
| `price`    | yes      | A plain number. |
| `desc`     | optional | One line under the name. |
| `tag`      | optional | Small gold pill — "Must try". Use sparingly. |
| `origin`   | optional | The story paragraph in the dish view. One or two sentences. |
| `photo`    | optional | One photograph — see below. |
| `photos`   | optional | Several, as a swipeable gallery. Use `photo` **or** `photos`, never both. |
| `video`    | optional | Unlocks "Watch it being made". |
| `diet`     | optional | See **The veg and non-veg marks**. |
| `variants` | optional | A second price. See **Dishes with two prices**. |

### Two things never to change

**Category `id`s are printed on the QR codes.** `id: "sushi"` is the web
address `/menu/sushi`, and that address is on a physical card on a physical
table. Changing it breaks every QR code pointing at it. Dish names are safe
to change; category ids are not.

**Two dishes in one category cannot share a name.** The name becomes the web
address, so two "Salmon" rows in Sushi would both lead to the same page and
one of them would be unreachable. The site refuses to start if this happens
and tells you which two — give one of them a fuller name, the way
`Salmon Nigiri` and `Salmon Sashimi` are distinguished now.

---

## Adding a photograph

### Where it goes

Drop the file into `public/photos/`, in the folder matching its category,
at exactly the path named in the dish's `photo:` line. The dish already
names its path even when the picture does not exist yet — so usually you are
not inventing a path, just filling one.

```
public/photos/sushi-and-japanese/sushi/non-veg/rainbow-sushi.webp
                └── category ──┘ └─ group ─┘   └── the dish ──┘
```

Save it and it appears. There is no other step. A dish with no photograph is
not broken — it shows a gold clover tile instead, and the layout is built to
look right either way.

### Naming the file

**Lowercase letters, numbers and hyphens only.** No spaces, no capitals, no
`&`, no apostrophes, no `_`.

| Dish | File |
| ---- | ---- |
| Chef Special Avocado Roll | `chef-special-avocado-roll.webp` |
| 7 Spice Chicken | `seven-spice-chicken.webp` |
| Har Gow (Prawns Dimsum) (4pc) | `har-gow.webp` |

This matters more than it looks: the server the site runs on treats
`Rainbow-Sushi.webp` and `rainbow-sushi.webp` as two different files, so a
capital letter means a photograph that works on your laptop and is missing
on a guest's phone.

### Size and format

- **Format:** WebP. Exported from Photoshop as "WebP", quality 80.
- **Shape:** landscape, 4:3. The dish view crops to roughly 39:33, so keep
  the food away from the very top and bottom.
- **Width:** 1200px is plenty. Anything larger is wasted — it will never be
  shown bigger than about 400px, and a guest on restaurant wifi pays for
  every extra kilobyte.
- **Weight:** aim for 30–60 KB per photograph.

### One photograph used by two dishes

Point both at the same file rather than saving a second copy. Seven pictures
were being stored two and three times over; one file, many references, is
the rule.

---

## The veg and non-veg marks

A dish with a `diet` line shows the square every Indian menu uses — green for
vegetarian, dark red for non-vegetarian — in the list and in the dish view:

```js
{ name: "Silken Tofu Salad", price: 395, diet: "Vegetarian" },
{ name: "Thai Chicken Satay", price: 450, diet: "Non-vegetarian" },
```

Those are the only two values. A dish with no `diet` line shows no mark.

**Leave it off rather than guessing.** No mark says "ask us"; a wrong mark is
a serious thing to hand a guest, and some of them are not guessable from a
name. The dishes still waiting on the chef are listed in
[docs/menu-worklist.md](docs/menu-worklist.md).

Allergens do not go here. They are the chef's to confirm, and the menu has
nowhere to put them yet.

---

## Dishes with two prices

Some plates are priced twice — a veg and a chicken version, a half and a
full. The second price goes in `variants`, never in the description:

```js
{
  name: "Udon Noodles with Chilli Black Bean",
  price: 450,
  variants: [{ label: "Chicken", price: 500 }, { label: "Seafood", price: 550 }],
},
```

That shows ₹ 450 as the price, with `Chicken ₹ 500 · Seafood ₹ 550`
underneath, set in the same figures as every other price on the page.

When the second number is an **add-on** rather than a whole alternative
price, say so and it renders as `+ ₹ 100`:

```js
variants: [{ label: "Chicken", price: 100, supplement: true }],
```

---

## Running it on your own computer

You need [Node.js](https://nodejs.org) — the "LTS" download. Once, in a
terminal, from this folder:

```sh
npm install
```

Then, any time you want to see your changes:

```sh
npm run dev
```

It prints an address like `http://localhost:5173/`. Open it in a browser.
Edit `src/data/menu.js`, save, and the page updates by itself.

Press **Ctrl+C** in the terminal to stop.

To check what guests will actually get:

```sh
npm run build && npm run preview
```

---

## Swapping in a licensed display face

The headings are set in Cormorant Garamond, which stands in for **Ivy Presto
Display Thin** until that licence is bought. To swap it:

1. Put the WOFF2 files in `public/fonts/`, named
   `ivy-presto-display-300-normal.woff2` and so on — lowercase and hyphens,
   same as photographs.
2. Add an `@font-face` block for each one in `src/styles/fonts.css`, copying
   the shape of the blocks already there.
3. In `src/styles/tokens.css`, change one line:

   ```css
   --font-display: "Ivy Presto Display", "Cormorant Garamond", Georgia, serif;
   ```

Leaving Cormorant second means that if a face fails to load, the type falls
back to something close rather than to the system serif.

All eight faces in use are served from this site rather than from Google,
which is why the brand type appears without a wait on a slow connection.
Keep it that way.

---

## The rest of the files

You will not usually need these.

| Path | What it is |
| ---- | ---------- |
| `src/data/menu.js` | **The menu.** Everything a guest reads. |
| `public/photos/` | The photographs. |
| `public/fonts/` | The typefaces, served from our own site. |
| `brand/` | Logo masters — see [brand/README.md](brand/README.md). |
| `docs/menu-worklist.md` | What still needs a decision, and from whom. |
| `src/components/`, `src/routes/`, `src/styles/` | The site itself. |
| `plugins/` | Two small build-time helpers, explained in their own files. |

### A note on the naming rule

It applies to every new file and folder anywhere in this project, not just
photographs: **lowercase, hyphens, nothing else.** The server is
case-sensitive, and a file that loads on a laptop and 404s on a phone is a
hard problem to spot.
