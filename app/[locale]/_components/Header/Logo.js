import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/Logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 transition-all duration-150">
      <div className="hidden mdx:flex transition-all duration-150">
        <Image
          priority
          src={logo}
          width={70}
          height={70}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>
      <div className="flex mdx:hidden transition-all duration-150">
        <Image
          priority
          src={logo}
          width={55}
          height={55}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>

    </Link>
  );
}

export default Logo;
