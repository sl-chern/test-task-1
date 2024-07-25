export type ButtonProps = {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}): React.ReactElement => {
  return (
    <button
      className={`rounded py-2 px-5 bg-emerald-400 text-white max-w-fit ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
