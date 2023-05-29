import { Select } from "../constants/select-status";
import Image from "next/image";

export default function Page3Panel3({
  id,
  image,
  imageWidth,
  imageHeight,
  carType,
  selected,
  handleSelect,
}) {
  return (
    <div
      className="flex flex-col justify-center rounded-md overflow-hidden shadow-2xl"
      style={{ maxWidth: imageWidth }}
    >
      <Image
        src={image}
        alt=""
        width={"" + imageWidth}
        height={"" + imageHeight}
        className="mb-3"
      />
      <div className="flex mb-5 px-5">
        <div className="flex text-md grow">{carType}</div>
      </div>
      <button
        className={
          "mx-5 mb-5 rounded-lg py-3 bg-green-300 hover:bg-green-600 text-white font-bold disabled:bg-slate-500" +
          (selected ? " bg-green-600" : "bg-green-100")
        }
        onClick={() => {
          if (selected) return;
          handleSelect(carType);
        }}
      >
        {selected ? "Selected" : "Select"}
      </button>
    </div>
  );
}
