import { IProduct } from '@/app/page';
import React from 'react';

const Card = (props:any) => {
  const {productName, price,review,booked, img} = props.
  product;
    return (
        <div
        className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer shadow-md"
      >
        <img
          src={img}
          alt=""
          className="w-full h-36 rounded"
        />
        <div className="p-1 text-black">
          <h3 className="font-bold text-2xl mb-2">{productName}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">{review} reviews</p>
          </div>
          <div className="flex text-reg font-light text-black capitalize">
            <p className=" mr-3">Mexican</p>
            <p className="mr-3">$ {price}</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked {booked} times today</p>
        </div>
      </div>
    );
};

export default Card;