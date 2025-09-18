/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1258 1357"}
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
          "M2.527 846.089H0v309.001h2.527zM1257.26 0h-2.53v565.667h2.53zm-29.87 316.63h-2.53v161.979h2.53zm-29.88 68.411h-2.53v152.007h2.53zm-29.88-55.801h-2.52v266.636h2.52zm-29.87 65.068h-2.52v230.509h2.52zm-29.87 146.935h-2.53v304.022h2.53zm-29.88 35.565h-2.53v219.286h2.53zm-29.87-236.165h-2.53v530.784h2.53zm-29.88-19.465h-2.52v377.534h2.52zm-29.873 59.3h-2.527v144.53h2.527zm-29.872-50.564h-2.527v201.844h2.527zm-29.876-28.223h-2.527v282.834h2.527zm-29.876 143.271h-2.527v179.421h2.527zm-29.872-87.672h-2.527v313.986h2.527zm-29.876 96.109h-2.527v93.448h2.527zm-29.876-62.777h-2.527v128.954h2.527zm-29.872-84.016h-2.527v257.915h2.527zm-29.876-36.531h-2.527v239.222h2.527zm-29.872 16.422h-2.526v276.608h2.526zm-29.876-84.615h-2.527v343.887h2.527zm-29.876 63.563h-2.527v285.013h2.527zm-29.872 146.552h-2.526v156.997h2.526zm-29.876-75.805h-2.527V566.08h2.527zm-29.876-37.348h-2.527V702.54h2.527zm-29.872-16.31h-2.527v613.017h2.527zm-29.876 82.803h-2.527v859.713h2.527zm-29.876 374.581h-2.527v343.892h2.527zm-29.872-88.803h-2.527v403.695h2.527zm-29.876-68.703h-2.527v370.057h2.527zm-29.877 7.537h-2.526v403.696h2.526zm-29.871-8.196h-2.527v176.926h2.527zm-29.876-48.384h-2.527v377.526h2.527zm-29.877 191.88h-2.526v168.205h2.526zm-29.871-26.222h-2.527v321.463h2.527zm-29.876-24.125h-2.527v478.448h2.527zm-29.877 171.187h-2.526v309.001h2.526zm-29.871 126.638h-2.527v114.633h2.527zm-29.876-303.946h-2.527v687.779h2.527zm-29.877 179.196h-2.527v234.243h2.527zM92.15 790.512h-2.526V1259h2.527V790.512zm-29.875 45.08h-2.527v473.468h2.527zm-29.872-13.665h-2.527v309.003h2.527z"
        }
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
