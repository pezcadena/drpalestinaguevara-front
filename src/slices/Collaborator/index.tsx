import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Collaborator`.
 */
export type CollaboratorProps = SliceComponentProps<Content.CollaboratorSlice>;

/**
 * Component for "Collaborator" Slices.
 */
const Collaborator = ({ slice }: CollaboratorProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for collaborator (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Collaborator;
