interface IHomeProps {
    title: string
}

const Home = ( props : IHomeProps ) => {
    return (
        <div className="border border-primary p-5">
            <h1>{props.title}</h1>
            <hr />
            <p className="lead">
                Welcome to Workshops App. You can find details of nearby workshops here.
            </p>
        </div>
    );
}
 
export default Home;