import {Bell} from 'lucide-react'
const userPIC = './avatar.svg'
const Profile = () => {

  const notificationCount = 15;
  return (
    <div className="relative">
      <button className="flex items-center space-x-2 relative">
        {/* Avatar container */}
        <div className="relative">
          <img
            src={userPIC}
            alt="avatar"
            className="w-10 h-10 rounded-full mt-5 mx-3 border-2 border-gray-600"
          />
          {/* Notification badge */}
          <span> <Bell size={30} className='absolute top-8 right-30'/></span>
          {notificationCount > 0 && (
            
            <span className="absolute top-8 right-26 transform -translate-x-1/2 -translate-y-1/2  text-white text-xs bg-green-400 font-bold rounded-full w-5 h-5 flex items-center justify-center">
             {notificationCount}
            </span>
          )}
        </div>

        <span className="hidden md:inline text-gray-500 mt-5 font-semibold">John</span>

      </button>

      
    </div>
  );
};

export default Profile;
