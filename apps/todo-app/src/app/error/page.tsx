const Error = ({ message }: { message: string }) => {
  return (
    <div>
      <p className='text-500'>{message || '404 Page not found.'}</p>
    </div>
  );
}

export default Error;
