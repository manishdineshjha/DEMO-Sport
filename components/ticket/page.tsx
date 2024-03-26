"use client";

import { DarkModeContext } from "@/context/AuthContext";
import React, { useState, useEffect, useContext } from "react";

const Ticket: React.FC = () => {
  const ticketData = [
    {
      id: 1,
      image: "/images/Ticket_Mockup 3.png",
      title: "Las Vegas Aviators",
      month: "OCT",
      date: "15",
      time: "4:30",
      day: "SUN",
      meridiem: "PM",
      address1: "Las Vegas Ballpark,",
      address2: "Las Vegas,",
      city: "Nevada",
      btnText: "Take Flight Collection",
    },
    {
      id: 2,
      image: "/images/Ticket2.png",
      title: "Sacramento River Cats",
      month: "OCT",
      date: "15",
      time: "4:30",
      day: "SUN",
      meridiem: "PM",
      address1: "Sutter Health Park,",
      address2: "Sacramento,",
      city: "California",
      btnText: "Orange Collection",
    },
    {
      id: 3,
      image: "/images/Ticket_Mockup 3.png",
      title: "Las Vegas Aviators",
      month: "OCT",
      date: "15",
      time: "4:30",
      day: "SUN",
      meridiem: "PM",
      address1: "Las Vegas Ballpark,",
      address2: "Las Vegas,",
      city: "Nevada",
      btnText: "Take Flight Collection",
    },
    {
      id: 4,
      image: "/images/Ticket2.png",
      title: "Sacramento River Cats",
      month: "OCT",
      date: "15",
      time: "4:30",
      day: "SUN",
      meridiem: "PM",
      address1: "Sutter Health Park,",
      address2: "Sacramento,",
      city: "California",
      btnText: "Orange Collection",
    },
    {
      id: 5,
      image: "/images/Ticket_Mockup 3.png",
      title: "Las Vegas Aviators",
      month: "OCT",
      date: "15",
      time: "4:30",
      day: "SUN",
      meridiem: "PM",
      address1: "Las Vegas Ballpark,",
      address2: "Las Vegas,",
      city: "Nevada",
      btnText: "Take Flight Collection",
    },
    {
      id: 6,
      image: "/images/Ticket2.png",
      title: "Sacramento River Cats",
      month: "OCT",
      date: "15",
      time: "4:30",
      day: "SUN",
      meridiem: "PM",
      address1: "Sutter Health Park,",
      address2: "Sacramento,",
      city: "California",
      btnText: "Orange Collection",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 for other viewport widths
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window?.innerWidth;
      if (viewportWidth >= 768 && viewportWidth <= 992) {
        setItemsPerPage(2); // Set to 2 for viewport width between 768px and 992px (tablet view)
      } else if (viewportWidth < 768) {
        setItemsPerPage(1); // Set to 1 for viewport width smaller than 768px (mobile view)
      } else {
        setItemsPerPage(3); // Default to 3 for other viewport widths
      }
    };

    handleResize(); // Call once on initial render
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  const visibleTickets = ticketData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleLeftArrowClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleRightArrowClick = () => {
    if (startIndex + itemsPerPage < ticketData.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };
  return (
    <div
    className="resp-padding"
      style={{
        
        background: darkMode
          ? "linear-gradient(to bottom, #18282A, #221A2C)"
          : "linear-gradient(to bottom,#F9F8FF,#F3F9FF)",
      }}
    >
      <div
        className="font-poppins text-center font-bold"
        style={{ fontSize: "50px" }}
      >
        Collection Spotlight
      </div>
      <div
        className="font-inter text-center"
        style={{
          fontWeight: "400",
          fontSize: "14px",
          marginTop: "25px",
          marginBottom: "51px",
        }}
      >
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        <br /> experience. Grab yours today!
      </div>
      <div
        className="flex justify-between items-center"
        // style={{ transition: "all 3s ease-in-out" }}
      >
        {/* leftArrow */}
        <div style={{ cursor: "pointer" }} onClick={handleLeftArrowClick}>
          <img src="/images/leftArrow.svg" alt="" />
        </div>
        {/* ticketCard */}
        <div className="flex" style={{ gap: "43px" }}>
          {ticketData &&
            visibleTickets?.map((itm, idx) => (
              <div
                className={` ${
                  darkMode ? "bg-dark-secondary" : "bg-light-secondary"
                } shadow-lg rounded-lg overflow-hidden`}
                style={{ width: "257px", position: "relative" }}
                key={idx}
              >
                <div>
                  <div style={{}}>
                    <img
                      src={itm?.image}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="flex items-center justify-between" style={{}}>
                    <div
                      className=""
                      style={{
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        marginLeft: "-8px",
                        background: darkMode
                          ? "linear-gradient(to bottom, #18282A, #221A2C)"
                          : "linear-gradient(to bottom,#D9D9D9,#F3F9FF)",
                      }}
                    ></div>
                    <div
                      className="flex items-center justify-center"
                      style={{ color: "#818A97", textAlign: "center" }}
                    >
                      --------------------------
                    </div>
                    <div
                      className=""
                      style={{
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        marginRight: "-8px",
                        background: darkMode
                          ? "linear-gradient(to bottom, #18282A, #221A2C)"
                          : "linear-gradient(to bottom,#D9D9D9,#F3F9FF)",
                      }}
                    ></div>
                  </div>
                  <div
                    className="text-center"
                    style={{
                      marginTop: "12px",
                      padding: "10px",
                      fontSize: "17px",
                    }}
                  >
                    <div className="font-poppins font-medium">{itm?.title}</div>

                    <div
                      className="font-poppins"
                      style={{
                        marginTop: "15px",
                        fontWeight: "400",
                        fontSize: "14px",
                      }}
                    >
                      {itm?.month}&nbsp;{itm?.date}&nbsp;|&nbsp;{itm?.day}
                      &nbsp;|&nbsp;{itm?.time}&nbsp;{itm?.meridiem}
                    </div>
                    <div
                      className="font-inter"
                      style={{
                        marginTop: "18px",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: darkMode ? "#DFDFDF" : "#525965",
                      }}
                    >
                      {itm?.address1}&nbsp;{itm?.address2}
                      <br /> {itm?.city}
                    </div>
                    <div
                      className="flex items-center justify-center font-medium"
                      style={{
                        margin: "20px auto",
                        maxWidth: "213px",
                        maxHeight: "36px",
                        background: "#000000",
                        padding: "11px",
                        fontSize: "13px",
                        color: "#ffff",
                      }}
                    >
                      {itm?.btnText}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* rightArrow */}
        <div style={{ cursor: "pointer" }} onClick={handleRightArrowClick}>
          <img src="/images/rightArrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
