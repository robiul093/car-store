import { useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { toast } from "sonner";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";

export default function UpdatePassword() {
    const [changePassword, { isLoading, data, isError, isSuccess, error }] = useChangePasswordMutation();
    const user = useAppSelector((state) => state.auth.user);
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.currentPassword || !formData.newPassword) {
            toast.error("Please fill in all fields.");
            return;
        };

        const changePasswordInfo = {
            userId: user?.id,
            currentPassword: formData.currentPassword,
            newPassword: formData.newPassword,
        }

console.log(data, error)
        changePassword(changePasswordInfo)

        const pId = 'passwordChangeId'
        if (isLoading) toast.loading('Changing Password......', { id: pId })

        if (isSuccess) toast.success(data?.message, { id: pId });

        if (isError) toast.error(error?.data?.message, { id: pId });
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Update Password</h2>
            <p className="text-gray-600 ">User: {user?.name} ({user?.role})</p>

            <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium text-start">Current Password</label>
                    <input
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter current password"
                    // required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium text-start">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter new password"
                    // required
                    />
                </div>

                <button type="submit" className="btn w-full bg-blue-500 text-white hover:bg-blue-600">
                    Update Password
                </button>
            </form>
        </div>
    );
}
