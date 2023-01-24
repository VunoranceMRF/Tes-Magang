import "./AddData.css";

function AddData(){
    return(
        <div className="AddData">
            <form name="Add Data">
                Product ID:
                <input type="text" placeholder="Input Product ID"></input>
                <br></br>
                Product Name:
                <input type="text" placeholder="Input Product Name"></input>
                <br></br>
                Customer Name:
                <input type="text" placeholder="Input Customer Name"></input>
                <br></br>
                Transaction Date:
                <input type="datetime-local" ></input>
                <br></br>

            </form>
        </div>
    );
}

export default AddData;