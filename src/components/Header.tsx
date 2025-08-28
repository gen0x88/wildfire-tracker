import { Icon } from "@iconify/react";
import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon="mdi:fire" />
        Wildfire Tracker (Powered by NASA)
      </h1>
    </header>
  );
};
