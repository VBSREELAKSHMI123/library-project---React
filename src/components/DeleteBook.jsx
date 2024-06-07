import React from 'react'
import Navbar from './Navbar'

const DeleteBook = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <center><h1><b>REMOVE BOOK</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">BOOK TITLE</label>
                    <input type="text" className="form-control" />
                    <br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-danger">REMOVE</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBook