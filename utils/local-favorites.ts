type IFavorites = {
  toggle: (id: number) => void;
  exists: (id: number) => boolean;
  get: () => number[];
};

export class Favorites implements IFavorites {
  private favorites: number[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : [];

  toggle(id: number): void {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter((favorite) => favorite !== id);
    } else {
      this.favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  exists(id: number): boolean {
    return this.favorites.includes(id);
  }

  get(): number[] {
    return this.favorites;
  }
}
