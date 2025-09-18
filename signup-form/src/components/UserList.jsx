import React from 'react'

const UserList = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-8 mt-8 text-center">Existing Users<i className="fa fa-user mr-2 px-4"></i></h1>
        <p className='px-8 py-2'>Name - Email</p>
        <ol>
            {/* Step 5: Fetch users from localStorage and display them */}
            {JSON.parse(localStorage.getItem("users") || "[]").map((user, index) => (
                <li className='px-8 py-2' key={index}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default UserList
