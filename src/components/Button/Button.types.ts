export type ButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'default' | 'icon';
};