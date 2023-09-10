// export interface productsCardInterface {
//   allArticleBaseImages? : string;
//   allArticleCodes? : number;
//   allArticleImages? : string;
//   articleCodes? : number;
//   articleColorNames? : string;
//   articles? : string;
//   brandName? : string;
//   categories? : string;
//   categoryName? : string;
//   code? : number;
//   comingSoon? : boolean;
//   concept? : string;
//   defaultArticle? : string;
//   dummy? : boolean;
//   ecoTaxValue? : number;
//   galleryImages? : string;
//   images? : Array<string>;
//   baseUrl? : any;
//   linkPdp? : string;
//   mainCategoryCode? : string;
//   name? : string;
//   numbersOfPieces? : number;
//   pk? : number;
//   price? : string;
//   formattedValue:string
//   redirectToPdp? : boolean;
//   rgbColors? : string;
//   sale? : boolean;
//   searchEngineProductId? : string;
//   showPriceMarker? : boolean;
//   stock? : string;
//   swatches?: null;
//   swatchesTotal? : number;
//   ticket? : string;
//   variantSizes? : string;
//   visible? : boolean;
//   whitePrice? : string;
// }

export interface productsCardInterface {
  [x: string]: any;
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: Array<number>;
  title?: string;
}
