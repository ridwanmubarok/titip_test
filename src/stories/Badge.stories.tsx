import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/badges/index';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Example: Story = {
  args: {
    variant: 'danger',
    icon: 'time',
    value: 'HALO GUYS'
  },
};