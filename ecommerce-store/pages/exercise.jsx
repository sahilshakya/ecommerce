import NavBar from "@/components/NavBar";
import { exerciseOptions, fetchData } from "@/components/fetchData";
import React, { useEffect, useState } from "react";

const exercise = () => {
  const [search, setSearch] = useState("");
  // const [container, setContainer] = useState([]);
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div>
      <NavBar />
      <form>
        <input
          type="text"
          placeholder=""
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      list of exercise down here
    </div>
  );
};

export default exercise;
