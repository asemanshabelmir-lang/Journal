/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRight2Icon(props: ArrowRight2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        strokeWidth={"1.5"}
        d={"M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"}
      ></path>
    </svg>
  );
}

export default ArrowRight2Icon;
/* prettier-ignore-end */
