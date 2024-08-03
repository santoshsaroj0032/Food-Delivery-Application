import React from 'react'

export default function Card() {
    return (
        <div>  
            <div>
                <div className="card mt-3 " style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/id/1389161234/photo/chilli-mushroom-indian-snack-food.jpg?s=612x612&w=0&k=20&c=ULd9M--SV7IKWlWk5-QUlEGn9_kYRz3EqMZX5cVhq-U=" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a Card Item .</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  6 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100   bg-success rounded' >

                                <option value="half">Half</option>
                                <option value="full">Full</option>

                            </select>

                            <div className='d-inline h-100 fs-5'>
                                Total Price:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
