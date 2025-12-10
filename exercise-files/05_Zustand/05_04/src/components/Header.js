const Header = ({ count }) => {
  return (
    <div className="p-4">
      <h1>Todos</h1>
      <p>{count}</p>
    </div>
  );
};

export default Header;
