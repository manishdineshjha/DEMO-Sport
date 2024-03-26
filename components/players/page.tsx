"use client"
import Image from "next/image";
import React,{useContext} from "react";
import Ticket from "../ticket/page";
import { DarkModeContext } from "@/context/AuthContext";

const Player: React.FC = () => {
  const {darkMode}=useContext(DarkModeContext)
  const Playerdata = [
    {
      id: 1,
      image: "/images/player1.svg",
      title: "Sacramento River Cats",
      events: "48",
      sport: "Baseball",
      ads: "NO",
    },
    {
      id: 2,
      image: "/images/player2.svg",
      title: "Las Vegas Aviators",
      events: "28",
      sport: "Baseball",
      ads: "NO",
    },
    {
      id: 3,
      image: "/images/player3.svg",
      title: "New Jersey Devils",
      events: "15",
      sport: "Ice Hockey",
      ads: "NO",
    },
    {
      id: 4,
      image: "/images/player2.svg",
      title: "Las Vegas Aviators",
      events: "28",
      sport: "Baseball",
      ads: "NO",
    },
  ];

  const AdData = [
    {
      id: 1,
      image: "/images/ads.svg",
      title: "Advertisement title",
      text: "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor<br /> incididunt ut labore et dolore <br /> magna aliqua. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et <br /> dolore magna aliqua.",
      ads: "YES",
    },
  ];
  return (
    <>
      <div className="flex resp-wrap justify-center " style={{ gap: "14px" }}>
        {Playerdata &&
          Playerdata?.map((itm, idx) => (
            <div
              className={`${darkMode ?`bg-dark-secondary`:`bg-light-secondary`} shadow-lg rounded-lg overflow-hidden w-full md:w-auto`}
              style={{ maxWidth: "237px", padding: "10px" }}
              key={idx}
            >
              <div style={{ marginBottom: "16px" }}>
                <img src={itm?.image} alt="" className="w-full h-auto" />
              </div>
              <div className="font-medium text-17 mb-2">{itm?.title}</div>
              <div className={`${darkMode ?`bg-dark`:`bg-light`} flex py-2 px-3 rounded-md items-center`}>
                <div className="flex flex-col mr-4">
                  <span className="text-12 " style={{ fontSize: "12px" }}>
                    Total Events
                  </span>
                  <span
                    className="text-14 font-bold"
                    style={{ fontSize: "14px" }}
                  >
                    {itm?.events} Events
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-12 " style={{ fontSize: "12px" }}>
                    Sport
                  </span>
                  <span
                    className="text-14 font-bold"
                    style={{ fontSize: "14px" }}
                  >
                    {itm?.sport}
                  </span>
                </div>
              </div>
            </div>
          ))}
        {AdData &&
          AdData?.map((itm, idx) => (
            <div
              className={`${darkMode ?`bg-dark-secondary`:`bg-light-secondary`} shadow-lg rounded-lg overflow-hidden w-full md:w-auto`}
              style={{ maxWidth: "237px", padding: "10px" }}
              key={idx}
            >
              <div style={{ border: "0.2px solid rgba(0, 101, 85, 1)" }}>
                <div style={{ marginBottom: "16px", position: "relative" }}>
                  <img src={itm?.image} alt="" className="w-full h-auto" />
                  <div
                    className="absolute top-0 right-0 flex font-bold items-center justify-center bg-black text-white"
                    style={{ width: "48px", height: "25px" }}
                  >
                    Ad
                  </div>
                </div>
                <div style={{ padding: "28px 10px" }}>
                  <div className="font-semibold text-20 mb-2">{itm?.title}</div>
                  <div className="text-sm font-normal text-gray-500" dangerouslySetInnerHTML={{ __html: itm?.text }}>
                    {/* {itm?.text} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        className="flex items-center justify-center"
        style={{ margin: "50px auto" }}
      >
        <span
          className="font-inter"
          style={{
            cursor: "pointer",
            width: "124.8px",
            height: "46px",
            background: "#2C9CF0",
            padding: "10px 30px",
            color: "#ffff",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          See More
        </span>
      </div>
      &nbsp; &nbsp;
      {/* <Ticket/> */}
    </>
  );
};

export default Player;
