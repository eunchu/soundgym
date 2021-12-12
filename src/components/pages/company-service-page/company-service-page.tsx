import { errorBoundary } from "hocs";

import CompanyServicePagePresenter from "./company-service-page.presenter";

const CompanyServicePage = () => {
  return <CompanyServicePagePresenter />;
};

errorBoundary(CompanyServicePage);

export default CompanyServicePage;
