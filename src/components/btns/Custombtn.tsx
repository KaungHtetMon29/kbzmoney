import { Arrow } from "../../assets/svgs";

function CustBtn({ text, clr = "#FF545F" }: { text: string; clr?: string }) {
  return (
    <button
      className={`bg-[${clr}] px-12 py-4 w-fit text-white rounded-full flex items-center text-base gap-3`}
    >
      {text}
      <div className="w-7">
        <Arrow />
      </div>
    </button>
  );
}
export default CustBtn;
