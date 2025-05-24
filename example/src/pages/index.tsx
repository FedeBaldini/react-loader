import { useEffect, useState } from "react";

import Head from "next/head";
import { Loader, WithLoader } from "react-loader-ts";

export default function Home() {
  const [variant, setVariant] = useState<string | null>(null);

  useEffect(() => {
    if (!variant) return;
    setTimeout(() => {
      setVariant(null);
    }, 2000);
  }, [variant]);

  return (
    <>
      <Head>
        <title>React Loader TS Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1>React Loader TS Demo</h1>
          <p>
            Demonstrating Loader & WithLoader components with dark mode support
          </p>
        </header>

        <section className="loader-examples">
          <h2>Loader component</h2>
          <button onClick={() => setVariant("dots")} className="toggle-button">
            Show default dots variant
          </button>
          {variant === "dots" ? <Loader variant="dots" /> : null}

          <button
            onClick={() => setVariant("circle-dots")}
            className="toggle-button"
          >
            Show circle-dots variant
          </button>
          {variant === "circle-dots" ? <Loader variant="circle-dots" /> : null}

          <button
            onClick={() => setVariant("dots-inline")}
            className="toggle-button"
          >
            Show dots inline
          </button>
          {variant === "dots-inline" ? <Loader variant="dots" inline /> : null}

          <button
            onClick={() => setVariant("circle-dots-inline")}
            className="toggle-button"
          >
            Show circle-dots inline
          </button>
          {variant === "circle-dots-inline" ? (
            <Loader variant="circle-dots" inline />
          ) : null}
        </section>

        <section className="loader-examples">
          <h2>WithLoader component</h2>
          <button
            onClick={() => setVariant("with-loader")}
            className="toggle-button"
          >
            Load
          </button>
          <WithLoader
            isLoading={variant === "with-loader"}
            variant="circle-dots"
          >
            <div className="content-box">
              <p>This content is shown only when not loading.</p>
              <p>
                Toggle the button above to simulate loading state and see the
                loader replacing this content.
              </p>
            </div>
          </WithLoader>
        </section>
      </main>
    </>
  );
}
