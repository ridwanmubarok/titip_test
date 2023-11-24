// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import InlineTitle from '../components/atoms/InlineTitle';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InlineTitle> = {
  component: InlineTitle,
};

export default meta;
type Story = StoryObj<typeof InlineTitle>;

export const FirstStory: Story = {
  args: {
    icon: 'user',
    value: 'default',
    variant: 'success'
  },
};