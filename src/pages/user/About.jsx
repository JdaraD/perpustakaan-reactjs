const About = () => {
  function sponsorship() {
    const sponsorships = [];
    for (let i = 0; i < 20; i++) {
      sponsorships.push(
        <div
          key={i}
          className="shrink w-16 h-18 bg-gray-300 rounded-md animate-pulse shadow-md"
        ></div>,
      );
    }
    return sponsorships;
  }

  return (
    <div className="flex justify-center w-full h-full p-4">
      <div className="flex flex-col bg-white w-[80%] h-auto rounded-md shadow-md gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full"></div>
          <h1 className="font-bold text-2xl">Word BookPedia</h1>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          cupiditate laborum aliquam repellat atque laudantium amet dolorem,
          explicabo soluta nostrum cumque, fugit commodi earum incidunt! Vero,
          voluptates dignissimos! Eos, necessitatibus. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Blanditiis error deleniti iusto,
          nemo laborum optio vitae quia in voluptatem architecto soluta at
          consectetur adipisci aut, non dicta similique recusandae aliquam.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          distinctio deleniti quos nostrum non nisi, placeat ullam eveniet
          atque, aspernatur nihil, repellat veritatis! Inventore, vero ducimus.
          Dolorum quo voluptatibus architecto. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis voluptatum vel velit
          dignissimos, natus facilis! Magnam, beatae nisi? Dolore deserunt,
          magnam odio veniam consequuntur voluptatum dolorem necessitatibus
          nulla cum quasi.
        </p>
        <div className="flex flex-col justify-center w-full h-full items-center gap-4">
          <p className="text-xl font-bold capitalize">sponsorship</p>
          <div className="flex flex-wrap justify-center gap-4 w-full h-full">
            {sponsorship()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
