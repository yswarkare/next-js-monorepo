const InputUI = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center min-h-screen py-2'>
      <h1 className="text-center text-white text-2xl">
        SignUp Page
      </h1>
      <label htmlFor="username" className="">Username</label>
      {/* <input className="py-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" name="username" id="username" value={user.username} placeholder="username" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} /> */}

      

      <label htmlFor="email" className="">Email</label>
      {/* <input className="py-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="email" name="email" id="email" value={user.email} placeholder="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} /> */}
      

      <label htmlFor="password" className="">Password</label>
      {/* <input className="py-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" name="password" id="password" value={user.password} placeholder="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /> */}
    </div>
  );
}

export default InputUI;
