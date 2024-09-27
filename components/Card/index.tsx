import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface CardProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
    className?: string;
    children: ReactNode;
}

export const Card = (props: CardProps) => {
    const { width, height, backgroundColor, className, children } = props;

    return (
        <>
            <div
                className={cx(styles.cardContainer, className)}
                style={{ width, height, backgroundColor }}
            >
                {children}
            </div>
        </>
    );
};
