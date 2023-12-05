import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ReserveForm from "./components/ReserveForm";

export default function Reserve() {

    return(
        <>
      
    {/* NAVBAR */}
    
    {/* NAVBAR END */}
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        {/* HEADER */}
       <Header/>
        {/* HEADER */} {/* FORM */}
       <ReserveForm/>
      </div>
    </div>
  

</>
    )

}