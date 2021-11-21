import { Subject } from "rxjs";

export const makeService = () => {
  const detailPost$ = new Subject();
  detailPost$.asObservable();

  /**
   * NOTE '커뮤니티 > 추천'에서 선택된 post
   * @param {object} post
   */
  const detailPost = ({ post }: { post: object }) => detailPost$.next(post);

  return {
    detailPost$,
    detailPost,
  };
};
