import black0 from './tea/black/black0.png';
import black1 from './tea/black/black1.png';
import black2 from './tea/black/black2.png';
import black3 from './tea/black/black3.png';
import dark0 from './tea/dark/dark0.png';
import dark1 from './tea/dark/dark1.png';
import dark2 from './tea/dark/dark2.png';
import dark3 from './tea/dark/dark3.png';
import green0 from './tea/green/green0.png';
import green1 from './tea/green/green1.png';
import green2 from './tea/green/green2.png';
import green3 from './tea/green/green3.png';
import oolong0 from './tea/oolong/oolong0.png';
import oolong1 from './tea/oolong/oolong1.png';
import oolong2 from './tea/oolong/oolong2.png';
import oolong3 from './tea/oolong/oolong3.png';
import white0 from './tea/white/white.png';
import white1 from './tea/white/white.png';
import white2 from './tea/white/white.png';
import white3 from './tea/white/white.png';
import yellow0 from './tea/yellow/yellow0.png';
import yellow1 from './tea/yellow/yellow1.png';
import yellow2 from './tea/yellow/yellow2.png';
import yellow3 from './tea/yellow/yellow3.png';

const items = [
  {
    name: "Nature's Absinth",
    category: 'green',
    id: 'green0',
    description:
      'This blend of green tea and elderberries will transport you to a magical forest filled with fairies and unicorns.',
    source: green0,
    favorite: false,
  },
  {
    name: 'Sweet Dreams',
    category: 'green',
    id: 'green1',
    description:
      'This soothing blend of green tea and chamomile will help you relax and drift off to sleep peacefully.',
    source: green1,
    favorite: false,
  },
  {
    name: 'Emerald Isle',
    category: 'green',
    id: 'green2',
    description:
      'A green tea blend inspired by the lush, verdant landscapes of Ireland, with notes of Irish moss and wildflowers.',
    source: green2,
    favorite: false,
  },
  {
    name: 'Mystic Moon',
    category: 'green',
    id: 'green3',
    description:
      'A tropical green tea infused with the sweet, juicy flavor of ripe mangoes.',
    source: green3,
    favorite: false,
  },
  {
    name: 'Fire Blood',
    category: 'black',
    id: 'black0',
    description:
      'Start your day off right with this invigorating black tea blend, infused with hints of citrus and ginger.',
    source: black0,
    favorite: false,
  },
  {
    name: 'Berry Blast',
    category: 'black',
    id: 'black1',
    description:
      "A refreshing blend of black tea and mixed berries that's bursting with flavor.",
    source: black1,
    favorite: false,
  },
  {
    name: 'Chocolate Indulgence',
    category: 'black',
    id: 'black2',
    description:
      'A decadent black tea infused with the rich, indulgent taste of chocolate.',
    source: black2,
    favorite: false,
  },
  {
    name: 'Lemon Twist',
    category: 'black',
    id: 'black3',
    description:
      'A refreshing black tea infused with the tangy, zesty flavor of lemon.',
    source: black3,
    favorite: false,
  },
  {
    name: 'Ginger Spice',
    category: 'white',
    id: 'white0',
    description:
      'This spicy white tea is infused with the warming flavors of ginger and cinnamon.',
    source: white0,
    favorite: false,
  },
  {
    name: 'Winter Wonderland',
    category: 'white',
    id: 'white1',
    description:
      'Embrace the chill of winter with this cozy blend of white tea, cinnamon, and cloves.',
    source: white1,
    favorite: false,
  },
  {
    name: 'Vanilla Bean',
    category: 'white',
    id: 'white2',
    description:
      'This smooth and creamy white tea is infused with the sweet, comforting flavor of vanilla.',
    source: white2,
    favorite: false,
  },
  {
    name: 'Golden Sunset',
    category: 'white',
    id: 'white3',
    description:
      'A soothing white tea blend infused with the warm, comforting flavors of chamomile and honey.',
    source: white3,
    favorite: false,
  },
  {
    name: 'Blueberry Bliss',
    category: 'dark',
    id: 'dark0',
    description:
      'A fruity dark tea infused with the sweet, juicy flavor of fresh blueberries.',
    source: dark0,
    favorite: false,
  },
  {
    name: 'Lavender Fields',
    category: 'dark',
    id: 'dark1',
    description:
      'A calming herbal tea infused with the soothing fragrance of lavender, perfect for relaxation and stress relief.',
    source: dark1,
    favorite: false,
  },
  {
    name: 'Peachy Keen',
    category: 'dark',
    id: 'dark2',
    description:
      'This fruity dark tea is infused with the delicious taste of juicy peaches.',
    source: dark2,
    favorite: false,
  },
  {
    name: 'Spiced Apple Pie',
    category: 'dark',
    id: 'dark3',
    description:
      'The perfect tea to enjoy on a crisp fall day, this dark tea is infused with the warm flavors of cinnamon, nutmeg, and apple.',
    source: dark3,
    favorite: false,
  },
  {
    name: 'Citrus Burst',
    category: 'yellow',
    id: 'yellow0',
    description:
      'A zingy yellow tea infused with the bright, refreshing flavors of lemon and lime.',
    source: yellow0,
    favorite: false,
  },
  {
    name: 'Tropical Tango',
    category: 'yellow',
    id: 'yellow1',
    description:
      'A lively yellow tea infused with the vibrant flavors of pineapple, mango, and papaya.',
    source: yellow1,
    favorite: false,
  },
  {
    name: 'Caramel Delight',
    category: 'yellow',
    id: 'yellow2',
    description:
      'This creamy yellow tea is infused with the rich, indulgent taste of caramel.',
    source: yellow2,
    favorite: false,
  },
  {
    name: 'Sunrise Serenade',
    category: 'yellow',
    id: 'yellow3',
    description:
      'A spicy yellow tea blend with aromatic spices like cinnamon, cardamom, and cloves, inspired by traditional Indian chai.',
    source: yellow3,
    favorite: false,
  },
  {
    name: 'Masala Chai',
    category: 'oolong',
    id: 'oolong0',
    description:
      'A spicy oolong tea blend with aromatic spices like cinnamon, cardamom, and cloves, inspired by traditional Indian chai.',
    source: oolong0,
    favorite: false,
  },
  {
    name: 'Cherry Blossom',
    category: 'oolong',
    id: 'oolong1',
    description:
      'A delicate oolong tea blend infused with the delicate and fragrant flavor of cherry blossoms, perfect for a light and refreshing cup.',
    source: oolong1,
    favorite: false,
  },
  {
    name: 'Ruby Red',
    category: 'oolong',
    id: 'oolong2',
    description:
      'A fruity oolong tea blend made with tart and tangy hibiscus petals, perfect for a refreshing iced tea.',
    source: oolong2,
    favorite: false,
  },
  {
    name: 'Ginger Peach',
    category: 'oolong',
    id: 'oolong3',
    description:
      'A zesty and fruity oolong tea blend infused with the warmth of ginger and the sweetness of ripe peaches, for a satisfying and flavorful cup.',
    source: oolong3,
    favorite: false,
  },
];

export default items;
