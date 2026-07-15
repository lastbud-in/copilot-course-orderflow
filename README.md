# OrderFlow

Internal order processing module used by the Sales Ops team.

Handles order validation, discount calculation, and approval routing for
incoming orders before they're sent to fulfillment.

Original author has left the team. This README was last updated a long time
ago and may not reflect current behavior — see the source under `src/` for
the actual rules currently in effect.

## Running

```
npm start
```

Runs the sample orders in `data/sample-orders.json` through the pipeline
and prints the result for each.
