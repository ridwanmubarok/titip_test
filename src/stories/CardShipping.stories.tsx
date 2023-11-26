import type { Meta, StoryObj } from '@storybook/react';
import CardShipping from '../components/cards/CardShipping';

const meta: Meta<typeof CardShipping> = {
  component: CardShipping,
};

export default meta;
type Story = StoryObj<typeof CardShipping>;

export const Example: Story = {
  args: {
    group_name: 'halo ini group name',
    id: 1,
  },
};