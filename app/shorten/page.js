"use client"; // Add this directive at the top


import React from "react";
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState(false);

  const generate = async (e) => {
    e.preventDefault();

    let headersList = {
      Accept: "/",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    let response = await fetch("/api/generate", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    alert(data.message);
    data && setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);

    seturl("");
    setshorturl("");
  };

  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto mt-20 lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center dark:text-white">
                Generate Short Url
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    value={url}
                    onChange={(e) => {
                      seturl(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Original Url"
                  />
                </div>
                <div>
                  <input
                    value={shorturl}
                    onChange={(e) => {
                      setshorturl(e.target.value);
                    }}
                    placeholder="Enter your Short Url name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={generate}
                  type="submit"
                  className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Generate
                </button>
                {generated && (
                  <div className="text-white">
                    <span className="font-bold mr-3">Your Short link:</span>
                    <br/>
                    <hr/>
                    <code>
                      <Link target="_blank" href={generated}>
                        {generated}
                      </Link>
                    </code>
                  </div>
                )} 
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shorten;
