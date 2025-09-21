import MobileBottomBar from '@/Components/Bottombar/Bottombar';
import Dashi from '@/Components/Dashi/Dash';
import Nav from '@/Components/Navbar/Nav';
import Navadmin from '@/Components/Navbar/Navadmin';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navadmin/>
            <Dashi/>
            <MobileBottomBar/>
        </div>
    );
}

export default Page;
