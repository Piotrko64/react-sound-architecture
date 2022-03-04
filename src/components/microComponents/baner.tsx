const Baner = (props: { image: string; title: string }) => {
    return (
        <div className="baner" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="baner__title ">{props.title}</div>
        </div>
    );
};

export default Baner;
