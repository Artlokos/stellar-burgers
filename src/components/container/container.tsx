import { FC, memo } from 'react';
import { useState } from 'react';

import { TContainer } from './type';
import { ContainerUI } from '../ui/container';

export const Container: FC<TContainer> = memo(({ title, children }) => {
  const [titleStyle, setTitleStyle] = useState('text_type_main-large');

  return (
    <>
      <ContainerUI title={title} titleStyle={titleStyle} children={children} />
    </>
  );
});
