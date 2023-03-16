import Image from "next/image";
import LogoWhite from "@/public/images/logo_white.svg";
import Pcp from "@/public/images/certifications/pcp.jpeg";
import Pcc from "@/public/images/certifications/pcc.jpeg";

import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <Link href="https:/al-mawrid.org">
          <Image src={LogoWhite} height="150" width="150" alt="alm-logo" />
        </Link>
      </div>
      <div>
        <span className="footer-title">Meet Our Team</span>
        <div className="link link-hover">
          <Link className="" href="https:/al-mawrid.org/Fellows">
            Fellows
          </Link>
        </div>
        <div className="link link-hover">
          <Link className="  " href="https:/al-mawrid.org/Associate">
            Assistant Fellows
          </Link>
        </div>
        <div className="link link-hover">
          <Link className="  " href="https:/al-mawrid.org/Associate">
            Associate Fellows
          </Link>
        </div>

        <div className="link link-hover">
          <div className="flex flex-row flex-wrap justify-arouond w-full">
            <Link
              className="mr-3 my-2"
              href="https://twitter.com/AlMawridOffice"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa fa-twitter fa-2x"
                style={{ color: "white" }}
                aria-hidden="true"
              ></i>
            </Link>
            <Link
              className="mr-3 my-2"
              href="https://www.facebook.com/almawridofficial"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa fa-facebook fa-2x"
                style={{ color: "white" }}
                aria-hidden="true"
              ></i>
            </Link>
            <Link
              className="mr-3 my-2"
              href="https://www.youtube.com/channel/UCHDtHmCv7QIcc7Ye1jhKC_A"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="youtube"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-youtube fa-w-18 fa-3x"
                width="35px"
              >
                <path
                  fill="white"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <span className="footer-title">Be a Part of Al-Mawrid</span>
        <div className="link link-hover">
          <Link
            href="https://al-mawrid.org/FriendsGroup/FriendsPageUrduAndEnglish.html"
            target="blank"
          >
            Friends of Al-Mawrid
          </Link>
        </div>
        <span className="footer-title">Join our Broadcast list</span>
        <div className="">
          <h6>Join our Broadcast list</h6> 1.Save following number
          <br /> +92 300 0161611
          <br /> 2.Text on it with full name
          <br />
        </div>
        <div className="link link-hover">
          <Link href="https://al-mawrid.org/AnnualReports">
            <p style={{ color: "white" }}>Annual Reports</p>
          </Link>
        </div>
      </div>
      <div>
        <span className="footer-title">CONTACT US</span>
        <a href="mailto:info@al-mawrid.org" style={{ color: "white" }}>
          info@al-mawrid.org
        </a>
        <div className="flex flex-col">
          <div>Al-Mawrid</div>
          <div>P.O. Box 5185</div>
          <div> Lahore 54700 - Pakistan</div>
        </div>
        <div className="link link-hover">
          <Link href="https://al-mawrid.org/ContactUs">Contact Us Form</Link>
        </div>
      </div>
      <div>
        <span>
          <Image
            className="rounded-full"
            src={Pcp}
            height="80"
            alt="pcp-logo"
          />
        </span>
        <br />
        <br />
        <span>
          <Image
            className="rounded-full"
            src={Pcc}
            height="80"
            alt="pcc-logo"
          />
        </span>
      </div>
    </footer>
  );
}
