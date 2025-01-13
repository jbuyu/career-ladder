import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center  text-xl font-bold p-4 border">
      <Image alt="ladder_image" src="/ladder.svg" width={50} height={50} />
      <div>CareerLadder</div>
    </div>
  );
}
