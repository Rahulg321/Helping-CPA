import BookKeepingTable from "@/components/BookKeepingTable";
import NativeTable from "@/components/NativeTable";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ReusableTableSlice`.
 */
export type ReusableTableSliceProps =
  SliceComponentProps<Content.ReusableTableSliceSlice>;

/**
 * Component for "ReusableTableSlice" Slices.
 */
const ReusableTableSlice = ({
  slice,
}: ReusableTableSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-large"
    >
      <div className="big-container">
        <div className="mb-4 text-center">
          <div className="inline-block rounded-full border-2 border-mainG p-4">
            <span className="text-lg font-semibold">{slice.primary.tag}</span>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="mb-4">{slice.primary.heading}</h2>
          <p className="font-semibold text-gray-700">{slice.primary.tagline}</p>
        </div>

        <NativeTable />
      </div>
    </section>
  );
};

export default ReusableTableSlice;
