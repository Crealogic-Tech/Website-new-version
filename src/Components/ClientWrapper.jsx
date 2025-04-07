import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const ClientWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default ClientWrapper;
