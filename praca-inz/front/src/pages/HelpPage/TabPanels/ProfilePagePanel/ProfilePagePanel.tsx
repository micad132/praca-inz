import TabPanelWrapper from "../../../../components/Wrappers/TabPanelWrapper";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import AuthorizationPanel from "../AuthorizationPanel";
import CommercialsPanel from "../CommercialsPanel";
import OrdersPanel from "../OrdersPanel";
import CarsPanel from "../CarsPanel";
import PartsPanel from "../PartsPanel";
import DealersPanel from "../DealersPanel";
import TabContext from "@mui/lab/TabContext";
import * as React from "react";
import GuestPanel from "./GuestPanel";
import UserPanel from "./UserPanel";
import AdminPanel from "./AdminPanel";
import ModeratorPanel from "./ModeratorPanel";

const ProfilePagePanel = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return(
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered={true}>
                    <Tab label="Gość" value="1" />
                    <Tab label="Użytkownik" value="2" />
                    <Tab label="Administrator" value="3" />
                    <Tab label="Moderator" value="4" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <GuestPanel />
            </TabPanel>
            <TabPanel value="2">
                <UserPanel />
            </TabPanel>
            <TabPanel value="3">
                <AdminPanel />
            </TabPanel>
            <TabPanel value="4">
                <ModeratorPanel />
            </TabPanel>
        </TabContext>
    )
}

export  default  ProfilePagePanel;
