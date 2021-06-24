import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export async function getData() {
  try {
    const { data } = await axios.get(url);
    // const { data } = await axios.get(
    //   "https://pomber.github.io/covid19/timeseries.json"
    // );
    const { entities, world, ids } = data;

    return { data: entities, ids, world };
  } catch (error) {
    console.log(error);
  }
}
