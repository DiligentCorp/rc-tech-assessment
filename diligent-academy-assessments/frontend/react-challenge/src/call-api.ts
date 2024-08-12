/**
 * Calls API with a specific route and a promise of the required resource.
 * @param route - eg. "heroes"
*/
export const callApi = async <T>(route: string): Promise<T> => {
  switch (route) {
    case "heroes":
      return fetchHeroes();
    default:
      throw new Error("Invalid route");
  }
};

const fetchHeroes = async <T>(): Promise<T> => {
  const heroes = [
    {
      id: 1,
      name: "Superman",
      available: false,
    },
    {
      id: 2,
      name: "Batman",
      available: false,
    },
    {
      id: 3,
      name: "Spider-Man",
      available: false,
    },
    {
      id: 4,
      name: "Thor",
      available: true,
    },
    {
      id: 5,
      name: "Iron Man",
      available: true,
    },
    {
      id: 6,
      name: "Captain America",
      available: false,
    },
    {
      id: 7,
      name: "Wolverine",
      available: true,
    },
    {
      id: 8,
      name: "Black Panther",
      available: true,
    },
    {
      id: 9,
      name: "Aquaman",
      available: false,
    },
    {
      id: 10,
      name: "Wonder Woman ",
      available: false,
    },
    {
      id: 11,
      name: "The Flash",
      available: true,
    },
  ];

  const promise = new Promise<T>((resolve) => {
    setTimeout(() => {      
      resolve(heroes as T);
    }, 1000);
  });

  return promise;
};
