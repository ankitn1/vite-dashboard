import React from 'react'
import 
{BsCurrencyDollar, BsClipboard2Data, BsCashCoin, BsGraphUp}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 

function Home() {

    const data = [
        {
          name: 'Jan',
          Earning: 4000,
          Spending: 2400,
          
        },
        {
          name: 'Feb',
          Earning: 4800,
          Spending: 4368,
        },
        {
          name: 'Mar',
          Earning: 5200,
          Spending: 4500,
        },
        {
          name: 'Apr',
          Earning: 3780,
          Spending: 3908,
        },
        {
          name: 'May',
          Earning: 3690,
          Spending: 3741,
        },
        {
          name: 'Jun',
          Earning: 4132,
          Spending: 3984,
        },
        {
          name: 'July',
          Earning: 4490,
          Spending: 4256,
        },
        {
            name: 'Aug',
            Earning: 4090,
            Spending: 4120,
          },
          {
            name: 'Sep',
            Earning: 4951,
            Spending: 4557,
          },
          {
            name: 'Oct',
            Earning: 4700,
            Spending: 4750,
          },
          {
            name: 'Nov',
            Earning: 4954,
            Spending: 4300,
          },
          {
            name: 'Dec',
            Earning: 5490,
            Spending: 4300,
          },
      ];
      
  return (
    <main className='main-container'>
        <div className='main-title'>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Earning</h3>
                    <BsCurrencyDollar className='card_icon'/>
                </div>
                <h1>$198k</h1>
                <h4><span style={{color:"green"}}>↑37.8%</span> this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <BsClipboard2Data className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <h4><span style={{color:"red"}}>↓2%</span> this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance</h3>
                    <BsCashCoin className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <h4><span style={{color:"Red"}}>↓2% </span> this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Sales</h3>
                    <BsGraphUp className='card_icon'/>
                </div>
                <h1>$89k</h1>
                <h4><span style={{color:"green"}}>↑11%</span> this week</h4>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
              
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Earning" fill="#051b47" />
                <Bar dataKey="Spending" fill="#a32ac1" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <h4>ABC</h4>
                <Line type="monotone" dataKey="Earning" stroke="#051b47" activeDot={{ r: 8 }} />
                
                <Line type="monotone" dataKey="Spending" stroke="#a32ac1" />
                
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home