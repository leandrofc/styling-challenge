import { ButtonProps } from "../Button/Button.types";
import { FirmFactsCardProps } from "../FirmFactsCard/FirmFactsCard.types";

export type FirmFactsProps = {
    buttonProps: ButtonProps,
    cardProps?: Partial<FirmFactsCardProps>,
    isTwoRows?: boolean,
    index: number,
}[];

export type FirmFactsComponentProps = {
    data: FirmFactsProps;
};