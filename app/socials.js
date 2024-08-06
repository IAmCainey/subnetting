import Link from "next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="md:pt-0 pt-10">
      <h2 className="text-2xl pb-5 text-purple-700 font-extrabold">Links</h2>
      <div className="flex gap-4">
        <Link href="https://github.com/IAmCainey" target="blank">
          <FaGithub className="text-2xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/paul-caine-489173b2/">
          <FaLinkedinIn className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
