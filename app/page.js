import dynamic from "next/dynamic";

export default function Home() {
  /**
   * Generates a fake IP address.
   *
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

  // Usage Example
  const fakeIPAddress = generateFakeIPAddress();

  return (
    <div className="container max-w-1/2 m-auto bg-slate-900 text-gray-200 p-10 mt-10">
      <h1 className="text-4xl text-purple-700 font-extrabold">Random IP</h1>

      <p className="py-10">
        Test out your skills with this random IP generater. <br />
        Take the IP and convert it to binery.
      </p>

      <p>
        A couple of theis a day will keep the juices flowing and you nerding
        out.
      </p>

      <h2 className="px-8 py-3 bg-gray-700 text-orange-500 w-fit font-2xl bg-opacity-10 shadow-md my-10">
        {fakeIPAddress}
      </h2>

      <a className="bg-green-500 text-gray-50 px-5 py-3 rounded-md" href="/">
        Refresh IP
      </a>

      <div className="mt-10">
        <p>I will look in to ass CIDR notation soon as I get 5 🫶 💀</p>
        <p>Im also going to add a print out verson. </p>
      </div>
    </div>
  );
}
