// All Data function with the tie in to the database
function AllData(){
    // Making state variable to hold the data
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        // Fetch all accounts from the database API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });
    }, []);

    return(
        <>
        <h5>All Data in Database:</h5>
        {data}
        </>
    )
}