// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import InlineText from '../components/atoms/InlineText';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InlineText> = {
  component: InlineText,
};

export default meta;
type Story = StoryObj<typeof InlineText>;

export const FirstStory: Story = {
  args: {
    color: 'dark',
    label: 'default',
    value: 'value default',
    width: 'large'
  },
};