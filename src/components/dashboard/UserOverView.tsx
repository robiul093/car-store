// import { useAppSelector } from "../redux/hook";
import { useEffect, useState } from "react";
// import { useGetSingleUserOrderQuery } from "../../redux/features/order/orderApi";
import { useAppSelector } from "../../redux/hook";

export default function UserDashboardOverview() {
//   const userId = useAppSelector((state) => state.auth.user?.iat);
  const user = useAppSelector((state) => state.auth.user);
//   const { isLoading, isSuccess, data, error } = useGetSingleUserOrderQuery(userId);
  const [greeting, setGreeting] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning");
      setTimeOfDay("morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
      setTimeOfDay("afternoon");
    } else {
      setGreeting("Good evening");
      setTimeOfDay("evening");
    }
  }, []);

  // Static data for dashboard
  const stats = [
    {
      name: "Total Orders",
      value: 24,
      change: "+12%",
      icon: "📦",
      color: "bg-blue-500",
    },
    {
      name: "Pending",
      value: 3,
      change: "-1%",
      icon: "⏳",
      color: "bg-amber-500",
    },
    {
      name: "Completed",
      value: 21,
      change: "+15%",
      icon: "✅",
      color: "bg-green-500",
    },
    {
      name: "Total Spent",
      value: "$2,845",
      change: "+8%",
      icon: "💳",
      color: "bg-purple-500",
    },
  ];

//   const sessionMessages = {
//     morning: "Your morning productivity is 20% higher than average!",
//     afternoon: "You're on track to hit your daily goals. Keep it up!",
//     evening: "Perfect time to review your orders and plan for tomorrow.",
//   };

  const recentActivity = [
    { action: "Placed Order #ORD-7892", time: "Just now", icon: "🛒" },
    {
      action: "Reviewed 'Premium Car'",
      time: "2 hours ago",
      icon: "⭐",
    },
    { action: "Updated shipping address", time: "Yesterday", icon: "🏠" },
    { action: "Added 3 items to wishlist", time: "2 days ago", icon: "❤️" },
  ];

  return (
    <div className="space-y-6 p-6 text-gray-800">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl text-start font-bold text-gray-300">
            {greeting}, <span className="text-gray-200">{user?.name}</span>!
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            {/* {sessionMessages[timeOfDay]} */}
          </p>
        </div>
        <div className="badge badge-lg badge-success gap-2 px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Premium Member
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    stat.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {/* {stat.change} from last month */}
                </p>
              </div>
              <div className={`${stat.color} rounded-lg p-3 text-white`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start pb-4 border-b border-gray-100 last:border-0"
              >
                <div className="bg-[#1e2939] text-white rounded-full p-2 mr-4">
                  <span className="text-lg">{activity.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                </div>
                <button className="btn btn-ghost btn-sm text-[#1e2939] hover:text-[#1e2939]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <button className="btn btn-link text-[#1e2939] hover:text-[#1e2939] mt-4 px-0">
            View all activity →
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="btn btn-block justify-start bg-[#1e2939] hover:bg-[#1a2332] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Edit Profile
            </button>
            <button className="btn btn-block justify-start bg-white hover:bg-gray-50 text-[#1e2939] border border-[#1e2939]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              </svg>
              View Orders
            </button>
            <button className="btn btn-block justify-start bg-white hover:bg-gray-50 text-[#1e2939] border border-[#1e2939]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Change Password
            </button>
            <button className="btn btn-block justify-start bg-white hover:bg-gray-50 text-[#1e2939] border border-[#1e2939]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Wishlist
            </button>
          </div>

          {/* Session Tip */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800">Session Tip</h3>
            <p className="text-sm text-blue-700 mt-1">
              {timeOfDay === "morning"
                ? "Morning is the best time to place orders for same-day processing."
                : timeOfDay === "afternoon"
                ? "Your afternoon session is typically 15% more active than others."
                : "Evening orders get priority processing the next business day."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
