/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Note2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Note2Icon(props: Note2IconProps) {
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
        strokeWidth={"1.25"}
        d={
          "m18.05 8.7-.817 3.483c-.7 3.009-2.083 4.225-4.683 3.975a9 9 0 0 1-1.35-.225L9.8 15.6c-3.475-.825-4.55-2.542-3.733-6.025l.816-3.492c.167-.708.367-1.325.617-1.833.975-2.017 2.633-2.558 5.417-1.9l1.391.325c3.492.817 4.559 2.542 3.742 6.025"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M12.55 16.158c-.517.35-1.167.642-1.958.9l-1.317.434c-3.308 1.066-5.05.175-6.125-3.134l-1.067-3.291C1.017 7.758 1.9 6.008 5.208 4.942l1.317-.434c.342-.108.667-.2.975-.258-.25.508-.45 1.125-.617 1.833l-.816 3.492c-.817 3.483.258 5.2 3.733 6.025l1.4.333q.725.175 1.35.225m-2.017-9.05 4.042 1.025m-4.858 2.2 2.416.617"
        }
      ></path>
    </svg>
  );
}

export default Note2Icon;
/* prettier-ignore-end */
