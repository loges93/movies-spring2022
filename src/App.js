import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
            <p>Logan Riedell</p>
            <pre>{JSON.stringify(movies, null, 4)}</pre>
        </div>
    );
}

export default App;
