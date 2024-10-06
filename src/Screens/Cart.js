import React from 'react';
// import trash from "../trash.svg";
export default function Cart() {
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
                <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col'># </th>
                            <th scope='col'>Name </th>
                            <th scope='col'>Quantity </th>
                            <th scope='col'> Option</th>
                            <th scope='col'>Amount </th>
                            <th scope='col'> </th>

                        </tr>

                    </thead>

                    <tbody>

                        {/* {data.map((food,index)=>(
     <tr>
        <th scope='row'>{index+1}</th>
        <td>{food.name}</td>
        <td>{food.qty}</td>
        <td>{food.size}</td>
        <td>{food.price}</td>
        <td> <button type='button' className='btn p-0'><img src={trash} onClick={()=> {dispatch({type:})} }/>  </td>
     </tr>


   ) ) } */}
                    </tbody>
                </table>

                {/* <div><h1 className='fs-2'> Total Price: {totalPrice}/-</h1></div> */}

            </div>
            <button className='btn bg-success mt-5'>Check Out</button>
        </div>
    )
}