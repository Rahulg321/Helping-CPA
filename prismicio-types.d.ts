// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | FeaturesSlice
  | ReusuableContentSlice
  | HeadingContentSlice
  | ImageContentSlice
  | TestimonialsSlice
  | FeaturedSlice
  | SolutionsSlice
  | NewsletterSubSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HomepageDocument | PageDocument;

/**
 * Primary content in *Featured → Primary*
 */
export interface FeaturedSliceDefaultPrimary {
  /**
   * Heading field in *Featured → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *Featured → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Button Label field in *Featured → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *Featured → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: featured.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Featured Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Featured*
 */
type FeaturedSliceVariation = FeaturedSliceDefault;

/**
 * Featured Shared Slice
 *
 * - **API ID**: `featured`
 * - **Description**: Featured
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedSlice = prismic.SharedSlice<
  "featured",
  FeaturedSliceVariation
>;

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;

/**
 * Primary content in *HeadingContent → Primary*
 */
export interface HeadingContentSliceDefaultPrimary {
  /**
   * Dark Background field in *HeadingContent → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: heading_content.primary.dark_background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  dark_background: prismic.BooleanField;

  /**
   * Heading field in *HeadingContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_content.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *HeadingContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_content.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Small Width field in *HeadingContent → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: heading_content.primary.small_width
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  small_width: prismic.BooleanField;
}

/**
 * Default variation for HeadingContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeadingContent*
 */
type HeadingContentSliceVariation = HeadingContentSliceDefault;

/**
 * HeadingContent Shared Slice
 *
 * - **API ID**: `heading_content`
 * - **Description**: HeadingContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingContentSlice = prismic.SharedSlice<
  "heading_content",
  HeadingContentSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageContent → Primary*
 */
export interface ImageContentSliceDefaultPrimary {
  /**
   * Dark Background field in *ImageContent → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: image_content.primary.dark_background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  dark_background: prismic.BooleanField;

  /**
   * Featured Image field in *ImageContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.featured_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Heading field in *ImageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *ImageContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Button Label field in *ImageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *ImageContent → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Need Button field in *ImageContent → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: image_content.primary.need_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  need_button: prismic.BooleanField;

  /**
   * Right Image field in *ImageContent → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: image_content.primary.right_image
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  right_image: prismic.BooleanField;
}

/**
 * Default variation for ImageContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageContent*
 */
type ImageContentSliceVariation = ImageContentSliceDefault;

/**
 * ImageContent Shared Slice
 *
 * - **API ID**: `image_content`
 * - **Description**: ImageContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageContentSlice = prismic.SharedSlice<
  "image_content",
  ImageContentSliceVariation
>;

/**
 * Default variation for NewsletterSub Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSubSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *NewsletterSub*
 */
type NewsletterSubSliceVariation = NewsletterSubSliceDefault;

/**
 * NewsletterSub Shared Slice
 *
 * - **API ID**: `newsletter_sub`
 * - **Description**: NewsletterSub
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSubSlice = prismic.SharedSlice<
  "newsletter_sub",
  NewsletterSubSliceVariation
>;

/**
 * Primary content in *ReusuableContent → Primary*
 */
export interface ReusuableContentSliceDefaultPrimary {
  /**
   * Heading field in *ReusuableContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reusuable_content.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *ReusuableContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reusuable_content.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Primary content in *ReusuableContent → Items*
 */
export interface ReusuableContentSliceDefaultItem {
  /**
   * featuredImage field in *ReusuableContent → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: reusuable_content.items[].featuredimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featuredimage: prismic.ImageField<never>;

  /**
   * Image Heading field in *ReusuableContent → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reusuable_content.items[].image_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_heading: prismic.KeyTextField;

  /**
   * Image Content field in *ReusuableContent → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reusuable_content.items[].image_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  image_content: prismic.RichTextField;
}

/**
 * Default variation for ReusuableContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReusuableContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ReusuableContentSliceDefaultPrimary>,
  Simplify<ReusuableContentSliceDefaultItem>
>;

/**
 * Slice variation for *ReusuableContent*
 */
type ReusuableContentSliceVariation = ReusuableContentSliceDefault;

/**
 * ReusuableContent Shared Slice
 *
 * - **API ID**: `reusuable_content`
 * - **Description**: ReusuableContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReusuableContentSlice = prismic.SharedSlice<
  "reusuable_content",
  ReusuableContentSliceVariation
>;

/**
 * Primary content in *Solutions → Primary*
 */
export interface SolutionsSliceDefaultPrimary {
  /**
   * Heading field in *Solutions → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: solutions.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *Solutions → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: solutions.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Default variation for Solutions Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SolutionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SolutionsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Solutions*
 */
type SolutionsSliceVariation = SolutionsSliceDefault;

/**
 * Solutions Shared Slice
 *
 * - **API ID**: `solutions`
 * - **Description**: Solutions
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SolutionsSlice = prismic.SharedSlice<
  "solutions",
  SolutionsSliceVariation
>;

/**
 * Primary content in *Testimonials → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Heading field in *Testimonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *Testimonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      FeaturedSlice,
      FeaturedSliceDefaultPrimary,
      FeaturedSliceVariation,
      FeaturedSliceDefault,
      FeaturesSlice,
      FeaturesSliceVariation,
      FeaturesSliceDefault,
      HeadingContentSlice,
      HeadingContentSliceDefaultPrimary,
      HeadingContentSliceVariation,
      HeadingContentSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageContentSlice,
      ImageContentSliceDefaultPrimary,
      ImageContentSliceVariation,
      ImageContentSliceDefault,
      NewsletterSubSlice,
      NewsletterSubSliceVariation,
      NewsletterSubSliceDefault,
      ReusuableContentSlice,
      ReusuableContentSliceDefaultPrimary,
      ReusuableContentSliceDefaultItem,
      ReusuableContentSliceVariation,
      ReusuableContentSliceDefault,
      SolutionsSlice,
      SolutionsSliceDefaultPrimary,
      SolutionsSliceVariation,
      SolutionsSliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
    };
  }
}
