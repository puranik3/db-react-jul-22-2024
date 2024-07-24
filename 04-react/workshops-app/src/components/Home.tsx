import { useSelector } from "react-redux";

interface IHomeProps {
    title: string;
}

// Change in this for example - state.cart.item, will not cause re-render
const Home = (props: IHomeProps) => {
    // theme.value change will cause re-render
    const themeValue = useSelector((state: any) => state.theme.value);

    const classes =
        themeValue === "light" ? "bg-light text-dark" : "bg-dark text-light";

    return (
        <div className={"border border-primary p-5 " + classes}>
            <h1>{props.title}</h1>
            <hr />
            <p className="lead">
                Welcome to Workshops App. You can find details of nearby
                workshops here.
            </p>
        </div>
    );
};

export default Home;
