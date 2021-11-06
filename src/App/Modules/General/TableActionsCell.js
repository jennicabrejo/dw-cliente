import * as React from "react";
import TableCell from "@material-ui/core/TableCell";
import { IconType } from "./IconSelector";
import { Button, IconButton, Tooltip } from "@material-ui/core";

export default function TableActionsCell(props) {
  return (
    <TableCell key={props.column.id} align={props.column.align}>
      {props.cell.map((element, index) => {
        switch (element.type) {
          case "Button":
            return (
              <Button
                key={`B${index}`}
                {...element.propsButton}
                onClick={() => {
                  element.onClick(props.current);
                }}
              ></Button>
            );
          case "IconButton":
            return (
              <Tooltip title={element.tip || ""}>
                <IconButton
                  key={`I${element.tip}${index}`}
                  aria-label={`I${index}`}
                  {...element.propsIButton}
                  onClick={() => {
                    element.onClick({
                      current: props.current,
                      action: element.id,
                    });
                  }}
                >
                  <IconType icon={element.icon} propsIcon={element.propsIcon} />
                </IconButton>
              </Tooltip>
            );
          default:
            return <>Er</>;
        }
      })}
    </TableCell>
  );
}
