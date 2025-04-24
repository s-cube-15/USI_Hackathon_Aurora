import { Box, Typography, useTheme, Tooltip } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
  tooltipText,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Tooltip title={tooltipText} style={{fontSize: "100px"}}>
          <Box>
            {icon}
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              {title}
            </Typography>
          </Box>
        </Tooltip>
        <Box>
          <Typography
            variant="h5"
            sx={{ color: colors.greenAccent[500], fontSize: "40px" }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>

    </Box>
  );
};

export default StatBox;
