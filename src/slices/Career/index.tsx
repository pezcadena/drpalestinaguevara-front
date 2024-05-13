import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Career`.
 */
export type CareerProps = SliceComponentProps<Content.CareerSlice>;

/**
 * Component for "Career" Slices.
 */
const Career = ({ slice }: CareerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for career (variation: {slice.variation}) Slices
    </section>
  );
};

export default Career;
