


import './App.css'
import Banner from './assets/Components/Banner/Banner';
import CustomerTickets from './assets/Components/CustomerTickets/CustomerTickets';
import Navbar from './assets/Components/Navbar/Navbar';
import Footer from '../src/assets/Components/Footer/Footer';
import { Suspense, useState } from 'react';

import { ToastContainer } from "react-toastify";


const fetchTickets = async() => {
  
  const res = await fetch("./customer.json")
  
  return res.json()
}

const ticketPromise = fetchTickets()


// const handleProgressCount = () => {
//   console.log("i'm from button")
// }



function App() {
 
  const [progressNumber, setProgressNumber] = useState(0); 
  
  const [ressolvedNumber, setRessolvedNumber] = useState(0); 
  return (
    <>
      <Navbar></Navbar>
      <Banner
        ressolvedNumber={ressolvedNumber}
        progressNumber={progressNumber}
      ></Banner>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <CustomerTickets
          ressolvedNumber={ressolvedNumber}
          setRessolvedNumber={setRessolvedNumber}
          progressNumber={progressNumber}
          setProgressNumber={setProgressNumber}
          ticketPromise={ticketPromise}
        ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />;
    </>
  );
  
}

export default App
