import React from 'react';

export enum InputTypes {
  BUTTON = 'button',
  COLOR = 'color',
  DATE = 'date',
  DATETIME_LOCAL = 'datetime-local',
  EMAIL = 'email',
  NUMBER = 'number',
  PASSWORD = 'password',
  TELEPHONE = 'tel',
  TEXT = 'text',
  TIME = 'time',
  URL = 'url',
  WEEK = 'week',
}
export interface IInputProps {
  type: InputTypes;
  label: string;
  placeholder: string;
  value: string | number;
  onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classNames?: string[];
  required: boolean;
  width?: string;
  height?: string;
}
