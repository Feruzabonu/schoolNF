import "../css/Error.css";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";
import { url } from "../host/Host";

function SelectMap() {
  const [cities, setCities] = useState([]);
  const [neighborhoods, setNeighborhood] = useState([]);
  const [bool, setBool] = useState([true, false, false]);
  const [data, setData] = useState([]);
  const [school, setSchool] = useState([]);
  const [AllProvinces, setAllProvinces] = useState([]);

  useEffect(() => {
    axios.get(`${url}/region/`).then((res) => {
      setData(res.data);
      setAllProvinces([...new Set(res.data.map((item) => item.address))]);
    });
    axios.get(`${url}/school/`).then((res) => {
      setSchool(res.data);
    });

    setCities([...new Set(data.map((item) => item.region_name))]);
    setNeighborhood([...new Set(data.map((item) => item.nomi))]);
  }, []);

  const handleProvinceChange = (value) => {
    var g = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].address === value) {
        g.push(data[i]);
      }
    }
    setCities([...new Set(g.map((item) => item.region_name))]);
    setBool([true, true, false]);
  };
  const handleCityChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].region_name === value) {
        console.log(data[i]);
        for (let j = 0; j < school.length; j++) {
          if (data[i].id === school[j].region) {
            g.push(school[j]);
          }
        }
      }
    }
    console.log(g);
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].region_name === value) {
    //     g.push(data[i]);
    //   }
    // }
    setNeighborhood(g);
    //setNeighborhood([...new Set(g.map((item) => item.nomi))]);
    setBool([true, true, true]);
  };
  const handleNeighborhoodsChange = (value) => {
    window.location.href = value;
  };
  return (
    <div className="map_select">
      <h1>O'zingizga kerakli maktabni tanlang</h1>
      <div className="map_for_select">
        <div className="map_item">
          {bool[0] ? (
            <>
              <h4>Viloyatlar</h4>
              <ul className="school_ul1">
                {AllProvinces.map((province) => (
                  <li key={province}>
                    <Button
                      type="primary"
                      onClick={() => handleProvinceChange(province)}
                    >
                      {province}
                    </Button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            ""
          )}

          {bool[1] ? (
            <>
              <h4>Tumanlar</h4>
              <ul className="school_ul2">
                {cities.map((item, index) => (
                  <li key={index}>
                    <Button
                      type="primary"
                      onClick={() => handleCityChange(item)}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
          {bool[2] ? (
            <>
              <h4>Maktablar</h4>
              <ul className="school_ul3">
                {neighborhoods.map((item, index) => (
                  <li key={index}>
                    <Button
                      type="primary"
                      onClick={() => handleNeighborhoodsChange(item.admin)}
                    >
                      {`${item.school_number}-maktab `}
                    </Button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectMap;
