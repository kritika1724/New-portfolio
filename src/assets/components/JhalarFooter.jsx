import React from "react";
import "./JhalarFooter.css";

export default function JhalarFooter() {
  return (
    <div className="jhalar-footer">
      <div className="jhalar">
        {[...Array(60)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </div>
  );
}
