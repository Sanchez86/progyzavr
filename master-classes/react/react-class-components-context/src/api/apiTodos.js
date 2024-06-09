class GetterTodos {
  static BASE_URL = "https://jsonplaceholder.typicode.com/";

  static getTodos = async () => {
    try {
      const response = await fetch(this.BASE_URL + "/todos");

      if (!response.ok) {
        throw new Error("FETCH ERRROR");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
}

export default GetterTodos;
