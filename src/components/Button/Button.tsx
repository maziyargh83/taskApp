import clsx from "clsx";
import { PropsWithChildren } from "react";
import { colorPropertyEnum } from "~/core/Themes/types/types";
interface ButtonProps {
  onClick?: () => void;
  className?: string;
  theme?: keyof typeof colorPropertyEnum;
}
export const Button = ({
  children,
  onClick,
  className,
  theme = "tertiary",
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `flex-1 border focus:outline-0 p-3 active:shadow active:shadow-${theme} rounded-md text-${theme} border-${theme} hover:bg-${theme} hover:text-light`,
        {
          [className!]: !!className,
        }
      )}
    >
      {children}
    </button>
  );
};
