import Link from "next/link";
import { ProductList } from "../page";
import Price from "./Price";

export default function RestaurantCard(props:ProductList){
  return (<>
    {props.products.map((item) => (
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        <Link href={`/restaurant/${item.slug}`}>
      <img
        src={item.main_image}
        alt=""
        className="w-full h-36"
      />
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">{item.name}</h3>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2">77 reviews</p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3">{item.cuisine.name}</p>
          <Price price={item.price}/>
          <p>{item.location.name}</p>
        </div>
        <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
      </div>
      </Link>
    </div>
    ))}
    </>
  );
}