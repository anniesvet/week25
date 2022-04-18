import './App.css';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
Chart.register(
  Tooltip, Title, ArcElement, Legend
);

const data = {
  datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'red',
        'blue',
        'yellow'
      ]
  },
],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ]
};

function App() {
  return (
    <div className="App" style={{width: '30%', height: '30%'}}>
    <Pie data={data}/>
    </div>
  );
}

export default App;
