import { ReactNode } from "react";

export type FirmFactsCardProps = {
    variant?: 'default' | 'border';
    children: ReactNode;
    disabled?: boolean;
    childrenPosition?: 'top' | 'center';
};