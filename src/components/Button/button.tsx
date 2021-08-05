import React ,{ Fc } from 'react';
import classNames from 'classnames';
import { boolean, string } from 'yargs';
import { FC } from '../../../../../../Library/Caches/typescript/4.3/node_modules/@types/react';

export type ButtonSize = 'lg' |  'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

export const Button: FC<BaseButtonProps> = (props) => {
    const {
        disabled,
        size,
        btnType,
        children,
        href
    } = props;

    return (
        <button>
            {
                children
            }
        </button>
    )
}
export default Button;

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

