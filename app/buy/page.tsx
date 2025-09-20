import Footer from '@/Components/Footer/Footer';
import Nav from '@/Components/Navbar/Nav';
import Pricing from '@/Components/Pricing/Pricing';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Nav/><br /><br />
            <Pricing/>
            <Footer/>
        </div>
    );
}

export default Page;
