import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AuthorizationPanel from "./TabPanels/AuthorizationPanel";
import CommercialsPanel from "./TabPanels/CommercialsPanel";
import OrdersPanel from "./TabPanels/OrdersPanel";
import CarsPanel from "./TabPanels/CarsPanel";
import PartsPanel from "./TabPanels/PartsPanel";
import ProfilePagePanel from "./TabPanels/ProfilePagePanel/ProfilePagePanel";
import DealersPanel from "./TabPanels/DealersPanel";
import ReviewsPanel from "./TabPanels/ProfilePagePanel/ReviewsPanel";
import NewsPanel from "./TabPanels/NewsPanel";

export default function HelpTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered={true}>
                        <Tab label="Autoryzacja" value="1" />
                        <Tab label="Reklamy" value="2" />
                        <Tab label="Zamowienia" value="3" />
                        <Tab label="Samochody" value="4" />
                        <Tab label="Czesci" value="5" />
                        <Tab label="Role użytkownika" value="6" />
                        <Tab label="Dealerzy" value="7" />
                        <Tab label="Komentarze" value="8" />
                        <Tab label="Posty" value="9" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <AuthorizationPanel />
                </TabPanel>
                <TabPanel value="2">
                    <CommercialsPanel />
                </TabPanel>
                <TabPanel value="3">
                    <OrdersPanel />
                </TabPanel>
                <TabPanel value="4">
                    <CarsPanel />
                </TabPanel>
                <TabPanel value="5">
                    <PartsPanel />
                </TabPanel>
                <TabPanel value="6">
                    <ProfilePagePanel />
                </TabPanel>
                <TabPanel value="7">
                    <DealersPanel />
                </TabPanel>
                <TabPanel value="8">
                    <ReviewsPanel />
                </TabPanel>
                <TabPanel value="9">
                    <NewsPanel />
                </TabPanel>
            </TabContext>
        </div>
    );
}
