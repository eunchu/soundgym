import styled from "styled-components";

import { mediaQueries } from "assets/styles/media";

import Recommend from "components/organisms/recommend/recommend";
import Popular from "components/organisms/popular/popular";
import Magazine from "components/organisms/magazine/magazine";

/**
 * Style >>>
 */
const Container = styled.div``;
const TopArea = styled.section`
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
`;
const Title = styled.h2`
  width: 672px;

  display: flex;
  align-items: flex-start;

  font-family: "neo-bold";
  font-size: 24px;
  line-height: 32px;
  color: #000000;

  padding: 40px 0 20px 0;
  ${mediaQueries("mobile")`
    width: 100%;
    
    font-size: 18px;
    line-height: 26px;
    color: #38323C;

    padding-left: 16px;
    padding-top: 35px;
  `}
`;
const TabArea = styled.ul`
  width: 672px;
  height: 100%;

  display: flex;

  ${mediaQueries("mobile")`
    width: 100%;
  `}
`;
interface TabProps {
  active: boolean;
}
const Tab = styled.li<TabProps>`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "neo-medium";
  color: ${(props) => (props.active ? "#38323C" : "#a5aab4")};
  font-size: 16px;
  line-height: 24px;

  border-bottom: ${(props) => props.active && "2px solid #41474C"};

  padding: 13px 0;
  cursor: pointer;
`;
const ContentsArea = styled.section`
  width: 672px;
  height: 100%;

  margin: auto;

  ${mediaQueries("mobile")`
    width: 100%;
  `}
`;
// <<< Style

interface CommunityPageProps {
  activeTab: string;
  onClickTab: ({ active }: { active: string }) => void;
}
const CommunityPage = ({ activeTab, onClickTab }: CommunityPageProps) => {
  // 커뮤니티 탭 메뉴
  const TAB_MENU = ["추천", "#인기", "팔로잉", "매거진"];
  return (
    <Container>
      <TopArea>
        <Title>커뮤니티</Title>
        <TabArea>
          {TAB_MENU.map((menu, i) => (
            <Tab
              key={i}
              active={activeTab === menu}
              onClick={() => onClickTab({ active: menu })}
            >
              {menu}
            </Tab>
          ))}
        </TabArea>
      </TopArea>
      <ContentsArea>
        {activeTab === "추천" ? (
          <Recommend />
        ) : activeTab === "#인기" ? (
          <Popular />
        ) : activeTab === "매거진" ? (
          <Magazine />
        ) : (
          <div>팔로잉 페이지</div>
        )}
      </ContentsArea>
    </Container>
  );
};

export default CommunityPage;
