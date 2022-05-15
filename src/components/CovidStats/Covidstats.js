import React from "react";
import styles from "./covidstats.css";
import { Cards, Countrypicker, Charts } from "./components";
import { fetchData } from "../../api/index";
import { Typography } from "@material-ui/core";
import Footers from "./components/Footers";

class Covidstats extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

    // set the state
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Typography align="justify" gutterBottom={false} variant="h4">
          Covid-Stats
        </Typography>
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <div className="Footer">
          <Footers />
        </div>
      </div>
    );
  }
}

export default Covidstats;
