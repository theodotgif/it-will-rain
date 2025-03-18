import classes from './Search.module.css';

interface SearchProps {
  query: string;
  setQuery: (newTerm: string) => void;
}

const Search = ({ query, setQuery }: SearchProps) => {
  // nit - Why the heck is this not called handleQueryChange? 🥲
  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <section className={classes.container}>
      {/* // This should have a label of some sort */}
      <input
        type="text"
        value={query}
        onChange={handleTermChange}
        className={classes.input}
      />
    </section>
  );
};

export default Search;
