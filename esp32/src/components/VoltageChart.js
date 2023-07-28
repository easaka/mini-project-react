import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Line} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


const VoltageChart = () => {
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
const labels = ['10', '20', '30', '40', '50', '60', '70','80','90','100'];
const data = {
  labels,
  datasets: [
    {
      label: 'Voltage',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
  return (
<Line options={options} data={data}
className='w-96'
/>
  )
}

export default VoltageChart
