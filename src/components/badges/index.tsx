interface BadgeProps {
    icon?: string;
    value: string;
    variant: 'success' | 'warning' | 'danger' | 'info';
  }
  
  const getVariantStyles = (variant: BadgeProps['variant']): string => {
    switch (variant) {
      case 'success':
        return 'bg-success text-white';
      case 'warning':
        return 'bg-warning text-white';
      case 'danger':
        return 'bg-danger text-white';
      case 'info':
        return 'bg-info text-white';
      default:
        return ''; // You might want to handle this case or provide a default style
    }
  };
  
  const Badge: React.FC<BadgeProps> = ({ icon, value, variant }) => {
    const variantStyle = getVariantStyles(variant);
  
    return (
      <div className={`p-1 text-xs w-fit self-end flex items-center gap-1 ${variantStyle} rounded-sm text-center`}>
        {icon && <i className={`fi fi-rr-${icon} mt-1`}></i>}
        <span>{value}</span>
      </div>
    );
  };
  
  export default Badge;
  