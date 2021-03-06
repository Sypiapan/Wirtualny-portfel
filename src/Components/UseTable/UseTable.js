import React from "react";
import {Table} from "@material-ui/core";

export default function UseTable(records, headCells) {


    const TblContainer = props => (

        <Table>
            {props.children}

        </Table>
    )

    return (
        TblContainer
    )
};