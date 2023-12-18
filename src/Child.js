function Child(props){
    console.log("props",props)
    return(
        <h1>i m from child Component and my my anme is {props.data.name},and i m from</h1>
    )
}
export default Child;