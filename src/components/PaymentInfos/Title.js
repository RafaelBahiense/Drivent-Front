import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export default function Subtitle({ text }) {
  return <TitleTypographyWrapper variant="h4">{text}</TitleTypographyWrapper>;
}

const TitleTypographyWrapper = styled(Typography)`
  margin-bottom: 20px !important;
`;
