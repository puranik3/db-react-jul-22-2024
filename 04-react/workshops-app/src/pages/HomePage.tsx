import Home from '../components/Home';

interface IHomePageProps {
    title: string,
}

// sfc
const HomePage = ( props : IHomePageProps ) => {
    return (
        <Home title={props.title} />
    );
}
 
export default HomePage;