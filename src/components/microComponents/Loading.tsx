const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__stripes">
                <div className="loading__stripe loading__stripe--first"></div>
                <div className="loading__stripe loading__stripe--second"></div>
                <div className="loading__stripe loading__stripe--third"></div>
            </div>
        </div>
    );
};

export default Loading;
