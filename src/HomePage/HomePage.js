// src\HomePage\HomePage.js
import React ,{useEffect, useState}from 'react';
import '../App.scss';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as d3 from 'd3';

ChartJS.register(ArcElement, Tooltip, Legend);

function HomePage() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/budget_data.json')  
            .then((response) => {
                const budgetItems = response.data.mybudget;

                const labels = budgetItems.map(item => item.title);
                const amounts = budgetItems.map(item => item.budget);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Budget',
                        data: amounts,
                        backgroundColor: [
                            '#4d5791', '#b4c6f0', '#e3e3e3', '#f4a261',
                            '#2a9d8f', '#e76f51', '#8d99ae', '#ff6b6b'
                        ],
                    }]
                });

                renderD3Chart(amounts, labels);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const renderD3Chart = (amounts, labels) => {
        d3.select('#d3Chart').selectAll('*').remove();
        const width = 400;
        const height = 300;
        const barWidth = 50;
        const svg = d3.select('#d3Chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('rect')
            .data(amounts)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * (barWidth + 10))
            .attr('y', d => height - d)
            .attr('width', barWidth)
            .attr('height', d => d)
            .attr('fill', '#4d5791');

        svg.selectAll('text')
            .data(labels)
            .enter()
            .append('text')
            .attr('x', (d, i) => i * (barWidth + 10) + barWidth / 2)
            .attr('y', height - 5)
            .attr('text-anchor', 'middle')
            .attr('fill', '#000')
            .text(d => d);
    };
  return (
    <main className="center" id="main">
       
        <section className="page-area">
            
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
            
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
             
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
              
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
            <article>
          <h1>Budget Overview</h1>
          {chartData && <Pie data={chartData} />}
        </article>

        <article>
          <h1>D3.js Budget Chart</h1>
          <div id="d3Chart"></div>
        </article>
            
            
            
        </section>

    </main>
  );
}

export default HomePage;
