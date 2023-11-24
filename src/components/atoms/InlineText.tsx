interface InlineTextProps {
  width?: 'small' | 'medium' | 'large';
  label: string;
  value: string;
  color?: 'dark' | 'light'; 
}

export default function InlineText({ width = 'medium', label, value,color }: InlineTextProps) {
  const getWidthClass = (width: InlineTextProps['width']) => {
    switch (width) {
      case 'small':
        return 'w-[40px]';
      case 'medium':
        return 'w-[80px]';
      case 'large':
        return 'w-[160px]';
      default:
        return ''; // Default width, or you can throw an error if needed
    }
  };

  const getColorVariant = (color: InlineTextProps['color']) => {
    switch (color) {
      case 'dark':
        return 'text-white';
      case 'light':
        return 'text-black'
      default:
        return 'text-white';
    }
  }

  return (
    <div className="flex items-center">
      <span className={`${getWidthClass(width)} ${getColorVariant(color)} text-xs`}>{label}</span>
      <span className={`me-3 ${getColorVariant(color)}`}>:</span>
      <span className={`text-xs ${getColorVariant(color)} font-semibold`}>{value}</span>
    </div>
  );
}
