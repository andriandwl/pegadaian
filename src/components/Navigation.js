import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.svg";

export default function Navigation() {
  return (
    <header className="container">
      <nav className="row g-0">
        <ul className="col-lg-12 list-unstyled d-flex gap-2 justify-content-between my-4">
          <li>
            <img src={Logo} alt="logo" width="170px" height="60px" />
          </li>
          <li className="d-flex gap-3 mt-3">
            <p>Transaksi</p>
            <p>Tentang Kami</p>
            <p>Promo</p>
          </li>
          <li className="mt-1">
            <button
              type="button"
              className="p-1 rounded-2 px-3 inter"
              style={{
                fontSize: "13px",
                color: "white",
                backgroundColor: "#004D43",
              }}
            >
              Daftar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
