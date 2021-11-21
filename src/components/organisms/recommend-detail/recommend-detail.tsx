import { useCallback, useState } from "react";
import { useLocation } from "react-router";

import { errorBoundary } from "hocs";

import RecommendDetailPresenter from "./recommend-detail.presenter";

const RecommendDetail = () => {
  // 추천에서 선택한 post 정보
  const { state } = useLocation();

  const [isMoreComment, setIsMoreComment] = useState<boolean>(false);

  // 댓글 2개 이상일 때 : 댓글 더보기 클릭 시 동작 (모든 댓글 출력)
  const onClickMoreComment = useCallback(() => setIsMoreComment(true), []);

  return (
    <RecommendDetailPresenter
      post={state}
      isMoreComment={isMoreComment}
      onClickMoreComment={onClickMoreComment}
    />
  );
};

errorBoundary(RecommendDetail);

export default RecommendDetail;
