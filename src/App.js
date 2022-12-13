import MainCard from "./components/MainCard";
import { Stack } from "@mui/system";

function App() {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh", backgroundColor: "aliceblue" }}
        >
            <MainCard />
        </Stack>
    );
}

export default App;
