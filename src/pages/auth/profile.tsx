import { UserProfile } from "@clerk/clerk-react";

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <UserProfile path="/profile" routing="path" />
    </div>
  );
};

export default ProfilePage;
