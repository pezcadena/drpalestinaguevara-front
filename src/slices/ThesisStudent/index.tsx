import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThesisStudent`.
 */
export type ThesisStudentProps =
  SliceComponentProps<Content.ThesisStudentSlice>;

/**
 * Component for "ThesisStudent" Slices.
 */
const ThesisStudent = ({ slice }: ThesisStudentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for thesis_student (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ThesisStudent;
