// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../components/badges/index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const FirstStory: Story = {
  args: {
    variant: 'success',
    icon: 'time',
    value: 'HALO GUYS'
  },
};