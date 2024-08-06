"use client";
import { useState } from "react";

import Changes from "../changes";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function PassGen() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="container max-w-1/2 m-auto text-gray-200 p-10 mt-10 md:flex gap-10">
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl text-purple-700 font-extrabold pb-10">
          Password Gen
        </h1>
        <div className="form-group">
          <label>Password Length:</label>
          <input
            className="text-gray-900 py-1 px-2"
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Include Numbers:</label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label>Include Symbols:</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>
        <button
          className="bg-green-500 text-gray-50 px-5 py-3 rounded-md hover:bg-green-400 hover:shadow-md text-center my-10"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        {password && (
          <div className="password-display">
            <h3 className="text-purple-600 font-extrabold text-xl">
              Generated Password:
            </h3>
            <div className="bg-gray-100 p-5 text-gray-900 w-fit">
              {password}
            </div>
          </div>
        )}

        <Changes />
      </div>
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
    </div>
  );
}
