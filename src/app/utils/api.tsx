// Chart data fetched here
export async function fetchCandlestickData() {
    const response = await fetch('http://127.0.0.1:8000/api/candlestick-data/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}
  
  export async function fetchLineChartData() {
    const response = await fetch('http://127.0.0.1:8000/api/line-chart-data/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
  }
  
  export async function fetchBarChartData() {
    const response = await fetch('http://127.0.0.1:8000/api/bar-chart-data/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  
  export async function fetchPieChartData() {
    const response = await fetch('http://127.0.0.1:8000/api/pie-chart-data/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  