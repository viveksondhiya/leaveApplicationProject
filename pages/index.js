// pages/index.js

import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="containerIndex">
  <h1 className="title">Welcome to our Application</h1>
  <div className="button-container">
    <div className="button">
      <h2>Have a acoount?</h2>
      <Link href="/login/page">
        <button className="login-button">Login</button>
      </Link>
    </div>
    <br></br>
    <div className="button">
      <h2>Don't have a acoount?</h2>
      <Link href="/register/page">
        <button className="login-button">Register</button>
      </Link>
    </div>
  </div>

</div>
  );
}
