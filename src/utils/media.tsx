import { useMediaQuery } from "react-responsive";

interface Props {
  children: typeof Element | any;
}

const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }: Props) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export { Default, Mobile };
