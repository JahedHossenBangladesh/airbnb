import Image from "next/image";

function InfoCard(props) {
    console.log(props);
  const { description, img, lat, location, long, price, star, title, total } =
    props.item;
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image src={img} layout="fill" objectFit='cover'/>
      </div>
    </div>
  );
}

export default InfoCard;
