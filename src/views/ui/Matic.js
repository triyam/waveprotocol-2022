import React from 'react'

const Matic = () => {
  return (
    <div>

<hr className="border-light m-0" />
            <div className="card-body">
              <div className="form-group">
                <label className="form-label">Username</label>
                <input type="text" className="form-control mb-1" defaultValue="nmaxwell" />
              </div>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" defaultValue="Nelle Maxwell" />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-control mb-1" defaultValue="nmaxwell@mail.com" />
                <div className="alert alert-warning mt-3">
                  Your email is not confirmed. Please check your inbox.<br />
                  <a href="javascript:void(0)">Resend confirmation</a>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" defaultValue="Company Ltd." />
              </div>
            </div>

    </div>
  )
}

export default Matic