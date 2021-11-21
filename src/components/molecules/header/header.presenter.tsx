import { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import { Default, Mobile } from "utils";

import Logo from "assets/images/logo.png";
import IconNav from "assets/images/ic-nav.png";
import ImgProfile from "assets/images/img-profile.png";
import IconArrow from "assets/images/ic-arrow.png";

import Footer from "components/molecules/footer/footer";

/**
 * Style >>>
 */
const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;

  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;

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
const Navi = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }
`;
interface NavProps {
  active: boolean;
}
const Nav = styled.li<NavProps>`
  height: 48px;

  display: flex;
  align-items: center;

  font-family: ${(props) => (props.active ? "neo-bold" : "neo-medium")};
  color: #606872;
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

  width: 24px;
  height: 24px;
  img {
    width: 100%;
  }
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
  // 로그인 했을 때 메뉴
  const loginMenuEl = useMemo(() => {
    return (
      <>
        <MobileNav style={{ display: "flex", flexDirection: "column" }}>
          유현
          <UserType>개인</UserType>
        </MobileNav>
        <MobileNav>
          <More>더보기</More>
          <div>정보수정</div>
          <div>로그아웃</div>
        </MobileNav>
      </>
    );
  }, []);

  return (
    <>
      <HeaderContainer>
        <div className="container">
          {/* NOTE 로고 클릭 시 메인페이지로 이동합니다*/}
          <Link to="/soundgym">
            <img src={Logo} alt="" onClick={() => onClickMenu({ menu: "" })} />
          </Link>
          {/* Desktop UI */}
          <Default>
            <Navi>
              <ul>
                <Link to="membership">
                  <Nav
                    active={activePage === "멤버십"}
                    onClick={() => onClickMenu({ menu: "멤버십" })}
                  >
                    멤버십
                  </Nav>
                </Link>
                <Link to="community">
                  <Nav
                    active={activePage === "커뮤니티"}
                    onClick={() => onClickMenu({ menu: "커뮤니티" })}
                  >
                    커뮤니티
                  </Nav>
                </Link>
                <Link to="service">
                  <Nav
                    active={activePage === "기업 서비스"}
                    onClick={() => onClickMenu({ menu: "기업 서비스" })}
                  >
                    기업 서비스
                  </Nav>
                </Link>
              </ul>
            </Navi>
            <ButtonArea>
              <CouponBtn>쿠폰등록</CouponBtn>
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
                <LoginBtn>로그인</LoginBtn>
              )}
            </ButtonArea>
          </Default>
          {/* Mobile UI */}
          <Mobile>
            <MobileNavi onClick={() => onClickMenuOpen()}>
              <img src={IconNav} alt="" />
              {isOpenMenu && (
                <MenuContainer top={60}>
                  {isLogin ? (
                    loginMenuEl
                  ) : (
                    <MobileNav>로그인/회원가입</MobileNav>
                  )}
                  <Link to="membership">
                    <MobileNav>멤버십</MobileNav>
                  </Link>
                  <Link to="community">
                    <MobileNav>커뮤니티</MobileNav>
                  </Link>
                  <Link to="service">
                    <MobileNav>기업 서비스</MobileNav>
                  </Link>
                  <MobileNav>쿠폰등록하기</MobileNav>
                </MenuContainer>
              )}
            </MobileNavi>
          </Mobile>
        </div>
      </HeaderContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
