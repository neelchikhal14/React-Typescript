export enum ButtonVariant {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
}

export enum VariantClasses {
  VARIANT_PRIMARY = ' bg-cyan-500 text-white ',
  VARIANT_SUCCESS = ' bg-green-500 text-white ',
  VARIANT_DANGER = ' bg-red-500 text-white ',
}

export interface IButtonProps {
  onClickFn: () => void;
  children: string | JSX.Element;
  variant: ButtonVariant.PRIMARY | ButtonVariant.SUCCESS | ButtonVariant.DANGER;
  classNames?: string[];
  label: string;

  width: string;
  height: string;
  fontSize: string;
  disabled: boolean;
}
