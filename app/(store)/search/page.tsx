async function Search({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = await searchParams;
  return <div>Searching for {query}</div>;
}

export default Search;
