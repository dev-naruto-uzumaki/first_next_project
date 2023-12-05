import Description from "../components/Description";
import Header from "../components/Header";
import Images from "../components/Images";
import Navbar from "../components/Navbar";
import Rating from "../components/Rating";
import ReservationCard from "../components/ReservationCard";
import Reviews from "../components/Reviews";
import Title from "../components/Title";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();
interface Restaurant {
  id: number;
  name: string;
  description: string;
  slug: string;
  images: string[];
}
const fetchRestaurantBySlug= async(slug:string):Promise<Restaurant>=>{
  const restaurant= await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      id:true,
      name:true,
      images:true,
      description:true,
      slug:true  


    }
  });
  if(!restaurant)
  throw console.error();
  
  return restaurant;
}
//{params}:{params:{slug:string}}
export default async function RestaurantDetails(props:any) {
// console.log("page_props", props);
  const restaurant= await fetchRestaurantBySlug(props.params.slug);

    return(
        <>
 
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        {/* <RestaurantNavbar slug={restaurant.slug}/> */}
        {/* RESAURANT NAVBAR */} {/* TITLE */}
      <Title name={restaurant.name}/>
        {/* TITLE */} {/* RATING */}
      <Rating />
        {/* RATING */} {/* DESCRIPTION */}
       <Description descriptions={restaurant.description}/>
        {/* DESCRIPTION */} {/* IMAGES */}
      <Images images={restaurant.images}/>
        {/* IMAGES */} {/* REVIEWS */}
        <Reviews/>
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
       <ReservationCard/>
      </div>
    </div>
    {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
    CARD PORTION */}
 
</>
    )

}