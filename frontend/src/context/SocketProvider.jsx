import React, { Children, createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

const SocketConetext = createContext(null);

export const SocketProvider = ({ children }) => {
  const socket = useMemo(() => io("http://localhost:8000"), []);

  return (
    <SocketConetext.Provider value={socket}>{children}</SocketConetext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketConetext);
};
