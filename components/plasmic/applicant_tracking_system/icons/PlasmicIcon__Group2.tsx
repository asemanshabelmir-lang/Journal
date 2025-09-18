/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1280 947"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={".03"}
        d={
          "M25.268 756.641H0v93.636h25.268zM1280 0h-25.27v171.419H1280zm-29.88 175.944h-25.26v49.081h25.26zm-29.87 64.942h-25.27v46.061h25.27zm-29.87-15.861h-25.27v80.802h25.27zm-29.88 52.482h-25.27v69.849h25.27zm-29.87 172.55h-25.27v92.13h25.27zm-29.88 6.039h-25.27v66.455h25.27zm-29.87-127.613h-25.27v160.848h25.27zM1041 255.608h-25.26v114.404H1041zm-29.87-21.9h-25.27v43.799h25.27zm-29.879-30.583h-25.267v61.166h25.267zm-29.871 0h-25.268v85.71h25.268zM921.504 310.36h-25.268v54.37h25.268zm-29.877-40.78h-25.268v95.15h25.268zm-29.871 19.255h-25.268v28.32h25.268zm-29.876-50.407h-25.268v39.079h25.268zm-29.877-39.079h-25.268v78.158h25.268zm-29.871-43.042h-25.268v72.494h25.268zm-29.877 29.452h-25.267v83.821h25.267zm-29.871-61.166h-25.268v104.208h25.268zm-29.876 43.042H657.24v86.369h25.268zM652.631 269.58h-25.267v47.575h25.267zm-29.871-50.407h-25.268v69.662h25.268zm-29.876 23.218h-25.268v122.331h25.268zm-29.877 56.641H537.74V484.79h25.267zm-29.871 168.774h-25.268v260.522h25.268zM503.26 662.63h-25.268v104.208h25.268zm-29.877-67.968h-25.268v122.331h25.268zm-29.871-80.42h-25.268v112.141h25.268zm-29.876 19.255h-25.268v122.33h25.268zm-29.877-87.216h-25.268v53.613h25.268zm-29.871 21.525H328.62V582.21h25.268zm-29.877 118.929h-25.267v50.969h25.267zm-29.876 27.182h-25.268v97.412h25.268zm-29.871 30.582h-25.268v144.987h25.268zm-29.877 112.142H209.12v93.636h25.267zm-29.876 58.903h-25.268v34.74h25.268zM174.64 711.336h-25.268v208.415h25.268zm-29.877 21.143h-25.268v70.98h25.268zm-29.876 24.162H89.619v141.967h25.268zm-29.871 46.818H59.748v143.473h25.268zm-29.872-70.98H29.876v93.636h25.268z"
        }
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
