import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Typography } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState(["Nigeria"]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  return (
    <div className={styles.container}>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue={""}
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="">Nigeria</option>

          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <Typography variant="caption" display="block" gutterBottom align="center">
        - covidstories.herokuapp.com
      </Typography>
    </div>
  );
};

export default CountryPicker;
