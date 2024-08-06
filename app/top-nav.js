import LINK from "next/link";

export default function TopNav() {
  return (
    <div class="flex m-auto w-3/4 py-5 gap-10">
      <LINK href="/">Subnetting</LINK>
      <LINK href="/">OSI Model</LINK>
      <LINK href="/password">Password Gen</LINK>
      <LINK href="/">About</LINK>
    </div>
  );
}
