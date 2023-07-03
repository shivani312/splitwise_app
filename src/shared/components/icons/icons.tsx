import React from "react";

interface IProps {
    className?: string;
    onClick?: () => void;
}

export const CurveArrowIcon: React.FC<IProps> = (props) => (
    <svg viewBox="0 0 10 18" className={props.className || ""}>
        <path d="M10 9L0.999469 18L-8.74846e-08 15.9986C-8.74846e-08 15.9986 6.00106 12.6003 6.00106 9C6.00106 5.39969 -6.39716e-07 2.00141 -6.39716e-07 2.00141L0.999468 -4.36882e-08L10 9Z" />
    </svg>
);
