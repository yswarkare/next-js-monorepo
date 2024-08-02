const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>User Profile Page</h2>
      <hr />
      <p>user profile id {params.id}</p>
    </div>
  );
}

export default UserProfile;
