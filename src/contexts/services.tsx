import React, { createContext } from "react";

import * as services from "services";

const ServicesContext = createContext(services);

const ServicesProvider = ({ children }: { children: React.ReactNode }) => (
  <ServicesContext.Provider value={services}>
    {children}
  </ServicesContext.Provider>
);

export { ServicesContext, ServicesProvider };
