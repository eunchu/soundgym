import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "components/molecules/header/header";
import CommunityPage from "components/pages/community-page/community-page";
import RecommendDetail from "components/organisms/recommend-detail/recommend-detail";
import PopularDetail from "components/organisms/popular-detail/popular-detail";
import MagazineDetail from "components/organisms/magazine-detail/magazine-detail";
import MyPage from "components/organisms/my-page/my-page";
import MainPage from "components/pages/main-page/main-page";
import CompanyServicePage from "components/pages/company-service-page/company-service-page";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="soundgym" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="membership" element={<div>멤버십 페이지</div>} />
          <Route path="service" element={<CompanyServicePage />} />
          <Route
            path="community/recommend/detail"
            element={<RecommendDetail />}
          />
          <Route path="community/popular/detail" element={<PopularDetail />} />
          <Route
            path="community/magazine/detail"
            element={<MagazineDetail />}
          />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
