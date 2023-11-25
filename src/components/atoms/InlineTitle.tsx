interface InlineTitleProps {
    value: string,
    iconRight?: string,
    iconLeft?: string,
    variant?: 'success' | 'warning' | 'danger' | 'info';
    className?: string,
    size?: 'verySmall' | 'small' | 'medium' | 'large'; // Add size prop
}

export default function InlineTitle({value,iconRight,iconLeft,variant,className,size = 'verySmall'}:InlineTitleProps) {

    const sizeClasses = {
      verySmall: 'text-xs',
      small: 'text-lg',
      medium: 'text-xl',
      large: 'text-2xl',
    };

    const getColorVariant = (color: InlineTitleProps['variant']) => {
        switch (color) {
          case 'success':
            return 'text-success';
          case 'warning':
            return 'text-warning'
          case 'danger':
              return 'text-danger'
           case 'info':
             return 'text-info'
          default:
            return 'text-black';
        }
      }

    return (
        <div className={`flex items-center ${className}`}>
            {
              iconLeft && (
                <i className={`fi fi-rr-${iconLeft} ${sizeClasses[size]} ${getColorVariant(variant)} mt-1 me-3`}></i>
              )
            }
            <div className={`font-bold ${sizeClasses[size]} ${getColorVariant(variant)}`}>
              <h1>{value}</h1>
            </div>
            {
              iconRight && (
                <i className={`fi fi-rr-${iconRight} ${sizeClasses[size]} ${getColorVariant(variant)} mt-1 ml-3`}></i>
              )
            }
        </div>
    )
}