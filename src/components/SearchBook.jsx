import React from 'react'

const SearchBook = () => {
  return (
    <div>
        <div className="container">
            <center><h1><b>SEARCH BOOK</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-x-12 col-xxl-12">
                    <label htmlFor="" className="form-label">BOOK TITLE</label>
                    <input type="text" className="form-control" />
                    <br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-x-12 col-xxl-12">
                    <center><button className="btn btn-warning">SEARCH</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBook