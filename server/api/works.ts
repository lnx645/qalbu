import { WorkType } from "~~/types/work-type.types";

const IMAGES = [
  "https://kwikku.us/uploads/public/images/short/cover/thumb/918013859530-20250817175024.jpg",
  "https://kwikku.us/uploads/public/images/short/cover/thumb/732644795219-20260121163916.jpg",
  "https://kwikku.us/uploads/public/images/short/cover/thumb/228351662177-20251222164246.png",
  "https://kwikku.us/uploads/public/images/short/cover/thumb/947087280517-20260121203221.png",
  "https://kwikku.us/uploads/public/images/short/cover/thumb/989967225622-20260121104353.jpg",
  "https://kwikku.us/uploads/public/images/short/cover/thumb/458495283695-20260121214347.jpg",
  "https://kwikku.us/uploads/public/images/short/cover/thumb/834358443263-20260122184107.jpg",
  "https://kwikku.us/uploads/public/images/short/cover/thumb/239148604909-20260122222035.png",
  "https://kwikku.us/uploads/public/images/flash/cover/thumb/311281814491-20251226232219.webp",
  "https://kwikku.us/uploads/public/images/novel/cover/thumb/953885850338-20251202141250.jpg",
];

const WORKS = [
  {
    slug: "naga-tersembunyi-agung-di",
    author: "dadan_h",
    title: "Naga Tersembunyi Agung di",
    category: "Fantasy",
    type: WorkType.CERITA_PENDEK,
  },
  {
    slug: "the-strongest-system",
    title: "The Strongest System",
    category: "Fantasy",
    author: "dadan_h",
    type: WorkType.PUISI,
  },
  {
    slug: "shadows-of-eternity",
    title: "Shadows of Eternity",
    category: "Fantasy",
    author: "dadan_h",
    type: WorkType.NOVEL,
  },
  {
    slug: "naga-tersembunyi-agung-di-kota",
    title: "Naga Tersembunyi Agung di Kota",
    category: "Action",
    author: "dadan_h",
    type: WorkType.FILM_SCRIPT,
  },
  {
    slug: "mystic-chronicles",
    title: "Mystic Chronicles",
    category: "Fantasy",
    author: "dadan_h",
    type: WorkType.CERITA_PENDEK,
  },
  {
    slug: "celestial-warriors",
    title: "Celestial Warriors",
    category: "Action",
    author: "dadan_h",
    type: WorkType.CERITA_PENDEK,
  },
  {
    slug: "eclipse-kingdom",
    title: "Eclipse Kingdom",
    category: "Fantasy",
    author: "dadan_h",
    type: WorkType.CERITA_PENDEK,
  },
  {
    slug: "crimson-tides",
    title: "Crimson Tides",
    category: "Adventure",
    author: "dadan_h",
    type: WorkType.CERITA_PENDEK,
  },
  {
    slug: "aku-sudah-berjanji",
    author: "dadan_h",
    title: "Aku Sudah Berjanji",
    category: "Drama",
    type: WorkType.CERITA_PENDEK,
  },
];

export default defineEventHandler(() => {
  return WORKS.map((work) => ({
    ...work,
    image: IMAGES[Math.floor(Math.random() * IMAGES.length)],
  }));
});
