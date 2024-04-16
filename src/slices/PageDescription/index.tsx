import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PageDescription`.
 */
export type PageDescriptionProps =
  SliceComponentProps<Content.PageDescriptionSlice>;

/**
 * Component for "PageDescription" Slices.
 */
const PageDescription = ({ slice }: PageDescriptionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for page_description (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PageDescription;
