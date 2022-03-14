
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PatternOutlinedIcon from '@mui/icons-material/PatternOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Logo here</span>
        </div>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <li><PersonOutlineOutlinedIcon className="icon" /><span>Users</span></li>
                <li><Inventory2OutlinedIcon className="icon" /><span>Products</span></li>
                <li><BorderColorOutlinedIcon className="icon" /><span>Orders</span></li>
                <li><AirportShuttleOutlinedIcon className="icon" /><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><QueryStatsOutlinedIcon className="icon" /><span>Stats</span></li> 
                <li><NotificationsActiveOutlinedIcon className="icon" /><span>Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><HealthAndSafetyOutlinedIcon className="icon" /><span>System Health</span></li>
                <li><PatternOutlinedIcon className="icon" /><span>Logs </span></li>
                <li><SettingsApplicationsOutlinedIcon className="icon" /><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountBoxOutlinedIcon className="icon" /><span>Profile</span></li>
                <li><LogoutOutlinedIcon className="icon" /><span>Logout</span></li>

            </ul>

        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>

        </div>
    </div>
  )
}

export default Sidebar