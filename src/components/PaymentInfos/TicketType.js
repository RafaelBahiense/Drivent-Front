import Grid from "@material-ui/core/Grid";

import Subtitle from "./Subtitle";
import TicketOptions from "./TicketOptions";

export default function TicketType({
  condition,
  setCondition,
  subtitle,
  names,
  prices,
}) {
  return (
    <>
      <Subtitle text={subtitle} />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TicketOptions
            condition={condition}
            setCondition={setCondition}
            setConditionTo={true}
            name={names[0]}
            price={prices[0]}
          />
        </Grid>
        <Grid item>
          <TicketOptions
            condition={condition !== undefined ? !condition : undefined}
            setCondition={setCondition}
            setConditionTo={false}
            name={names[1]}
            price={prices[1]}
          />
        </Grid>
      </Grid>
    </>
  );
}
