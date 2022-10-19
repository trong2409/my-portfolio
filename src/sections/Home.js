import React from "react";
import Footer from "../components/Footer";
import { displays } from "../utils/config";

export default function Home() {
  return (
    <div id="portfolio">
      {displays.map((display) => (
        <display.component
          id={display.id}
          name={display.name}
          key={display.id}
        />
      ))}
      <Footer />
    </div>
  );
}
