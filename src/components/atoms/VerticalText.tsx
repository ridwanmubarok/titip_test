interface VerticalTextProps {
    w: 4 | 6 | 8 | 12;
    label: string;
    value: string;
  }
  
  const getColSpanClass = (w: VerticalTextProps['w']): string => `col-span-${w}`;
  
  const VerticalText: React.FC<VerticalTextProps> = ({ w, label, value }) => {
    return (
      <div className={`${getColSpanClass(w)} flex flex-col gap-1`}>
        <span className="text-xs text-gray-400">{label}</span>
        <div className="text-xs text-black font-bold">{value}</div>
      </div>
    );
  };
  
  export default VerticalText;
  