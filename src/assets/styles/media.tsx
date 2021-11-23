interface BreakpointsProps {
  // 필요시 breakpoint 추가하여 사용해주세요
  mobile: number;
}
const breakpoints: BreakpointsProps = {
  mobile: 767,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
