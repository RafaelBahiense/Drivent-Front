import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export default function Subtitle({ text }) {
  return <SubtitleTypography variant="subtitle1">{text}</SubtitleTypography>;
}

const SubtitleTypography = styled(Typography)`
  margin-top: 30px !important;
  margin-bottom: 10px !important;
  color: #8e8e8e;
  font-size: 20px !important;
`;
