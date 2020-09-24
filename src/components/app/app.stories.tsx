import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import App, { AppPropsType } from './app';

export default {
  components: App,
  title: 'App',
} as Meta;

const Template: Story<AppPropsType> = args => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hello World!!!',
};
