// Making the single page application
function Spa(){
    return (
        <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={
                {users: [{
                    name:     'abel',
                    email:    'abel@mit.edu',
                    password: 'secret',
                    balance:  100
                }]}}>
                <div className="container" style={{padding: "20px"}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount" component={CreateAccount} />
                    <Route path="/alldata" component={AllData} />
                </div>
            </UserContext.Provider>
        </div>
        </HashRouter>
    )    
}

// Rendering the navbar in the root
ReactDOM.render(<Spa/>, document.getElementById('root'));