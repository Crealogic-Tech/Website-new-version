// "use client";

// import React, { useEffect, useState } from "react";
// import Loader from "./Loader";

// const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3200); 

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return <>{children}</>;
// };

// export default ClientWrapper;
