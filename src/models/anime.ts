export interface IAnime {
  createdAt: string
  updatedAt: string
  slug: string
  synopsis: string
  description: string
  coverImageTopOffset: number
  titles: {
    en: string
    en_jp: string
    ja_jp: string
  }
  canonicalTitle: string
  abbreviatedTitles: string[]
  averageRating: string
  ratingFrequencies: {
    '2': string
    '3': string
    '4': string
    '5': string
    '6': string
    '7': string
    '8': string
    '9': string
    '10': string
    '11': string
    '12': string
    '13': string
    '14': string
    '15': string
    '16': string
    '17': string
    '18': string
    '19': string
    '20': string
  }
  userCount: number
  favoritesCount: number
  startDate: string
  endDate: string | null
  nextRelease: string
  popularityRank: number
  ratingRank: number
  ageRating: string
  ageRatingGuide: string
  subtype: 'TV' | string
  status: 'current' | string
  tba: string | null
  posterImage: {
    tiny: string
    large: string
    small: string
    medium: string
    original: string
    meta: {
      dimensions: {
        tiny: {
          width: number
          height: number
        }
        large: {
          width: number
          height: number
        }
        small: {
          width: number
          height: number
        }
        medium: {
          width: number
          height: number
        }
      }
    }
  }
  coverImage: {
    tiny: string
    large: string
    small: string
    original: string
    meta: {
      dimensions: {
        tiny: {
          width: 840
          height: 200
        }
        large: {
          width: 3360
          height: 800
        }
        small: {
          width: 1680
          height: 400
        }
      }
    }
  }
  episodeCount: number | null
  episodeLength: number
  totalLength: number
  youtubeVideoId: string
  showType: 'TV' | string
  nsfw: boolean
}

export interface ILinks {
  self: string
  related: string
}

export interface IAnimeResponse {
  id: string
  type: 'anime' | string
  links: {
    self: string
  }
  attributes: IAnime
  relationships: {
    genres: {
      links: ILinks
    }
    categories: {
      links: ILinks
    }
    castings: {
      links: ILinks
    }
    installments: {
      links: ILinks
    }
    mappings: {
      links: ILinks
    }
    reviews: {
      links: ILinks
    }
    mediaRelationships: {
      links: ILinks
    }
    characters: {
      links: ILinks
    }
    staff: {
      links: ILinks
    }
    productions: {
      links: ILinks
    }
    quotes: {
      links: ILinks
    }
    episodes: {
      links: ILinks
    }
    streamingLinks: {
      links: ILinks
    }
    animeProductions: {
      links: ILinks
    }
    animeCharacters: {
      links: ILinks
    }
    animeStaff: {
      links: ILinks
    }
  }
}
