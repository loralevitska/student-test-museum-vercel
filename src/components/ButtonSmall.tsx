/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import './ButtonSmall.scss';

export const ButtonSmall = (
  {
    text, color, textColor, borderColor, children,
  }: {
    text: string,
    color: string,
    textColor: string,
    borderColor: string,
    // eslint-disable-next-line react/require-default-props
    children?: ReactNode,
  },
) => {
  return (
    <button
      className="btn-s"
      style={
        {
          backgroundColor: color,
          border: `1px solid ${borderColor}`,
          color: textColor,
        }
      }
      type="button"
    >
      <span className="btn-span-s">
        {text}
      </span>
      {children}
    </button>
  );
};
