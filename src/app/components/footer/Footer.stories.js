import React from 'react';
import Footer from './Footer';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

export default {
  title: 'Footer',
  component: Footer,
};

export const Link = () => <Footer />