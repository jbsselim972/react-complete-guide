export const TOGGLE_FAV = "TOGGLE_FAV";

export const toggleFav = (id: string): ToggleFavAction => {
  return { type: TOGGLE_FAV, productId: id };
};

export interface ToggleFavAction {
  type: typeof TOGGLE_FAV;
  productId: string;
}
