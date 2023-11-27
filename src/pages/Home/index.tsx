import "./style.home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - SASC";
  }, []);

  return (
    <>
      <div id="home"></div>
    </>
  );
}
