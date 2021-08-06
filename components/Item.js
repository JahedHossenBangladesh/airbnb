import Image from "next/image";

function Item({ img, distance, location }) {
  return (
       <div className="flex items-center space-x-2 m-2 cursor-pointer hover:bg-gray-100 rounded-xl 
       hover:scale-105 transition transform duration-200 ease-out">
<div className="relative h-16 w-16" >
    <Image src={img} layout="fill" className="rounded-lg"/>
</div>

    <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
    </div>
  </div>
  )
}

export default Item;
