/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PresentionChartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PresentionChartIcon(props: PresentionChartIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.25"}
        d={
          "M4.917 14.167h10.158c1.583 0 2.417-.834 2.417-2.417V1.667h-15V11.75c.008 1.583.841 2.417 2.425 2.417m-3.25-12.5h16.666M6.667 18.333 10 16.667v-2.5m3.333 4.166L10 16.667"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.25"}
        d={
          "m6.25 9.167 2.625-2.192c.208-.175.483-.125.625.108l1 1.667a.407.407 0 0 0 .625.108l2.625-2.191"
        }
      ></path>
    </svg>
  );
}

export default PresentionChartIcon;
/* prettier-ignore-end */
