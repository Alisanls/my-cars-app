function Header({ title }) {
  return (
    <header className="cars-header">
      <img
        src="https://prod.cloud.rockstargames.com/crews/sc/1866/38009665/publish/emblem/emblem_512.png"
        alt="rent-a-Mergedes"
      />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
