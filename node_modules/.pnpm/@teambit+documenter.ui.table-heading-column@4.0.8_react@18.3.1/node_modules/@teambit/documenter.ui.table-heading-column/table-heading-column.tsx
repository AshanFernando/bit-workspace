import React from 'react';
import classNames from 'classnames';
import styles from './table-heading-column.module.scss';

export type HeadingColumnProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Title heading column for using in the table heading
 */
export function HeadingColumn({
  children,
  className,
  ...rest
}: HeadingColumnProps) {
  return (
    <div className={classNames(styles.headingColumn, className)} {...rest}>
      <div className={classNames(styles.title)}>{children}</div>
    </div>
  );
}
