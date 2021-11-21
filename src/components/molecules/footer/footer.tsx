import { errorBoundary } from "hocs";

import FooterPresenter from "./footer.presenter";

const Footer = () => {
  return <FooterPresenter />;
};

errorBoundary(Footer);

export default Footer;
