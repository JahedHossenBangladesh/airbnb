import {
  HeartIcon, StarIcon
} from "@heroicons/react/solid";
import Image from "next/image";
function InfoCard(props) {
 
  const { description, img, lat, location, long, price, star, title, total,colors } =
    props.item;
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-2 ">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer"/>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"/>

        <p className={`pt-2 text-sm  ${colors  ? "text-red-500" : "text-gray-500"}  flex-grow`} >
          {description}
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center" >
            <StarIcon className="h-5 text-red-400"/>{star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
