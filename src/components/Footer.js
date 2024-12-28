import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white flex flex-col items-center p-5">
      <ul className="flex justify-center gap-4 my-4">
        <li>
            <a href="https://www.instagram.com/" target="_blank"  className="text-2xl hover:text-blue-300 transition">
            <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" className="text-2xl hover:text-blue-300 transition">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" className="text-2xl hover:text-blue-300 transition">
          <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank" className="text-2xl hover:text-blue-300 transition">
          <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
      <p className="dnfguodfhugufsoghuoshgohos">
        <p style={{
          display: "flex", alignItems : "center", justifyContent : "center", marginBottom : 5
        }}>
          <span>
           contact-team@sleepngo.co
          </span>
        </p>
        <p style={{
          display: "flex", alignItems : "center", justifyContent : "center", marginBottom : 5
        }}>
          <span>
            +212 753 976 003
          </span>
        </p>
      </p>
      <p className="text-sm mt-4">&copy;&nbsp;&nbsp;&nbsp;2024&nbsp;&nbsp;&nbsp;SLEEP&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;GO&nbsp;&nbsp;|&nbsp;&nbsp;Tous&nbsp;&nbsp;droits&nbsp;&nbsp;réservés</p>
    </footer>
  );
};

export default Footer;
