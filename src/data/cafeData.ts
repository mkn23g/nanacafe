export type MenuCategory =
  | 'Slow Bar'
  | 'Hot Coffee'
  | 'Iced Coffee'
  | 'Special & Tea'
  | 'Non-Coffee & Frappe'
  | 'Food'

export interface MenuItem {
  name: string
  laoName?: string
  category: MenuCategory
  price: string
  image: string
  note?: string
  badge?: string
}

export const menuCategories: MenuCategory[] = [
  'Slow Bar',
  'Hot Coffee',
  'Iced Coffee',
  'Special & Tea',
  'Non-Coffee & Frappe',
  'Food',
]

export const menuItems: MenuItem[] = [
  // Slow Bar
  {
    name: 'Pour Over / Hand Drip',
    category: 'Slow Bar',
    price: '59K',
    image: '/images/menu/pour-over.jpg',
    note: 'Medium-bodied, layered aromatics — Ethiopia, Costa Rica, Guatemala, or Lao Arabica',
    badge: 'Slow Bar',
  },
  {
    name: 'Aeropress',
    category: 'Slow Bar',
    price: '59K',
    image: '/images/menu/aeropress.jpg',
    note: 'Rich, concentrated extraction — Ethiopia, Costa Rica, or Guatemala',
    badge: 'Slow Bar',
  },
  {
    name: 'Cold Brew / Cold Drip',
    category: 'Slow Bar',
    price: '59K',
    image: '/images/menu/cold-brew.jpg',
    note: '8–12 hour cold extraction for smooth, intense flavor',
    badge: '8–12 Hrs',
  },

  // Hot Coffee
  { name: 'Espresso', laoName: 'ເອສເປໂຊ້', category: 'Hot Coffee', price: '35K', image: '/images/menu/espresso.jpg' },
  { name: 'Espresso Macchiato', laoName: 'ເອສເປໂຊ້ ແມັກຄິອາໂຕ້', category: 'Hot Coffee', price: '35K', image: '/images/menu/espresso-macchiato.jpg' },
  { name: 'Espresso Con Panna', laoName: 'ເອສເປໂຊ້ ຄອນປານາ', category: 'Hot Coffee', price: '35K', image: '/images/menu/espresso-con-panna.jpg' },
  { name: 'Hot Americano', laoName: 'ອາເມລິກາໂນ້ຮ້ອນ', category: 'Hot Coffee', price: '35K', image: '/images/menu/hot-americano.jpg' },
  { name: 'Hot Cappuccino', laoName: 'ຄາປູຊິໂນ້ ຮ້ອນ', category: 'Hot Coffee', price: '42K', image: '/images/menu/hot-cappuccino.jpg' },
  { name: 'Hot Mocha', laoName: 'ມ໋ອກຄ້າຮ້ອນ', category: 'Hot Coffee', price: '42K', image: '/images/menu/hot-mocha.jpg' },
  { name: 'Hot Café Latte', laoName: 'ກາເຟ ລາເຕ້ ຮ້ອນ', category: 'Hot Coffee', price: '42K', image: '/images/menu/hot-latte.jpg' },
  { name: 'Picco Latte', laoName: 'ພິກໂກໂລ້ລາເຕ້', category: 'Hot Coffee', price: '42K', image: '/images/menu/picco-latte.jpg' },
  { name: 'Hot Caramel Macchiato', laoName: 'ຄາລາເມວແມັກຄິອາໂຕ້ ຮ້ອນ', category: 'Hot Coffee', price: '42K', image: '/images/menu/hot-caramel-macchiato.jpg' },

  // Iced Coffee
  { name: 'Iced Americano', laoName: 'ອາເມລິກາໂນເຢັນ', category: 'Iced Coffee', price: '40K', image: '/images/menu/iced-americano.jpg', badge: 'Best Seller' },
  { name: 'Iced Espresso', laoName: 'ເອສເປໂຊ້ເຢັນ', category: 'Iced Coffee', price: '46K', image: '/images/menu/iced-espresso.jpg' },
  { name: 'Iced Café Latte', laoName: 'ລາເຕ້ເຢັນ', category: 'Iced Coffee', price: '46K', image: '/images/menu/iced-latte.jpg' },
  { name: 'Iced Cappuccino', laoName: 'ຄາປູຊິໂນ້ເຢັນ', category: 'Iced Coffee', price: '46K', image: '/images/menu/iced-cappuccino.jpg' },
  { name: 'Iced Caramel Macchiato', laoName: 'ຄາລາເມວແມັກຄິອາໂຕ້ເຢັນ', category: 'Iced Coffee', price: '46K', image: '/images/menu/iced-caramel-macchiato.jpg' },
  { name: 'Iced Mocha', laoName: 'ມ໋ອກຄ້າເຢັນ', category: 'Iced Coffee', price: '46K', image: '/images/menu/iced-mocha.jpg' },
  { name: 'Iced Americano Honey Lemon', laoName: 'ອາເມລິກາໂນນ້ຳເຜິ້ງໝາກນາວ', category: 'Iced Coffee', price: '46K', image: '/images/menu/iced-americano-lemon.jpg' },

  // Special & Tea
  { name: 'Nana Coffee', laoName: 'ນານາຄອຟຟີ້', category: 'Special & Tea', price: '59K', image: '/images/menu/nana-coffee.jpg', badge: 'Signature' },
  { name: 'Nana Dirty', laoName: 'ນານາເດີຕີ້ ຄອຟຟີ້', category: 'Special & Tea', price: '59K', image: '/images/menu/nana-dirty.jpg', badge: 'Signature' },
  { name: 'Matcha Coffee', laoName: 'ມັດຊະຄອຟຟີ້', category: 'Special & Tea', price: '59K', image: '/images/menu/matcha-coffee.jpg' },
  { name: 'Minty & Chocolate', laoName: 'ມິນຕີ້ ຊ໋ອກໂກແລັດ', category: 'Special & Tea', price: '59K', image: '/images/menu/mint-chocolate.jpg' },
  { name: 'Mixed Berries Iced Tea', laoName: 'ຊາເຢັນເບີຣີລວມ', category: 'Special & Tea', price: '45K', image: '/images/menu/mixed-berries-tea.jpg' },
  { name: 'Sunset Peach Tea', laoName: 'ຊັນເຊັດພີຈຊາເຢັນ', category: 'Special & Tea', price: '45K', image: '/images/menu/sunset-peach-tea.jpg' },
  { name: 'Honey Lemonade Iced Tea', laoName: 'ຊາເຢັນນ້ຳເຜິ້ງໝາກນາວ', category: 'Special & Tea', price: '45K', image: '/images/menu/honey-lemon-tea.jpg' },
  { name: 'Hot Tea Selection', category: 'Special & Tea', price: '35K', image: '/images/menu/hot-tea.jpg', note: 'Earl Grey, English Breakfast, Super Berries, Lemongrass Citrus & Ginger, Chai Black Tea, Green Tea Jasmine' },

  // Non-Coffee & Frappe
  { name: 'Matcha Latte (Hot / Cold)', laoName: 'ມັດຊະລາເຕ້', category: 'Non-Coffee & Frappe', price: '35K / 45K', image: '/images/menu/matcha-latte.jpg' },
  { name: 'Hojicha Latte (Hot / Cold)', laoName: 'ໂຮຈິຊະລາເຕ້', category: 'Non-Coffee & Frappe', price: '35K / 45K', image: '/images/menu/hojicha-latte.jpg' },
  { name: 'Chocolate (Hot / Cold)', laoName: 'ຊ໋ອກໂກແລັດ', category: 'Non-Coffee & Frappe', price: '35K / 45K', image: '/images/menu/chocolate-drink.jpg' },
  { name: 'Coffee Frappes', category: 'Non-Coffee & Frappe', price: '55K', image: '/images/menu/coffee-frappe.jpg', note: 'Espresso, Latte, Cappuccino, Mocha, or Caramel Macchiato' },
  { name: 'Non-Coffee Frappes', category: 'Non-Coffee & Frappe', price: '55K', image: '/images/menu/non-coffee-frappe.jpg', note: 'Chocolate, Milk, Hojicha, Matcha, or Oreo & Cream' },
  { name: 'Smoothies', category: 'Non-Coffee & Frappe', price: '45K', image: '/images/menu/smoothies.jpg', note: 'Strawberry Yogurt, Blueberry Yogurt, or Chocolate Chip & Banana' },
  { name: 'Refreshing Sodas', category: 'Non-Coffee & Frappe', price: '45K', image: '/images/menu/refreshing-soda.jpg', note: 'Yuzu, Strawberry, Peach, Passion Fruit, Raspberry, Lavender, Watermelon, Lychee' },

  // Food
  { name: 'Nana Breakfast Set', laoName: 'ເຊັດອາຫານເຊົ້ານານາ', category: 'Food', price: '120K', image: '/images/menu/nana-breakfast.jpg', badge: 'Breakfast' },
  { name: 'Pate Breakfast Set', laoName: 'ເຊັດອາຫານເຊົ້າປາເຕ້', category: 'Food', price: '75K', image: '/images/menu/pate-breakfast.jpg' },
  { name: 'Smoked Salmon Avocado Sandwich', laoName: 'ແຊນວິດແຊວມ້ອນ ອາໂວກາໂດ້', category: 'Food', price: '89K', image: '/images/menu/salmon-avocado.jpg' },
  { name: 'Chicken / Tuna / Ham & Cheese Sandwich', category: 'Food', price: '79K', image: '/images/menu/club-sandwich.jpg' },
  { name: 'Spaghetti Carbonara', laoName: 'ສະປາເກັດຕີ້ຄາໂບນາລ້າ', category: 'Food', price: '89K', image: '/images/menu/carbonara.jpg' },
  { name: 'Stir-Fried Spaghetti Dried Chili & Bacon', laoName: 'ສະປາເກັດຕີ້ເບຄ້ອນພິກແຫ້ງ', category: 'Food', price: '79K', image: '/images/menu/spaghetti-bacon.jpg' },
  { name: 'Nana Salad', laoName: 'ນານາ ສະຫຼັດ', category: 'Food', price: '150K', image: '/images/menu/nana-salad.jpg' },
  { name: 'Tuna Salad', laoName: 'ທູນ້າ ສະຫຼັດ', category: 'Food', price: '85K', image: '/images/menu/tuna-salad.jpg' },
  { name: 'Mushroom / Spinach Soup', laoName: 'ຊຸບເຫັດ / ຊຸບຜັກໂຫມ', category: 'Food', price: '79K / 69K', image: '/images/menu/mushroom-soup.jpg' },
  { name: 'Pad Thai / Pad See Ew / Rad Na / Suki', category: 'Food', price: '59K / 69K', image: '/images/menu/pad-thai.jpg', note: 'Choice of Pork, Chicken, or Seafood' },
  { name: 'Rice Dishes (Fried Rice, Green Curry, Panang, Kale)', category: 'Food', price: '55K – 65K', image: '/images/menu/rice-dishes.jpg' },
]

export const teamMembers = [
  { name: 'ທ່ານ ນາງ ປະທຸມວັນ ພົມມະຈັນ', role: 'General Manager (ຜູ້ຈັດການໃຫຍ່)' },
  { name: 'ທ່ານ ນາງ ຂວັນໃຈ ຈັນທະວົງສາ', role: 'Front-of-House Manager (ຜູ້ຈັດການໜ້າຮ້ານ)' },
  { name: 'ທ່ານ ນາງ ອໍາພາພອນ ວົງມົນຕີ', role: 'Head Accountant (ຫົວໜ້າບັນຊີ)' },
  { name: 'ທ່ານ ນາງ ນິດສາຄອນ ວໍລະສານ', role: 'Head of Bar (ຫົວໜ້າບາ)' },
  { name: 'ທ່ານ ທິບພະວັນ ອິນທະວົງ', role: 'Head Chef (ຫົວໜ້າຄົວ)' },
  { name: 'ທ່ານ ຫົງຈັນໄຊຍະວົງ & ທ່ານ ພຸດທະສອນ ວົງມົນຕີ', role: 'Advisors (ທີ່ປຶກສາ)' },
]
