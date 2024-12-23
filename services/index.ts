import popular from "../jsons/menu.json";

export const getPopular = async (count = 0) => {
  const popularItems = popular.sort((a, b) => b.rating - a.rating);

  if (count) {
    return popularItems.slice(0, count);
  }

  return popularItems;
};
