export const dynamic = "force-dynamic";

import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  /**
   * Generates a fake IP address.
   * @returns {string} A fake IP address.
   */
  function generateFakeIPAddress() {
    // Generate four random numbers between 0 and 255
    const octet1 = Math.floor(Math.random() * 256);
    const octet2 = Math.floor(Math.random() * 256);
    const octet3 = Math.floor(Math.random() * 256);
    const octet4 = Math.floor(Math.random() * 256);

    // Construct the IP address string
    const ipAddress = `${octet1}.${octet2}.${octet3}.${octet4}`;

    return ipAddress;
  }

  function CIDR() {
    const cidr = Math.floor(Math.random() * 32);

    const CidrNotation = `${cidr}`;
    return CidrNotation;
  }

  // Usage Example
  const fakeIPAddress = generateFakeIPAddress();
  const fakeCidrNotation = CIDR();

  return (
    <div className="container max-w-1/2 m-auto bg-slate-900 text-gray-200 p-10 mt-10 md:flex gap-10">
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl text-purple-700 font-extrabold">
          Random IP Gen
        </h1>

        <p className="py-10">
          Test out your skills with this random IP generater. <br />
          Take the IP and convert it to binery.
        </p>

        <p>
          A couple of these a day will keep the juices flowing and you nerding
          out.
        </p>

        <h2 className="px-8 py-3 bg-gray-700 text-orange-500 w-fit font-2xl bg-opacity-10 shadow-md my-10">
          {fakeIPAddress} / {fakeCidrNotation}
        </h2>

        <a
          className="bg-green-500 text-gray-50 px-5 py-3 rounded-md hover:bg-green-400 hover:shadow-md"
          href="/"
        >
          Refresh IP
        </a>

        <div className="mt-10">
          <p>I will look in to ass CIDR notation soon as I get 5 🫶 💀</p>
          <p>Im also going to add a print out verson. </p>
        </div>
      </div>

      <div className="md:pt-0 pt-10">
        <h2 className="text-2xl pb-5 text-purple-700 font-extrabold">Links</h2>
        <div className="grid grid-cols-4 gap-4">
          <Link href="https://github.com/IAmCainey" target="blank">
            <FaGithub className="text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/paul-caine-489173b2/">
            <FaLinkedinIn className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
