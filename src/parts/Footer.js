import React from "react";

import Link from "next/link";

export default function Footer() {
  function submit() {}

  return (
    <footer className="container px-4 mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Online Courses
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Afiliasi Jcpro
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Testimoni Jcpro
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Joint Event
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Course</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Fundamental Properti
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Facebook Marketing
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Instagram Marketing
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Marketplace Properti
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h6 className="text-white">Support</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            Jcpro Indonesia<br />
            Jl. Pakis H. Rahayu No.51<br />
            RT.03/RW.02, Potroyudan V, Potroyudan <br />
            59412
          </p>
        </div>
        <div className="w-full md:w-2/6 mb-8 md:mb-0">
          <h6 className="text-white">Berlangganan</h6>
          <p className="mt-4 text-indigo-500">
            Submit your email for new updates
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-6 py-3 mt-6 md:w-1/2"
              placeholder="Your email addres"
            />
            <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-indigo-500">
          2022 Copyright by  Etnicode. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
