import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/atoms/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    children: <div>HALO BUTTON</div>,
    loading: false,
    size: 'medium',
    variant: 'primary'
  },
};