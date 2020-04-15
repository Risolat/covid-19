import React from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component{
  state = {
    data: {},
    country: '',
  }

 async componentDidMount(){
    const fetchedData = await fetchData();
    
    this.setState({data: fetchedData});
  }
handleCountryChange = async (country) => {
  const fetchedData = await fetchData(country);

  this.setState({data: fetchedData, country: country});
}
  render(){
    const { data, country } = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.img} src="https://i.ibb.co/7QpKsCX/image.png" width="200" height="50" alt="Covid-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/> 
      </div>
    )
  }
}
export default App;