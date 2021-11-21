import styled from "styled-components";

import IconCheck from "assets/images/ic-check.png";

/**
 * Style >>>
 */
const UnFollowBtn = styled.div`
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "neo-bold";
  font-size: 10px;
  line-height: 12px;
  color: #3d84fb;

  background-color: #f1f4f6;
  border-radius: 4px;

  padding: 0 20px;
  cursor: pointer;
`;
const FollowBtn = styled(UnFollowBtn)`
  color: #c5c8ce;
  img {
    width: 12px;
    height: 12px;
    margin-left: 4px;
  }
`;
// <<< Style

interface FollowButtonProps {
  isFollow: boolean;
  onClick?: () => void;
}
export const FollowButton = ({ isFollow, onClick }: FollowButtonProps) => {
  return (
    <>
      {isFollow ? (
        <FollowBtn onClick={onClick}>
          팔로잉
          <img src={IconCheck} alt="" />
        </FollowBtn>
      ) : (
        <UnFollowBtn onClick={onClick}>팔로우</UnFollowBtn>
      )}
    </>
  );
};
