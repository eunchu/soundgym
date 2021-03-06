import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { Default, Mobile } from "utils";

import Logo from "assets/images/logo.png";
import LogoWhite from "assets/images/logo-white.png";
import IconNav from "assets/images/ic-nav.png";
import IconNavWhite from "assets/images/ic-nav-white.png";
import ImgProfile from "assets/images/img-profile.png";
import IconArrow from "assets/images/ic-arrow.png";

import Footer from "components/molecules/footer/footer";

/**
 * Style >>>
 */
interface HeaderContainerProps {
  bg: string;
  borderColor: string;
}
const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;

  height: 70px;
  width: 100%;

  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => `1px solid ${props.borderColor}`};
  z-index: 20;
  .container {
    max-width: 1223px;
    height: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: auto;
    @media (max-width: 1380px) {
      padding: 0 16px;
    }
  }

  img {
    width: 163px;
    cursor: pointer;
  }
`;
const Box = styled.div`
  height: 70px;
`;
interface NaviProps {
  servicePage: boolean;
}
const Navi = styled.nav<NaviProps>`
  ul {
    display: flex;
    align-items: center;
    margin-right: ${(props) => props.servicePage && "-39px"};
  }
`;
interface NavProps {
  active: boolean;
  darkTheme: boolean;
}
const Nav = styled.li<NavProps>`
  height: 48px;

  display: flex;
  align-items: center;

  font-family: ${(props) => (props.active ? "neo-bold" : "neo-regular")};
  color: ${(props) => (props.darkTheme ? "#F7F8F9" : "#606872")};
  line-height: 22px;

  padding: 0 16px;
  margin-right: 24px;

  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
`;
const AdminBtn = styled.div`
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "neo-bold";
  font-size: 14px;
  line-height: 22px;
  color: #f7f8f9;

  border: 1px solid #d8e6fe;
  border-radius: 4px;

  padding: 0 20px;
  margin-right: 20px;
  cursor: pointer;
`;
const CouponBtn = styled.div`
  width: 80px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "neo-bold";
  line-height: 22px;
  color: #3d84fb;

  border-radius: 4px;
  border: 1px solid rgba(216, 230, 254, 1);

  margin-right: 20px;
  cursor: pointer;
`;
const LoginBtn = styled.div`
  width: 80px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "neo-bold";
  line-height: 22px;
  color: #606872;

  background-color: #f1f4f6;
  border-radius: 4px;

  cursor: pointer;
`;
const ProfileArea = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  .profile {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .arrow {
    width: 24px;
    height: 24px;
  }
`;
// Mobile Style >>>
const MobileNavi = styled.nav`
  position: relative;

  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;
const DownloadBtn = styled.div`
  font-family: "neo-bold";
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;

  background-color: #3d84fb;
  border-radius: 100px;

  padding: 9px 12px;
  margin-right: 20px;
`;
interface MenuContainerProps {
  top: number;
}
const MenuContainer = styled.ul<MenuContainerProps>`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  right: 0;

  width: 162px;
  height: auto;

  background-color: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 2;
`;
const MobileNav = styled.li`
  font-family: "neo-bold";
  line-height: 22px;
  color: #38323c;
  border-bottom: 1px solid #f1f4f6;

  padding: 16px;
  cursor: pointer;
  div {
    font-family: "neo-medium";
    color: #606872;

    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const More = styled.span`
  font-family: "neo-regular";
  font-size: 10px;
  line-height: 12px;
  color: #a5aab4;

  margin-bottom: 8px;
  cursor: pointer;
`;
const UserType = styled.span`
  font-family: "neo-regular";
  font-size: 10px;
  line-height: 12px;
  color: #606872;
`;
// <<< Style

interface HeaderProps {
  isLogin: boolean;
  activePage: string;
  onClickMenu: ({ menu }: { menu: string }) => void;
  isOpenMenu: boolean;
  onClickMenuOpen: () => void;
}
const Header = ({
  isLogin,
  activePage,
  onClickMenu,
  isOpenMenu,
  onClickMenuOpen,
}: HeaderProps) => {
  /**
   * >>> State
   * @scrollY : ????????? ??? y ???
   */
  const [scrollY, setScrollY] = useState<number>(0);
  // <<< State

  // ????????? ?????? ??? ??????
  const loginMenuEl = useMemo(() => {
    return (
      <>
        <MobileNav style={{ display: "flex", flexDirection: "column" }}>
          ??????
          <UserType>??????</UserType>
        </MobileNav>
        <MobileNav>
          <More>?????????</More>
          <div>????????????</div>
          <div>????????????</div>
        </MobileNav>
      </>
    );
  }, []);

  // ????????? ??? header style ??????
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(), true);
    return () =>
      window.removeEventListener("scroll", () => handleScroll(), true);
  }, [handleScroll]);
  // <<<

  // theme
  const location = useLocation();
  const footerDarkTheme =
    location &&
    ["/soundgym", "/soundgym/", "/soundgym/service"].includes(
      location.pathname
    );
  const haderDarkTheme = location && location.pathname === "/soundgym/service";

  // ????????? ?????????
  const MobileSize = useMediaQuery({ query: "(max-width: 767px)" });

  const mainPage = ["/soundgym", "/soundgym/"].includes(location.pathname);
  const servicePage = location.pathname === "/soundgym/service";
  // header ?????????
  const bg = useMemo(() => {
    let bg = servicePage ? "#1D293D" : mainPage ? "#f3f9fd" : "#ffffff";
    if (!MobileSize && scrollY >= 190 && mainPage) bg = "#ffffff";
    if (MobileSize && scrollY >= 112 && mainPage) bg = "#ffffff";
    if (!MobileSize && scrollY > 190 && servicePage) bg = "#171B1C";
    if (MobileSize && scrollY > 112 && servicePage) bg = "#171B1C";

    return bg;
  }, [MobileSize, mainPage, scrollY, servicePage]);
  // header border
  const borderColor = useMemo(() => {
    let color = "translate";

    if (scrollY >= 190 && mainPage) color = "#EEEEEE";
    if (scrollY >= 190 && servicePage) color = "#41474C";

    return color;
  }, [mainPage, scrollY, servicePage]);

  return (
    <>
      <HeaderContainer bg={bg} borderColor={borderColor}>
        <div className="container">
          {/* NOTE ?????? ?????? ??? ?????????????????? ???????????????*/}
          <Link to="/soundgym">
            <img
              src={haderDarkTheme ? LogoWhite : Logo}
              alt=""
              onClick={() => onClickMenu({ menu: "" })}
            />
          </Link>
          {/* Desktop UI */}
          <Default>
            <Navi servicePage={servicePage}>
              <ul>
                <Link to="membership">
                  <Nav
                    darkTheme={haderDarkTheme}
                    active={activePage === "?????????"}
                    onClick={() => onClickMenu({ menu: "?????????" })}
                  >
                    ?????????
                  </Nav>
                </Link>
                <Link to="community">
                  <Nav
                    darkTheme={haderDarkTheme}
                    active={activePage === "????????????"}
                    onClick={() => onClickMenu({ menu: "????????????" })}
                  >
                    ????????????
                  </Nav>
                </Link>
                <Link to="service">
                  <Nav
                    darkTheme={haderDarkTheme}
                    active={activePage === "?????? ?????????"}
                    onClick={() => onClickMenu({ menu: "?????? ?????????" })}
                  >
                    ?????? ?????????
                  </Nav>
                </Link>
              </ul>
            </Navi>
            <ButtonArea>
              {haderDarkTheme ? (
                <AdminBtn>??????????????????</AdminBtn>
              ) : (
                <CouponBtn>????????????</CouponBtn>
              )}
              {isLogin ? (
                <ProfileArea>
                  <Link to="mypage">
                    <img className="profile" src={ImgProfile} alt="" />
                  </Link>
                  <img
                    onClick={() => onClickMenuOpen()}
                    className="arrow"
                    src={IconArrow}
                    alt=""
                  />
                  {isOpenMenu && (
                    <MenuContainer top={60}>{loginMenuEl}</MenuContainer>
                  )}
                </ProfileArea>
              ) : (
                <LoginBtn>?????????</LoginBtn>
              )}
            </ButtonArea>
          </Default>
          {/* Mobile UI */}
          <Mobile>
            <MobileNavi onClick={() => onClickMenuOpen()}>
              {scrollY >= 320 && mainPage && (
                <DownloadBtn>??? ????????????</DownloadBtn>
              )}
              <img src={haderDarkTheme ? IconNavWhite : IconNav} alt="" />
              {isOpenMenu && (
                <MenuContainer top={60}>
                  {isLogin ? (
                    loginMenuEl
                  ) : (
                    <MobileNav>?????????/????????????</MobileNav>
                  )}
                  <Link to="membership">
                    <MobileNav>?????????</MobileNav>
                  </Link>
                  <Link to="community">
                    <MobileNav>????????????</MobileNav>
                  </Link>
                  <Link to="service">
                    <MobileNav>?????? ?????????</MobileNav>
                  </Link>
                  <MobileNav>??????????????????</MobileNav>
                </MenuContainer>
              )}
            </MobileNavi>
          </Mobile>
        </div>
      </HeaderContainer>
      <Box />
      <Outlet />
      {/* ???????????????, ??????????????? ???????????? ?????? dark ?????? ??????????????? */}
      <Footer theme={footerDarkTheme ? "dark" : "normal"} />
    </>
  );
};

export default Header;
