import type { GalleryData } from "../types"
import { buttonsSection } from "./sections/buttons"
import { cardsSection } from "./sections/cards"
import { navbarsSection } from "./sections/navbars"

export const galleryData: GalleryData = {
  sections: [cardsSection, navbarsSection, buttonsSection],
}
