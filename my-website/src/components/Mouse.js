import React from 'react';
import { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });
    document.querySelectorAll(".hover").forEach((elt) => {
      elt.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });
      elt.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
        cursor.style.transition = "0.3s ease-out";
      });
    })
  }, [])
  return (
    <span className="cursor"></span>
  );
};

export default Mouse;