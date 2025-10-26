import Link from "next/link";
import React from "react";
import "./Aside.scss";

function Aside() {
  return (
    <>
      <aside>
        <h2>Categories</h2>

        <ul>
          <li>
            <Link href="/">Politics</Link>
          </li>
          <li>
            <Link href="/">Business</Link>
          </li>
          <li>
            <Link href="/">Technology</Link>
          </li>
          <li>
            <Link href="/">Health</Link>
          </li>
          <li>
            <Link href="/">Sports</Link>
          </li>
          <li>
            <Link href="/">Entertainment</Link>
          </li>
          <li>
            <Link href="/">Science</Link>
          </li>
          <li>
            <Link href="/">Lifestyle</Link>
          </li>
          <li>
            <Link href="/">Travel</Link>
          </li>
          <li>
            <Link href="/">World</Link>
          </li>
          <li>
            <Link href="/">Education</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Aside;
