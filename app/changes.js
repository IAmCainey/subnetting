export default function Changes() {
  return (
    <div className="mt-10 border-purple-600 border w-fit">
      <h2 className="text-gray-200 font-extrabold underline bg-purple-700 p-3">
        Changes
      </h2>
      <ul className="p-5 gap-3 flex flex-col">
        <li>07/08/2024 :: Added password gen, see link in top nav.</li>
        <li>20/06/2024 :: Added random IP gen and CIDR notation.</li>
      </ul>
    </div>
  );
}
