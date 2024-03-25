const User = require("../model/VehicleSchema");

const getTotalAccounts = async () => {
    try {
        const totalAccounts = await User.countDocuments();
        const adminAccounts = await User.countDocuments({ isAdmin: true });
        const userAccounts = totalAccounts - adminAccounts;
        return { totalAccounts, adminAccounts, userAccounts };
    } catch (error) {
        throw new Error('Error getting total accounts');
    }
};

const TotalUser = async (req, res) => {
    try {
        const { totalAccounts, adminAccounts, userAccounts } = await getTotalAccounts();
        
        console.log('Total Accounts:', totalAccounts);
        console.log('Admin Accounts:', adminAccounts);
        console.log('User Accounts:', userAccounts);
        
        res.status(200).json({ totalAccounts, adminAccounts, userAccounts }); // Respond with total accounts, admin accounts, and user accounts
    } catch (error) {
        console.error('Error fetching total accounts:', error);
        res.status(500).json({ error: 'Internal Server Error' }); // Respond with an error
    }
};
module.exports=TotalUser