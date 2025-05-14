import React from 'react'

interface UserPageProps {
  params: {
    user: string;
  };
}

const User = async ({ params }: UserPageProps) => {
  const { user } = params;
  console.log(user);
  return (
    <div>who is {user}?</div>
  );
};

export default User