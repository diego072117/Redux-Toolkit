import "./Module.scss";

const users: {
  id: number;
  name: string;
  email: string;
  github: string;
}[] = [
  {
    id: 1,
    name: "Diego Parra",
    email: "parracalderond9@gmail.com",
    github: "diego072117",
  },
  {
    id: 2,
    name: "Santiago Carreño",
    email: "parracalderond9@gmail.com",
    github: "santicarreno13",
  },
  {
    id: 3,
    name: "Johan Avendaño",
    email: "parracalderond9@gmail.com",
    github: "Johan505",
  },
];

export const ListOfUsers = () => {
  return (
    <>
      <div className="container-card">
        {users.map((item) => (
          <div className="container-card" key={item.id}>
            <img
              className="img-github"
              src={`https://unavatar.io/github/${item.github}`}
              alt="No font"
            />

            <div className="user-information">
              <p className="name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
