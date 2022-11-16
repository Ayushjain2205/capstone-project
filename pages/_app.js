/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 flex" style={{ backgroundColor: "#3BCEAC" }}>
        <button
          className="text-4xl font-bold"
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="/wallet.svg"
            alt="React Logo"
            style={{ width: "40px", display: "flex", color: "#fff" }}
          />
          Land registry system
        </button>
        <div className="flex mt-4 ml-auto" style={{ color: "#fff" }}>
          <Link href="/">
            <a className="mr-4 " style={{ fontWeight: "bold" }}>
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 " style={{ fontWeight: "bold" }}>
              Tokenize Land
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 " style={{ fontWeight: "bold" }}>
              Owned Lands
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 " style={{ fontWeight: "bold" }}>
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
