import Player from "@/components/players/page";
import Ticket from "@/components/ticket/page";
import Toggle from "@/components/toggle/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="flex items-center justify-between font-extrabold text-24 leading-36 font-poppins"
        style={{ marginBottom: "25px" }}
      >
        <div className="flex items-center">
          <div>
            <span className="font-poppins">Sports</span>
            <span
              className="block w-14 bg-blue-500 "
              style={{ height: "1px", marginTop: "5px" }}
            ></span>
          </div>
        </div>
        <Toggle />
      </div>
      <Player />
      <Ticket />
    </>
  );
}
