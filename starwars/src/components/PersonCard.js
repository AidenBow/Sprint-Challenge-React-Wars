import React from 'react';
import { Table } from "semantic-ui-react";

export default function PersonCard({person, eye}){
    console.log(person)
    return (
        <Table.Row>
            <Table.Cell>
                {person}
            </Table.Cell>
            <Table.Cell>
                {eye}
            </Table.Cell>
        </Table.Row>

    )

}