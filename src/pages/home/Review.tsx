import { BsQuote } from "react-icons/bs";
import { MdStar } from "react-icons/md";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reason: "For customer service",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reason: "For product quality",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    reason: "For customer service",
    rating: 5,
  },
];
export default function Review() {
  return (
    <div className="py-10">
      <div>
        <h2 className="text-3xl">
          What Happy Customer <br />{" "}
          <span className="text-[26px] mt-2 mb-3 text-[#c7b933]">Say About Us</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4 mb-4">
          <MdStar className="bg-yellow-500 text-white inline-block rounded-full w-8 h-8 p-1" />
          <MdStar className="bg-yellow-500 text-white inline-block rounded-full w-8 h-8 p-1" />
          <MdStar className="bg-yellow-500 text-white inline-block rounded-full w-8 h-8 p-1" />
          <MdStar className="bg-yellow-500 text-white inline-block rounded-full w-8 h-8 p-1" />
          <MdStar className="bg-yellow-500 text-white inline-block rounded-full w-8 h-8 p-1" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-7">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col w-[350px] items-center justify-center border-dashed border-white border p-4 rounded-lg shadow-md mb-4"
          >
            <p className="text-gray-300 mb-2 text-start">{review.review}</p>
            <div className="flex text-start mb-2 flex-grow">
              <BsQuote className="text-gray-500 w-10 h-10" />
              <div className="">
                <p className="text-lg text-green-500 font-semibold">{review.name}</p>
                <p className="text-gray-300 italic text-sm">{review.reason}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
