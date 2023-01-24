import logo from "./logo.svg";
import TransactionData from "./viewData.json";
import "./App.css";

import Records from "./testing.json";

function App() {
  let DisplayData = TransactionData.map((info) => {
    return (
      info.data && info.data.map((content) => (
        <tr>
        <td>{content.id}</td>
        <td>{content.productID}</td>
        <td>{content.productName}</td>
        <td>{content.customerName}</td>
        <td>{content.transactionDate}</td>
        <td><button>View Detail</button></td>
      </tr>
      )
      )  
    );
  });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Transaction Date</th>
            <th scope="col">Details</th>
          </tr>
        </thead>

        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div>
  );
}

export default App;
