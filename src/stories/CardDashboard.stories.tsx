import type { Meta, StoryObj } from '@storybook/react';
import CardDashboard from '../components/cards/CardDashboard';

const meta: Meta<typeof CardDashboard> = {
  component: CardDashboard,
};

export default meta;
type Story = StoryObj<typeof CardDashboard>;

export const Example: Story = {
  args: {
    icon: 'user',
    label: 'Total Vessel',
    size: 2,
  },
};