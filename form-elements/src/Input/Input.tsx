import React from 'react';
import { IInputProps } from './types';
/**
 * type
 * label
 * placeholder
 * value
 * onChange
 * classNames?
 * required
 * width?
 * height?
 *
 */
const Input = (props: IInputProps) => {
  const createClassList = (
    classNames?: string[],
    width?: string,
    height?: string
  ): string => {
    let classes: string = '';

    // add width and height if they exists
    if (width) classes += ` ${width} `;
    if (height) classes += ` ${height} `;

    // add extra classes from dev
    classNames?.forEach((cl: string) => {
      classes += ` ${cl} `;
    });

    return classes;
  };
  const finalClassList: string = createClassList(
    props.classNames,
    props.height,
    props.width
  );
  return (
    <div>
      <label>
        {props.label}
        {props.required ? '*' : ''}
        <input
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          onChange={props.onChangeFn}
          type={props.type}
          className={finalClassList}
        />
      </label>
    </div>
  );
};

export default Input;
