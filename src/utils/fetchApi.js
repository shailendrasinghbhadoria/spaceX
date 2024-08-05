import { useEffect, useState } from "react";

export const useFetchUpcoming = () => {

    const [upcomingLaunch, setUpcomingLaunch] = useState(null)

  const fetchData = async () => {
    const res = await fetch("https://api.spacexdata.com/v3/launches/upcoming");

    const jsonData = await res.json();

    console.log(jsonData);
    setUpcomingLaunch(jsonData)
  };


  useEffect(() => {
    fetchData();
  }, []);

  return upcomingLaunch
}

export const useFetchPast = () => {

    const [pastLaunch, setPastLaunch] = useState(null)

  const fetchData = async () => {
    const res = await fetch("https://api.spacexdata.com/v3/launches/past");

    const jsonData = await res.json();

    console.log(jsonData);
    setPastLaunch(jsonData)
  };


  useEffect(() => {
    fetchData();
  }, []);

  return pastLaunch
}


export const useFetchRocket = () => {

    const [rockets, setRockets] = useState(null)

  const fetchData = async () => {
    const res = await fetch("https://api.spacexdata.com/v3/rockets");

    const jsonData = await res.json();    
    setRockets(jsonData)
  };


  useEffect(() => {
    fetchData();
  }, []);

  return rockets
}


