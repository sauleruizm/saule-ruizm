import React from 'react';
import {useIntl} from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';

import { FaHome, FaUserTie, FaEnvelope, FaGithub } from 'react-icons/fa';
import sidebarBg from '../assets/bg2.jpg';

const Aside = ({ image, collapsed, toggled, handleToggleSidebar}) => {

    const intl = useIntl();
    return(
        <ProSidebar image={image ? sidebarBg : false}
                    collapsed={collapsed}
                    toggled={toggled}
                    breakPoint='md'
                    onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform:'uppercase',
                        fontWeight:'bold',
                        fontSize:14,
                        letterSpacing:'1px',
                        overflow:'hidden',
                        textOverflow:'ellipsis',
                        whiteSpace:'nowrap'
                    }}
                >
                    {intl.formatMessage({ id: 'sidebarTitle' })}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape='circle'>
                    <MenuItem icon={<FaHome/>} >{intl.formatMessage({ id: 'dashboard' })}</MenuItem>
                    <MenuItem icon={<FaUserTie />}> {intl.formatMessage({ id: 'aboutme' })}</MenuItem>
                    <MenuItem icon={<FaGithub />}> {intl.formatMessage({ id: 'projects' })}</MenuItem>
                    <MenuItem icon={<FaEnvelope />}> {intl.formatMessage({ id: 'contactame' })}</MenuItem>
                </Menu>
                <Menu iconShape="circle">
          
        </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/sauleruizm"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;