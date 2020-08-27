import React, { useState, useEffect } from "react";

const Project = () => {
  const [dataGit, setDataGit] = useState([]);

  async function fetchData() {
    const url = "https://api.github.com/users/ro199/repos";
    const res = await fetch(url);
    res
      .json()
      .then((res) => setDataGit(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Estas es la seccion de projectos {JSON.stringify(dataGit)}</div>;
};

export default Project;
