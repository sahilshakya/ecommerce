export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d0be2c14demsh7972ed807166781p1b1706jsnf1151f6bc369",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
