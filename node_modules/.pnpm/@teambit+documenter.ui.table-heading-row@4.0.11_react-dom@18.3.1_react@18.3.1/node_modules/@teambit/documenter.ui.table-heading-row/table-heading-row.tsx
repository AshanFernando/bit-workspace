import React from 'react';
import classNames from 'classnames';
import { Grid, GridProps } from '@teambit/base-ui.layout.grid-component';
import { HeadingColumn } from '@teambit/documenter.ui.table-heading-column';
import styles from './table-heading-row.module.scss';

export type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // TODO - export Grid ColProps and use here

export type HeadingRowProps = {
  /**
   * array of strings to be displayed in the title row
   */
  headings: string[];
  /**
   * number of columns in the row
   */
  colNumber: ColNumber;
  /**
   * display mobile styles
   */
  isListView?: boolean;
} & GridProps;

export function HeadingRow({
  headings,
  colNumber,
  isListView = false,
  className,
  ...rest
}: HeadingRowProps) {
  return (
    <Grid
      {...rest}
      col={colNumber}
      className={classNames(
        styles.titleRow,
        { [styles.hide]: isListView },
        className
      )}
    >
      {headings.map((title: string) => {
        if (title === 'required') return null;
        return (
          <HeadingColumn key={title} className={styles.titleCol}>
            {title}
          </HeadingColumn>
        );
      })}
    </Grid>
  );
}
