// src\HomePage\HomePage.js
import React from 'react';
import '../App.css';

function HomePage() {
  return (
    <main class="center" id="main">
       
        <section class="page-area">
            
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
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </article>
            
            <article>
            <h1>D3.js Budget Chart</h1>
            <button class="randomize">Randomize Data</button>
            <svg id="d3Chart"></svg>
            </article>
            
        </section>

    </main>
  );
}

export default HomePage;
