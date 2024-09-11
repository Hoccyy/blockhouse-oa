'use client'
import Section from './Section';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import styles from './Content.module.css';
import { useEffect, useState } from 'react';
import CandlestickChart from './CandlestickChart';

import {
  fetchCandlestickData,
  fetchLineChartData,
  fetchBarChartData,
  fetchPieChartData,
} from "../utils/api";


const Content = () => {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lineChart = await fetchLineChartData();
        const candlestick = await fetchCandlestickData();
        const barChart = await fetchBarChartData();
        const pieChart = await fetchPieChartData();
        
        setLineChartData(lineChart);
        setCandlestickData(candlestick);
        setBarChartData(barChart);
        setPieChartData(pieChart);
      } catch (error) {
        console.error('~Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);


  if (lineChartData.length == 0 || barChartData.length == 0 || pieChartData.length == 0 || candlestickData.length == 0) {
    return (
      <div className={styles.container}>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
        <Section children={<LineChart data={lineChartData} />} title='Sales' subText='13% Growth over time'/>
        <Section children={<BarChart data={barChartData}/>} title='Subscriptions' subText='13% Growth over time'/>
        <Section children={<PieChart data={pieChartData}/>} title='Downloads' subText='13% Growth over time'/>
        <Section children={<CandlestickChart data={candlestickData}/>} title='Clicks' subText='More new clicks generated'/>
    </div>
  );
};

export default Content;
