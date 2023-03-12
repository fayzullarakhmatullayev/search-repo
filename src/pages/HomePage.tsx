import SearchComponent from "../components/RepoSearch";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import { RootState } from "../store";
import { increment, decrement, incrementByAmount } from "../store/slices/counter.slice";

const HomePage: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetPokemonByNameQuery("clefairy");
  return (
    <div className="container">
      <h2 className="title">GitHub repo Search</h2>
      <SearchComponent />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <div className="card">
        <h2>Count: {count.value}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
      </div>
    </div>
  );
};

export default HomePage;
