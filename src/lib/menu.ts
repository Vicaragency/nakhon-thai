/**
 * Menukaart Nakhon Thai (uit het Figma-ontwerp).
 * Elke categorie heeft een NL/EN-titel, een Chinese ondertitel en items met
 * nummer, Chinese naam, gerechtnaam en prijs.
 */
export interface MenuItem {
  code: string;
  zh: string;
  name: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  zh: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    title: "Soup",
    zh: "汤类",
    items: [
      { code: "1A.", zh: "云吞汤", name: "Wan tan soup", price: "€10.50" },
      { code: "2A.", zh: "酸辣豆腐汤", name: "Tofu hot & sour soup", price: "€7.50" },
      { code: "3A.", zh: "青菜豆腐汤", name: "Tofu vegetables soup", price: "€6.50" },
      { code: "4A.", zh: "粟米汤", name: "Sweet corn soup", price: "€7.50" },
    ],
  },
  {
    title: "Dim Sum",
    zh: "点心",
    items: [
      { code: "7A.", zh: "虾饺", name: "Steamed Har Kaul", price: "€9.00" },
      { code: "8A.", zh: "烧麦", name: "Steamed Siel Mai", price: "€8.50" },
      { code: "9A.", zh: "春卷", name: "Vegetables springs roll", price: "€9.50" },
      { code: "10A.", zh: "煎饺子", name: "Fried dumplings", price: "€10.50" },
      { code: "13D.", zh: "炸尤鱼圈", name: "Fried squids rings", price: "€10.50" },
    ],
  },
  {
    title: "Fried Rice & Noodles",
    zh: "面条 / 炒饭",
    items: [
      { code: "13A.", zh: "牛肉汤面", name: "Noodle soup with beef", price: "€18.00" },
      { code: "14A.", zh: "云吞汤面", name: "Noodle soup with Wan Tan", price: "€18.00" },
      { code: "15A.", zh: "星洲炒米粉", name: "Noodle soup with seafood", price: "€25.00" },
      { code: "15B.", zh: "星洲炒米粉", name: "Singapore vermicelli", price: "€19.00" },
      { code: "16A.", zh: "牛肉炒底面", name: "Fried noodle with beef", price: "€18.00" },
      { code: "17A.", zh: "海鲜炒底面", name: "Fried noodle with seafood", price: "€25.00" },
      { code: "18A.", zh: "大虾炒饭", name: "Fried rice with prawns", price: "€25.00" },
    ],
  },
  {
    title: "Specialities",
    zh: "点心",
    items: [
      { code: "7A.", zh: "虾饺", name: "Steamed Har Kaul", price: "€9.00" },
      { code: "8A.", zh: "烧麦", name: "Steamed Siel Mai", price: "€8.50" },
      { code: "9A.", zh: "春卷", name: "Vegetables springs roll", price: "€9.50" },
      { code: "10A.", zh: "煎饺子", name: "Fried dumplings", price: "€10.50" },
      { code: "13D.", zh: "炸尤鱼圈", name: "Fried squids rings", price: "€10.50" },
      { code: "14D.", zh: "香辣鸡翅", name: "Spicy Chicken Wings", price: "€11.00" },
      { code: "15D.", zh: "牛肉串", name: "Beef Skewers", price: "€12.00" },
      { code: "16D.", zh: "生鱼片", name: "Sashimi", price: "€15.00" },
      { code: "17D.", zh: "炸春卷", name: "Fried Spring Rolls", price: "€9.00" },
      { code: "18D.", zh: "炒牛河", name: "Fried Flat Noodles with Beef", price: "€12.50" },
      { code: "19D.", zh: "海南鸡饭", name: "Hainanese Chicken Rice", price: "€13.00" },
      { code: "20D.", zh: "柚子茶", name: "Pomelo Tea", price: "€4.50" },
      { code: "21D.", zh: "芒果布丁", name: "Mango Pudding", price: "€5.50" },
      { code: "22D.", zh: "豆腐沙拉", name: "Tofu Salad", price: "€7.00" },
      { code: "23D.", zh: "海鲜炒饭", name: "Seafood Fried Rice", price: "€14.00" },
      { code: "24D.", zh: "红烧肉", name: "Braised Pork Belly", price: "€13.50" },
      { code: "25D.", zh: "椰汁西米露", name: "Coconut Sago", price: "€6.00" },
      { code: "26D.", zh: "鸳鸯奶茶", name: "Yuan Yang Milk Tea", price: "€3.50" },
      { code: "27D.", zh: "糖醋排骨", name: "Sweet and Sour Ribs", price: "€11.50" },
    ],
  },
];

/** Categorie-labels + thumbnails voor de scrollende band op de home. */
export const MARQUEE_CATEGORIES = [
  { label: "Soepen", image: "/images/cta-soup.png" },
  { label: "Dim Sum", image: "/images/dish-dumplings.jpg" },
  { label: "Loempia", image: "/images/dish-stirfry.jpg" },
  { label: "Noodles", image: "/images/dish-duck.jpg" },
  { label: "Vleesgerechten", image: "/images/dish-duck.jpg" },
  { label: "Visgerechten", image: "/images/hero-squid.png" },
] as const;

/** Klantreviews (Google). */
export const REVIEWS = [
  {
    name: "Bart",
    rating: 5,
    text: "Heerlijk gegeten! Verse, authentieke Thaise gerechten en een gezellige sfeer in het hart van Brugge. Zeker een aanrader.",
  },
  {
    name: "Sofie",
    rating: 5,
    text: "De dim sum is fantastisch en het personeel super vriendelijk. We komen zeker terug. Ook ideaal om af te halen.",
  },
  {
    name: "Thomas",
    rating: 5,
    text: "Beste Thai van Brugge. Ruime keuze, eerlijke prijzen en alles smaakt vers bereid. Reserveren is wel aangeraden.",
  },
] as const;
