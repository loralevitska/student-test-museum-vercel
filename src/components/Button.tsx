/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import './Button.scss';

export const Button = (
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
    // eslint-disable-next-line react/react-in-jsx-scope
    <button
      className="btn"
      style={
        {
          backgroundColor: color,
          border: `1px solid ${borderColor}`,
          color: textColor,
        }
      }
      type="button"
    >
      <span className="btn-span">
        {text}
      </span>
      {children}
    </button>
  );
};
