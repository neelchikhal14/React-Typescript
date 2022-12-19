import React from 'react';
import { IButtonProps, ButtonVariant, VariantClasses } from './types';

const createClassNames = (
  variant: ButtonVariant,
  width: string,
  height: string,
  fontSize: string,
  classNamesFromProps?: string[]
): string => {
  let classList: string = '';

  // add height and width
  classList += ` ${width} ${height} `;

  // add font size
  classList += ` ${fontSize} `;

  // add class as per variant
  if (variant === ButtonVariant.PRIMARY) {
    classList += VariantClasses.VARIANT_PRIMARY;
  } else if (variant === ButtonVariant.SUCCESS) {
    classList += VariantClasses.VARIANT_SUCCESS;
  } else {
    classList += VariantClasses.VARIANT_DANGER;
  }

  // extra classes from dev
  classNamesFromProps?.forEach((cl: string) => {
    classList += cl;
  });

  return classList;
};

const Button = (props: IButtonProps) => {
  const finalClassNames: string = createClassNames(
    props.variant,
    props.width,
    props.height,
    props.fontSize,
    props?.classNames
  );
  return (
    <label>
      {props.label}
      <button
        onClick={props.onClickFn}
        className={finalClassNames}
        disabled={props.disabled}
      >
        Button
      </button>
    </label>
  );
};

export default Button;
