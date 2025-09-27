import Navbar from '../Navbar/Navbar';
import calImg from "../../images/ri_calendar-line.png"
import { use, useState } from 'react';
import { toast } from 'react-toastify';

const CustomerTickets = ({
  ticketPromise,
  progressNumber,
  setProgressNumber,
  setRessolvedNumber,
}) => {
  const ticketData = use(ticketPromise);

  // Tickets state
  const [inProgressTickets, setInProgressTickets] = useState(ticketData); // start with all tickets
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // When ticket clicked → mark as "In Progress"
  const handleClicked = (ticket) => {
    toast("In Progress")
    if (ticket.status === "Open") {
      // update ticket status
      const updated = { ...ticket, status: "In Progress" };
      setInProgressTickets((prev) =>
        prev.map((t) => (t.id === ticket.id ? updated : t))
      );
      setProgressNumber(progressNumber + 1);
    }
  };

  // When Complete button clicked
  const handleCompleteBtn = (ticket) => {
    // remove from inProgress
    setInProgressTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    // add to resolved
    setResolvedTickets((prev) => [...prev, { ...ticket, status: "Resolved" }]);

    // Progress,Ressolve Number Count
    setProgressNumber((prev) => (prev > 0 ? prev - 1 : 0));
    setRessolvedNumber((prev) => prev + 1);

    toast("Completed")
  };

  return (
    <div className="max-w-[1140px] mx-auto border-2 bg-gray-100 p-1">
      <h1 className="font-bold text-2xl">Customer Tickets</h1>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Customer Ticket List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 col-span-9">
          {inProgressTickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleClicked(ticket)}
              className=" bg-white shadow-gray shadow-2xl p-2  w-full"
            >
              <div className="p-1 flex justify-between items-center w-full px-1">
                <h1 className="font-bold">{ticket.title}</h1>
                <button
                  className={` flex items-center ${
                    ticket.status === "Open"
                      ? "bg-[#b9f8cf]"
                      : ticket.status === "In Progress"
                      ? "bg-orange-100"
                      : "bg-gray-200"
                  }   rounded-3xl py-2 px-5`}
                >
                  <p
                    className={`w-5 h-5 ${
                      ticket.status === "Open"
                        ? "bg-green-700"
                        : ticket.status === "In Progress"
                        ? "bg-orange-300"
                        : "bg-gray-400"
                    }  rounded-full mx-2`}
                  ></p>
                  <p
                    className={`font-semibold ${
                      ticket.status === "Open"
                        ? "text-green-600"
                        : ticket.status === "In Progress"
                        ? "text-orange-500"
                        : "text-gray-500"
                    }`}
                  >
                    {ticket.status}
                  </p>
                </button>
              </div>
              <p className="p-2">{ticket.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span>#{ticket.id}</span>{" "}
                  <span
                    className={`${
                      ticket.priority === "High"
                        ? "text-red-500"
                        : ticket.priority === "Medium"
                        ? "text-orange-500"
                        : "text-green-500"
                    }`}
                  >
                    {ticket.priority}
                  </span>
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

        {/* Sidebar */}
        <aside className=" col-span-1 mx-auto md:col-span-3">
          {/* In Progress Section */}
          <div>
            <h1 className="font-bold text-xl">Task Status</h1>
            {inProgressTickets
              .filter((t) => t.status === "In Progress")
              .map((ticket) => (
                <div
                  key={ticket.id}
                  className=" p-2 bg-white shadow-2xl mt-5"
                >
                  <h1>{ticket.title}</h1>
                  <button
                    onClick={() => handleCompleteBtn(ticket)}
                    className="btn bg-green-600 w-full text-white"
                  >
                    Complete
                  </button>
                </div>
              ))}
          </div>

          {/* Resolved Section */}
          <div className="mt-5">
            <h1 className="font-bold text-xl">Resolved Task</h1>
            {resolvedTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="p-3 bg-green-50 border border-green-200 rounded-lg shadow mt-3 flex justify-between items-center"
              >
                <div>
                  <h1 className="font-semibold text-gray-800">{ticket.title}</h1>
                  <p className="text-green-600 font-medium flex items-center gap-1">
                    ✓ Completed
                  </p>
                </div>

                {/* Remove text */}
                <button
                  onClick={() =>
                    setResolvedTickets((prev) =>
                      prev.filter((t) => t.id !== ticket.id)
                    )
                  }
                  className="text-sm text-gray-400 hover:text-red-500 transition"
                >
                  Click to remove
                </button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CustomerTickets;
