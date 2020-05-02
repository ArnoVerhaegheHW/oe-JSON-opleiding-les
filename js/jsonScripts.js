const GetJSON = async (file) => {
      let response = await fetch(file);
      let data = await response.json();
      return data;
}



