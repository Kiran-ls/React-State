 function Greeting(props) {
    return (
        <div>
            <h1>Greeting Component..</h1>
            <h3>Hello, {props.fname} </h3>
            <h3>Your ID is: {props.myid} </h3>
        </div>
    )
}

export default Greeting;