import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Progress', 'Complete', 'Pending',],
    datasets: [
      {
        label: 'Progress / Status',
        data: [12, 19, 3],
        backgroundColor: [
          '#38bdf8',
          '#4ade80',
          '#facc15',
        ],
        borderColor: [
          '#38bdf8',
          '#4ade80',
          '#facc15',
        ],
      },
    ],
  };

export default function PieChart() {
    return <Pie data={data} />;
}