import React from "react";
import { Link } from 'react-router-dom';
import {PagesLinks, PageLink} from "../constants/PagesLinks";
import { Menu } from 'antd';

const SideBar: React.FC = () => {
    const renderedLinks = PagesLinks.map((link:PageLink) => {
        return (
            <Menu.Item key={link.label}>
                <Link key={link.label} to={link.path}>
                    {link.label}
                </Link>
            </Menu.Item>
        );
    });

    return (
        <div>
            {renderedLinks}
        </div>
    );
}

export default SideBar;