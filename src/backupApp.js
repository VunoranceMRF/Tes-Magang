import logo from "./logo.svg";
import TransactionData from "./viewData.json";
import "./App.css";

import Records from "./testing.json";

function App() {
  // var json = TransactionData;
  // var arr = [];
  // Object.keys(json).forEach(function(key) {
  //   arr.push(json[key]);
  // });
  // var result = <ul>{arr.map(item => 
  //   key={item.id} 
  //   productID={item.productID} 
  //   productName={item.productName}
  //   amount={item.amount}
  //   customerName={item.customerName}
  //   )}</ul>
  
  return (
    <div className="App">
      
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Details</th>
            {/* "productID": "10001",
         "productName": "Test 1",
         "amount": "1000",
         "customerName" : "abc",
         "status": 0,
         "transactionDate": "2022-07-10 11:14:52",
         "createBy" : "abc",
         "createOn" : "2022-07-10 11:14:52" */}
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>{
          TransactionData.map((transData, id) => {
            return(
              <tr className="box" key={id}>
                { transData.data && transData.data.map((dataContent) => (
                    <td key={ transData.data }>
                    { dataContent.id }
                    </td>
            )) }
              </tr>
            )
          })
        }</th>

<th> {
          TransactionData && TransactionData.map((transData, id) => {
            return(
              <tr className="box" key={id}>
                { transData.data && transData.data.map((dataContent) => (
                    <td key={ transData.id }>
                    { dataContent.productID }
                    </td>
            )) }
              </tr>
            )
          })
        }</th>

            <th>
            {
          TransactionData && TransactionData.map((transData, id) => {
            return(
              <tr className="box" key={id}>
                { transData.data && transData.data.map((dataContent) => (
                    <td key={ transData.id }>
                    { dataContent.productName }
                    </td>
            )) }
              </tr>
            )
          })
        }
            </th>
            <th> {
          TransactionData && TransactionData.map((transData, id) => {
            return(
              <tr className="box" key={id}>
                { transData.data && transData.data.map((dataContent) => (
                    <td key={ transData.id }>
                    { dataContent.customerName }
                    </td>
            )) }
              </tr>
            )
          })
        }</th>
            
            <th>
              <button>View Detail</button>
            </th>
          </tr>
        </tbody>
      </table>

      {/* {
        ProductData && ProductData.map( productDetail => {
          return(
            <div className="box">
              <strong>{ productDetail.productName }</strong>

              { productDetail.data.map( data => {
                return(
                  <div key={ productDetail.productID }>

                  { data.productName }

                  </div>
                )
              }) }
            </div>
          )
        })
      } */}
    </div>
  );
}

export default App;