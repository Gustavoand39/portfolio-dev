interface Props {
  dataTip: string;
  children: React.ReactNode;
}

export const ToolTip = ({ dataTip, children }: Props) => {
  return (
    <div
      className="tooltip tooltip-info font-semibold cursor-pointer rounded-lg p-2
      bg-white dark:bg-black hover:scale-110 transition-all duration-300"
      data-tip={dataTip}
    >
      {children}
    </div>
  );
};
