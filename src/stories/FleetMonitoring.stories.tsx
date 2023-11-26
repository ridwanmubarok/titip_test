import type { Meta, StoryObj } from '@storybook/react';
import FleetMonitoring from '../components/contents/FleetMonitoring';

const meta: Meta<typeof FleetMonitoring> = {
  component: FleetMonitoring,
};

export default meta;
type Story = StoryObj<typeof FleetMonitoring>;

export const Example: Story = {
  args: {
    onConditionalDetail: (id) => alert(id),
    lists: [
        {
            id: 1,
            name: 'Halo',
            created_at: '2023-11-26T08:24:36.000000Z',
            updated_at: '2023-11-26T08:24:36.000000Z',
            user_id: 1
        }
    ],
  },
};