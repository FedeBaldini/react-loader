"use client";

import { useEffect, useState } from "react";

import { Loader, useLoader, WithLoader } from "react-loader-ts";

export default function Home() {
  const { isLoading, setLoading } = useLoader();
  const [isInline, setInline] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  return (
    <main className="flex min-h-screen flex-col p-8 md:p-12 lg:p-24 gap-4 md:gap-8">
      <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold">React Loader TS</h1>
        <a
          href="https://federicobaldini.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Federico Baldini
        </a>
      </div>

      <div className="my-24 flex flex-col gap-4 md:gap-8">
        <div className="grid items-center grid-cols-[auto_1fr]">
          <button
            className="rounded-lg px-5 py-4 border border-gray-300 bg-gray-100 hover:border-blue-500 hover:outline-blue-400 hover:outline hover:outline-2"
            onClick={() => setLoading(!isLoading)}
          >
            Toggle loader
          </button>
          {isLoading ? <Loader inline={isInline} /> : null}
        </div>
        <div className="cursor-pointer">
          <input
            id="inline"
            type="checkbox"
            checked={isInline}
            onChange={() => setInline(!isInline)}
          />
          <label className="cursor-pointer ml-2" htmlFor="inline">
            Inline
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isInline ? (
            <WithLoader inline={isInline}>
              <div className="border-gray-300 border rounded-lg p-4">
                This container is wrapped is a WithLoader component, check how
                it works by clicking the button above.
              </div>
            </WithLoader>
          ) : null}
        </div>
      </div>

      <div className="grid text-center w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <a
          href="https://github.com/FedeBaldini/react-loader"
          className="rounded-lg px-5 py-4 border border-gray-300 bg-gray-100 hover:border-blue-500 hover:outline-blue-400 hover:outline hover:outline-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find information about features and API.
          </p>
        </a>
      </div>
      {!isInline && isLoading ? <Loader /> : null}
    </main>
  );
}
