import Image from "next/image"
import search from "@/public/svg/menu.svg"

function Logo() {
  return (
    <button className="flex items-center z-10">
      <Image priority src={search} width={35} height={35} alt="The Wild Oasis logo" quality={100} />
    </button>
  )
}

export default Logo