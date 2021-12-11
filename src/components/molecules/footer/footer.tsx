import { errorBoundary } from "hocs";

import FooterPresenter from "./footer.presenter";

interface FooterProps {
  theme: string;
}
const Footer = ({ theme }: FooterProps) => {
  return <FooterPresenter theme={theme} />;
};

errorBoundary(Footer);

export default Footer;
