
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { UserInfo as UserInfoType } from '../types';

const UserInfo: React.FC = () => {
    const { userInfo, setUserInfo } = useAppContext();
    const navigate = useNavigate();
    const [localUserInfo, setLocalUserInfo] = useState<UserInfoType>(userInfo);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocalUserInfo(prev => ({ ...prev, [name]: name === 'age' ? (value ? parseInt(value, 10) : '') : value }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!localUserInfo.name.trim()) newErrors.name = "Name is required.";
        if (localUserInfo.age === '') newErrors.age = "Age is required.";
        else if (localUserInfo.age < 1 || localUserInfo.age > 120) newErrors.age = "Please enter a valid age.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localUserInfo.email)) newErrors.email = "Please enter a valid email address.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setUserInfo(localUserInfo);
            navigate('/quiz');
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Patient Information</h2>
            <p className="text-center text-slate-500 mb-8">Please provide your details for the analysis report.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={localUserInfo.name}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={localUserInfo.age}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-4 py-3 border ${errors.age ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="45"
                    />
                    {errors.age && <p className="mt-2 text-sm text-red-600">{errors.age}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={localUserInfo.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="john.doe@example.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div className="pt-4 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                    >
                        Next: Questionnaire &rarr;
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserInfo;
