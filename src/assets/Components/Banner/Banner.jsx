
import bgVector from "../../images/vector1.png"
import bgVector2 from "../../images/vector2.png"

const Banner = ({ progressNumber, ressolvedNumber }) => {
  return (
    <div className="max-w-[1140px] mx-auto p-4 md:px-1">
      <div className="grid md:grid-cols-2 grid-cols-1 text-center mx-auto gap-2">
        <div
          className="rounded-xl p-6 flex flex-col items-center justify-center text-white h-40
                 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] relative overflow-hidden"
        >
          {/* Vector overlay */}
          <img
            src={bgVector}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          {/* Content */}
          <h1 className="font-semibold text-xl relative z-10">In Progress</h1>
          <span className="font-bold text-6xl relative z-10">
            {progressNumber}
          </span>
        </div>

        <div
          className="rounded-xl p-6 flex flex-col items-center justify-center text-white h-40
                  bg-gradient-to-r from-[#54CF67] to-[#00827A] relative overflow-hidden"
        >
          {/* Vector overlay */}
          <img
            src={bgVector2}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          {/* Content */}
          <h1 className="font-semibold text-xl relative z-10">Ressolved</h1>
          <span className="font-bold text-6xl relative z-10">
            {ressolvedNumber}
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Banner;
