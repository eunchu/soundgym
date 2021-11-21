import { useState, useCallback } from "react";
import { errorBoundary } from "hocs";

import HeaderPresenter from "./header.presenter";

const Header = () => {
  /**
   * >>> State
   * @activePage : 선택한 메뉴명
   * @isOpenMobileMenu : 모바일 메뉴 오픈 상태
   * @isLogin : 로그인 여부
   */
  const [activePage, setActivePage] = useState<string>("커뮤니티");
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  // setIsLogin 사용 시 아래 eslint 삭제해주세요
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState<boolean>(true);
  // <<< State

  // 메뉴 클릭 시 상태 변경 & Desktop 메뉴 active 스타일 변경
  const onClickMenu = useCallback(({ menu }) => setActivePage(menu), []);

  // 모바일 메뉴 아이콘 클릭 시 & 프로필 메뉴 on/off
  const onClickMenuOpen = useCallback(
    () => setIsOpenMenu(!isOpenMenu),
    [isOpenMenu]
  );

  return (
    <HeaderPresenter
      isLogin={isLogin}
      activePage={activePage}
      onClickMenu={onClickMenu}
      isOpenMenu={isOpenMenu}
      onClickMenuOpen={onClickMenuOpen}
    />
  );
};

errorBoundary(Header);

export default Header;
