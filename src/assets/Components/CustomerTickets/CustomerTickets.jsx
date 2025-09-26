
import Navbar from '../Navbar/Navbar';
import calImg from "../../images/ri_calendar-line.png"
import { use, useState } from 'react';

const CustomerTickets = ({
  ticketPromise,
  progressNumber,
  setProgressNumber,
  ressolvedNumber,
  setRessolvedNumber,
}) => {
  const ticketData = use(ticketPromise);

  const [IsSelected, setIsSelected] = useState(false);

   if (progressNumber < 0|| ressolvedNumber<0) {
     alert("already done");
     return;
   }
  const handleClicked = () => {
    setIsSelected(true);
    setProgressNumber(progressNumber + 1);
  };

 

  const handleCompleteBtn = () => {
   setProgressNumber(progressNumber - 1);
    setRessolvedNumber(ressolvedNumber+1);
  };
  return (
    <div className="max-w-[1140px] mx-auto border-2 bg-gray-100 p-1">
      <h1 className="font-bold text-2xl">Customer Tickets</h1>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 col-span-9">
          {ticketData.map((ticket) => (
            <div
              onClick={() => handleClicked(ticket)}
              className=" bg-white shadow-gray shadow-2xl p-2  w-full"
            >
              <div className="p-1 flex justify-between items-center w-full px-1">
                <h1 className="font-bold">{ticket.title}</h1>
                <button className="flex items-center bg-[#b9f8cf] rounded-3xl py-2 px-5">
                  {" "}
                  <p className="w-5 h-5 bg-green-700 rounded-full mx-2"></p>
                  <p className="font-semibold">{ticket.status}</p>
                </button>
              </div>
              <p className="p-2">{ticket.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span>{ticket.id}</span>{" "}
                  <span className="text-red-600">{ticket.priority}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>{ticket.customer}</span>{" "}
                  <span>
                    <img src={calImg} alt="" />
                  </span>{" "}
                  <span>{ticket.createdAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className=" col-span-1 mx-auto md:col-span-3">
          <div className="">
            <h1 className="font-bold text-xl">Task Status</h1>
            <div className=" p-2 bg-white shadow-2xl mt-5">
              <h1>Payment failed-card declined</h1>
              <button
                onClick={() => handleCompleteBtn()}
                className="btn bg-green-600 w-full text-white"
              >
                Complete
              </button>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="font-bold text-xl">Resolved Task</h1>
            <div className=" p-2 bg-white shadow-2xl mt-5 ">
              <h1>Payment failed-card declined</h1>
              <button className="btn bg-green-600 w-full text-white">
                Complete
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
 
export default CustomerTickets;