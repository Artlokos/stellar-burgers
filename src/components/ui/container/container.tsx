import { FC, memo } from 'react';

import styles from './container.module.css';

import { TContainerUI } from './type';

export const ContainerUI: FC<TContainerUI> = memo(
  ({ title, titleStyle, children }) => (
    <>
      <div className={styles.center}>
        <div className={styles.header}>
          <h3 className={`${styles.title} text ${titleStyle}`}>{title}</h3>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
);
