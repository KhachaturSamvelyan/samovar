import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: "1",
    name: "Milk Oolong 355",
    price: 1197,
    description:
      "Milk oolong, – это один из самых популярных видов китайского улуна",
    image: "/img/img1.webp",
  },
  {
    id: "2",
    name: "Жасминовый улун (Тайвань)",
    price: 2682,
    description:
      "Улун с жасмином — это настоящее произведение искусства, которое способно перенести вас в удивительный мир Востока.",
    image: "/img/img2.webp",
  },
  {
    id: "3",
    name: "Молочный улун Най сян",
    price: 889,
    description:
      "Молочный улун Най Сян – это особый вид улуна, который отличается своим ароматом, напоминающим свежее молоко или сливочные ириски.",
    image: "/img/img3.webp",
  },
  {
    id: "4",
    name: "Молочный улун с дыней",
    price: 913,
    description:
      "Изысканный китайский чай окутывает своим нежно-золотистым цветом, словно первые солнечные лучи пробуждают природу весной.",
    image: "/img/img4.webp",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
