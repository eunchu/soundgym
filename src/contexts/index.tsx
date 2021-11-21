import { ServicesContext, ServicesProvider } from "./services";

const _render = (children: React.ReactNode, Component: any) => (
  <Component>{children}</Component>
);
const _compoaseProviders =
  (...providers: any) =>
  ({ children }: { children: React.ReactNode }) =>
    providers.reduce(_render, children);

const ContextProvider = _compoaseProviders(ServicesProvider);

export { ContextProvider, ServicesContext, ServicesProvider };
