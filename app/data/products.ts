export type ProductCategory = "Shirt" | "Jogger";

export type DropProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  color: string;
  price: number;
  fit: string;
  tags: string[];
  modelPath: string;
  previewImage: string;
  previewTitle: string;
  previewDescription: string;
};

export const dropProducts: DropProduct[] = [
  {
    id: "shirt-obsidian-core",
    name: "Core Compression Tee",
    category: "Shirt",
    color: "Obsidian",
    price: 89,
    fit: "Athletic Taper",
    tags: ["PERFORMANCE", "DROP 001"],
    modelPath: "/models/first-product.glb",
    previewImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1400&auto=format&fit=crop",
    previewTitle: "Performance hoodie",
    previewDescription:
      "Training-layer silhouette built for cold starts and hard sessions.",
  },
  {
    id: "shirt-gray-pump",
    name: "Northside Pump Cover",
    category: "Shirt",
    color: "Gunmetal",
    price: 92,
    fit: "Oversized Street",
    tags: ["OVERSIZED", "GYM-TO-STREET"],
    modelPath: "/models/first-product.glb",
    previewImage:
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1400&auto=format&fit=crop",
    previewTitle: "Street-athletic cut",
    previewDescription:
      "Oversized fit with mobility-first drape for gym-to-street movement.",
  },
  {
    id: "shirt-anime-shadow",
    name: "Shadow Manga Tech Top",
    category: "Shirt",
    color: "Obsidian",
    price: 95,
    fit: "Relaxed Performance",
    tags: ["ANIME EDITION", "LIMITED"],
    modelPath: "/models/first-product.glb",
    previewImage:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1400&auto=format&fit=crop",
    previewTitle: "Reflective accents",
    previewDescription:
      "Low-light visibility details with premium tonal contrast textures.",
  },
  {
    id: "jogger-black-strike",
    name: "Strike Taper Jogger",
    category: "Jogger",
    color: "Obsidian",
    price: 99,
    fit: "Tapered",
    tags: ["MOBILITY", "RUN READY"],
    modelPath: "/models/first-product.glb",
    previewImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1400&auto=format&fit=crop",
    previewTitle: "After-dark training",
    previewDescription:
      "Night-run editorial energy for the next SYXRS WRLD campaign era.",
  },
  {
    id: "jogger-gray-utility",
    name: "Utility Flow Jogger",
    category: "Jogger",
    color: "Ash Gray",
    price: 102,
    fit: "Relaxed Taper",
    tags: ["UTILITY", "LIMITED"],
    modelPath: "/models/first-product.glb",
    previewImage:
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=1400&auto=format&fit=crop",
    previewTitle: "Urban utility",
    previewDescription:
      "Layer-friendly jogger profile tuned for training and city motion.",
  },
];
