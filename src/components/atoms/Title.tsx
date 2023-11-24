interface TitleProps {
    size?: 'small' | 'medium' | 'large'; // Add size prop
    value: string;
    color?: 'dark' | 'light'; 
  }
  
  export default function Title({ size = 'small',  value,color }: TitleProps) {
    const sizeClasses = {
        small: 'text-lg',
        medium: 'text-xl',
        large: 'text-2xl',
      };
  
    const getColorVariant = (color: TitleProps['color']) => {
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
        <div className={`font-bold ${sizeClasses[size]} ${getColorVariant(color)}`}>
            <h1>{value}</h1>
        </div>
    );
  }
  