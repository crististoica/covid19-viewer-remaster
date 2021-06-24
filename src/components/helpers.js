export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (day + "/" + month + "/" + year).toString();
};

export const formatChartData = (arr, keys) => {
  const newConfirmed = [];
  const newRecovered = [];
  const newDeaths = [];

  keys.forEach((key) => {
    newConfirmed.push(arr[key].newConfirmed);
    newRecovered.push(arr[key].newRecovered);
    newDeaths.push(arr[key].newDeaths);
  });

  return { newConfirmed, newRecovered, newDeaths };
};

export const reverseDate = (date) => {
  const info = date.split("/");
  return info[2] + "-" + info[1] + "-" + info[0];
};
