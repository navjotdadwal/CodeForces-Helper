import React from "react";
import { ProSidebar, 
    SidebarHeader, 
    SidebarFooter, 
    SidebarContent,
    Menu, MenuItem
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Upcoming from './upcoming.png';
import Upsolve from './upsolve.png';
import Problems from './problems.png';
import Friends from './friends.png';
import Rsubmission from './rsubmission.png';
import Statistics from './statistics.png';
import { Link } from 'react-router-dom';

const ProSideBar = ({username} : any) => {
    return (
        <ProSidebar>
            <SidebarHeader>
              <h2 style={{ textAlign: 'center', color:'#f8f8ff'}}>
                Hey, {username}
              </h2>
            </SidebarHeader>
            <SidebarContent>
            <Menu>
                <MenuItem icon={<img src={Upcoming} />} style={{color:'#f8f8ff', fontSize:'1.2rem'}}>
                    Upcoming Contests
                    <Link to={`/contests/${username}`} />
                </MenuItem>
            </Menu>
            <Menu>
                <MenuItem icon={<img src={Upsolve} />} style={{color:'#f8f8ff', fontSize:'1.2rem'}}>
                    Upsolve
                    <Link to={`/upsolve/${username}`} />
                </MenuItem>
            </Menu>
            <Menu>
                <MenuItem icon={<img src={Problems} />} style={{color:'#f8f8ff', fontSize:'1.2rem'}}>
                    Problems
                    <Link to={`/problems/${username}`} />
                </MenuItem>
            </Menu>
            <Menu>
                <MenuItem icon={<img src={Friends} />} style={{color:'#f8f8ff', fontSize:'1.2rem'}}>
                    Friends
                    <Link to={`/friends/${username}`} />
                </MenuItem>
            </Menu>
            <Menu>
                <MenuItem icon={<img src={Rsubmission} />} style={{color:'#f8f8ff', fontSize:'1.2rem'}}>
                    Recent Submissions
                    <Link to={`/recentsubmissions/${username}`} />
                </MenuItem>
            </Menu>
            <Menu>
                <MenuItem icon={<img src={Statistics} />} style={{color:'#f8f8ff', fontSize:'1.2rem'}}>
                    Statistics
                    <Link to={`/statistics/${username}`} />
                </MenuItem>
            </Menu>
            </SidebarContent>
            <SidebarFooter>
                {/**
                 *  You can add a footer for the sidebar ex: copyright
                 */}
            </SidebarFooter>
        </ProSidebar>
    );
};
export default ProSideBar;