import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import gambar1 from "../assets/images/kartu-emas.png";
import gambar2 from "../assets/images/gambar2-removebg-preview.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function HomePage() {
  return (
    <div className="home-page">
      <Navigation />
      <main className="container" style={{ marginTop: "120px" }}>
        <div className="row g-0 gap-5">
          <div className="col-lg-4 my-5 mt-5">
            <h1
              className="mt-5 gordita"
              style={{ fontSize: "10vh", color: "#74BC46" }}
            >
              Pegadaian Digital
            </h1>
            <p className="manrope mt-3">
              Untuk Kemudahan Segala Transaksi Anda
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row g-0 justify-content-center">
              <div className="col-lg-8 border border-2 p-2 rounded-3 shadow-sm">
                <div className="row g-0">
                  <div className="col-lg-12 d-flex justify-content-between">
                    <p
                      className="manrope"
                      style={{ fontSize: "16px", fontWeight: "600" }}
                    >
                      Tabungan Emas
                    </p>
                    <p className="manrope" style={{ fontSize: "12px" }}>
                      22 Februari 2023
                    </p>
                  </div>
                </div>
                <div className="row g-0 text-center buy-card__price mt-3">
                  <div
                    className="col-lg-6 rounded"
                    style={{ backgroundColor: "#004D43" }}
                  >
                    <p
                      className="mt-2 manrope"
                      style={{ fontSize: "14px", color: "white" }}
                    >
                      Rp.9.000 / 0.01 gr
                    </p>
                  </div>
                  <div
                    className="col-lg-6 sell-card__price rounded"
                    style={{ backgroundColor: "#004D43" }}
                  >
                    <p
                      className="mt-2 manrope"
                      style={{ fontSize: "14px", color: "white" }}
                    >
                      Rp.9.000 / 0.01 gr
                    </p>
                  </div>
                </div>
                <div className="row g-0 text-center buy-card__gold mb-5">
                  <div
                    className="col-lg-6 rounded btn"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #004D43",
                    }}
                  >
                    <button
                      className="bg-transparent border-0 p-2 manrope"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Beli Emas
                    </button>
                  </div>
                  <div
                    className="col-lg-6 sell-card__gold rounded btn"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #004D43",
                    }}
                  >
                    <button
                      type="button"
                      className="bg-transparent border-0 p-2 manrope"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Jual Emas
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 w-100 h-100 mt-4 rounded-4"
                style={{ border: "1px solid #004D43" }}
              >
                <div className="row g-0 gap-5 justify-content-between">
                  <div
                    className="col-lg-9"
                    style={{
                      borderRadius: "10px 0 10px 0",
                      border: "1px solid #004D43",
                      backgroundColor: "#004D43",
                    }}
                  >
                    <div className="d-flex gap-3 mt-3 ms-4">
                      <p className="text-light">Harga Beli</p>
                      <p className="text-light">Harga Jual</p>
                    </div>
                  </div>
                  <div className="col-lg-2 mt-2">
                    <div className="dropdown">
                      <Link
                        className="btn border dropdown-toggle"
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        1 Tahun
                      </Link>

                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/">
                            1 Bulan
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            6 Bulan
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            3 Bulan
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-lg-12">
                    <Line data={data} options={options} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0" style={{ marginTop: "100px" }}>
          <div className="col-lg-12 text-center my-5">
            <p className="lato" style={{ fontSize: "36px" }}>
              Transaksi
            </p>
            <p>Mau Transaksi Apa Hari Ini?</p>
          </div>
        </div>
        <div className="row g-0 justify-content-center gap-3">
          <div className="col-lg-2 border text-center rounded-5 btn">
            <img src={gambar2} alt="gambar 1" width="150px" />
            <p>Buka Tabungan Emas</p>
          </div>
          <div className="col-lg-2 border text-center rounded-5 btn">
            <img src={gambar2} alt="gambar 1" width="150px" />
            <p>Bayar Gadai</p>
          </div>
          <div className="col-lg-2 border text-center rounded-5 btn">
            <img src={gambar2} alt="gambar 1" width="150px" />
            <p>Buka Cicilan</p>
          </div>
          <div className="col-lg-2 border text-center rounded-5 btn">
            <img src={gambar2} alt="gambar 1" width="150px" />
            <p>Cicilan Emas Batangan</p>
          </div>
        </div>
        <div className="row g-0" style={{ marginTop: "150px" }}>
          <div className="col-lg-12">
            <p className="inter" style={{ fontSize: "36px" }}>
              Promo dan Info Terbaru
            </p>
          </div>
        </div>
        <div className="row g-0 border rounded gap-2 d-flex align-items-center">
          <div className="col-lg-4 mx-auto">
            <p className="inter" style={{ fontSize: "30px" }}>
              Atur Keuangan dalam Genggaman
            </p>
            <p>
              Daftar akun Pegadaian Digital atau masuk ke akunmu untuk transaksi
              dengan mudah.
            </p>
            <div className="d-flex gap-2">
              <button
                type="button"
                className="px-4 py-1 rounded manrope border-0"
                style={{
                  backgroundColor: "#74BC46",
                  fontSize: "12px",
                  color: "white",
                }}
              >
                Masuk
              </button>
              <button
                type="button"
                className="px-4 py-1 bg-transparent rounded manrope border"
                style={{ fontSize: "12px" }}
              >
                Daftar
              </button>
            </div>
          </div>
          <div className="col-lg-7 border my-4 mx-auto rounded">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  class="carousel-control-prev"
                  style={{ backgroundColor: "transparent" }}
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  class="carousel-control-next"
                  type="button"
                  style={{ backgroundColor: "transparent" }}
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="carousel-inner rounded-2">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={gambar1} class="d-block w-100 h-50" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={gambar1} class="d-block w-100 h-50" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={gambar1} class="d-block w-100 h-50" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <hr className="container" />
      <footer className="container">
        <div>
          <p>gas</p>
        </div>
      </footer>
    </div>
  );
}
