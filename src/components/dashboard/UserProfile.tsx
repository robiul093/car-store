// import { useAppSelector } from "../redux/hook";
import { useState } from "react";
import { useAppSelector } from "../../redux/hook";

export default function UserProfile() {
  const user = useAppSelector((state) => state.auth.user);
  const [isEditing, setIsEditing] = useState(false);

  // Static profile data (would normally come from Redux/API)
  const profileData = {
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    joinDate: "January 15, 2022",
    lastLogin: "2 hours ago",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    bio: "Premium member since 2022. Enjoys fast shipping and exclusive deals.",
    stats: {
      ordersCompleted: 24,
      totalSpent: 2845,
      reviewsWritten: 7,
      wishlistItems: 5,
    },
  };

  const [formData, setFormData] = useState({
    name: profileData.name,
    email: profileData.email,
    bio: profileData.bio,
  });

interface FormData {
    name: string;
    email: string;
    bio: string;
}

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

const handleInputChange = (e: InputChangeEvent): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: value,
    }));
};

  const handleSave = () => {
    // Here you would dispatch an action to update the profile
    setIsEditing(false);
    // dispatch(updateProfile(formData));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Profile Header */}
      <div className="bg-[#1e2939] p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-white ring-offset-2">
              <img src={profileData.avatar} alt="User avatar" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <p className="text-blue-100">{profileData.email}</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn btn-sm btn-outline btn-white hover:bg-white hover:text-[#1e2939]"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>
            <p className="mt-2 text-blue-100">{profileData.bio}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Member since {profileData.joinDate}
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Last login {profileData.lastLogin}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="md:w-[700px] mx-auto gap-6 p-6">
        {/* Left Column - Profile Form */}
        <div className="lg:col-span-2">
          {isEditing ? (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered h-24"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="btn bg-[#1e2939] hover:bg-[#17202d] text-white"
                >
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Full Name</span>
                  <span className="text-gray-900">{profileData.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Email</span>
                  <span className="text-gray-900">{profileData.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Member Since
                  </span>
                  <span className="text-gray-900">{profileData.joinDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Last Login</span>
                  <span className="text-gray-900">{profileData.lastLogin}</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">About</h3>
                <p className="text-gray-700">{profileData.bio}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Stats */}
        {/* <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Your Stats</h2>
          <div className="stats stats-vertical shadow bg-gray-50 w-full">
            <div className="stat">
              <div className="stat-figure text-[#1e2939]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="stat-title">Orders Completed</div>
              <div className="stat-value">
                {profileData.stats.ordersCompleted}
              </div>
              <div className="stat-desc">↑ 12% from last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-[#1e2939]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="stat-title">Total Spent</div>
              <div className="stat-value">${profileData.stats.totalSpent}</div>
              <div className="stat-desc">↑ 8% from last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-[#1e2939]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div className="stat-title">Reviews Written</div>
              <div className="stat-value">
                {profileData.stats.reviewsWritten}
              </div>
              <div className="stat-desc">↗︎ 3 new this month</div>
            </div>
          </div>

          
          <div className="card bg-blue-50 border border-blue-100">
            <div className="card-body p-4">
              <h3 className="font-medium text-blue-800 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Account Security
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Your account is protected with two-factor authentication.
              </p>
              <button className="btn btn-sm btn-ghost text-blue-800 mt-2 px-0">
                Update Security Settings →
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
