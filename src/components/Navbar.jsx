import { Stack } from "@mui/material";
import { SearchBar } from "./";
const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#111', top: 0, justifyContent: "space-around" }}>
    <SearchBar />
  </Stack>
);
export default Navbar;