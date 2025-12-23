import type { GalleryData } from "../types"
import { buttonsSection } from "./sections/buttons"
import { cardsSection } from "./sections/cards"
import { herosSection } from "./sections/heros"
import { navbarsSection } from "./sections/navbars"

export const galleryData: GalleryData = {
  sections: [cardsSection, navbarsSection, buttonsSection, herosSection],
}
