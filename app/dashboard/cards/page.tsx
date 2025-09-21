import MobileBottomBar from '@/Components/Bottombar/Bottombar';
import CreditCardsList from '@/Components/Cartliste/Cartliste';
import Navadmin from '@/Components/Navbar/Navadmin';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navadmin/>
            <CreditCardsList/>
            <MobileBottomBar/>
        </div>
    );
}

export default Page;
