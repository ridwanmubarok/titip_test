interface InlineTitleProps {
    value: string,
    icon: string,
    variant: 'success' | 'warning' | 'danger' | 'info';
}

export default function InlineTitle({value,icon,variant}:InlineTitleProps) {

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
        <div className="flex items-center justify-between">
            <span className={`text-xs ${getColorVariant(variant)} `}>Place of dischange</span>
            <i className={`fi fi-rr-${icon} ${getColorVariant(variant)}`}></i>
        </div>
    )
}