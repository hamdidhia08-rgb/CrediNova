import MobileBottomBar from '@/Components/Bottombar/Bottombar';
import Navadmin from '@/Components/Navbar/Navadmin';
import Packs from '@/Components/Pack/Pack';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navadmin/>
            <Packs/>
            <MobileBottomBar/>
        </div>
    );
}

export default Page;
