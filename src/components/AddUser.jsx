import React from 'react'

const AddUser = () => {
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form action="">
                <div className="field">
                    <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Name'/>
                        </div>
                    </div>
                <div className="field">
                    <label className="label">Phone Number</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Phone Number'/>
                        </div> 
                    </div> 
                    <div className="field">
                    <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Email'/> 
                        </div> 
                    </div>
                    <div className="field">
                    <label className="label">Address</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Address'/> 
                        </div> 
                    </div>
                    <div className="field">
                        <button type='submit' className="button is-success">Save</button>
                </div>                  
            </form>
        </div>
    </div>
  )
}

export default AddUser
