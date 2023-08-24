import {
    Box,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";
import { useElementSize } from "usehooks-ts";
import family_planning from "./family_planning.json";

export const FP = ({ data }: { data: any }) => {
    const [squareRef, { height }] = useElementSize();

    const realColumns = [
        "New_user_Ref_lt_20_yrs_M",
        "New_user_Ref_lt_20_yrs_F",
        "New_user_Ref_gte_20_yrs_M",
        "New_user_Ref_gte_20_yrs_F",
        "New_user_Ref_total_crude",
        "Repeat_user_Ref_lt_20_yrs_M",
        "Repeat_user_Ref_lt_20_yrs_F",
        "Repeat_user_Ref_gte_20_yrs_M",
        "Repeat_user_Ref_gte_20_yrs_F",
        "Repeat_user_Ref_total_crude",
        "Discontinued_user_Ref_lt_20_yrs_M",
        "Discontinued_user_Ref_lt_20_yrs_F",
        "Discontinued_user_Ref_gte_20_yrs_M",
        "Discontinued_user_Ref_gte_20_yrs_F",
        "Discontinued_user_Ref_total_crude",
        "New_user_Nat",
        "Repeat_user_Nat",
        "Discontinued_user_Nat",
    ];
    return (
        <Stack w="100%" h="100%">
            <Text>Family Planning </Text>
            <Box h="100%" w="100%" ref={squareRef}>
                <Box position="relative" overflow="auto">
                    <Table variant="unstyled" size="sm">
                        <Thead>
                            <Tr>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    rowSpan={4}
                                >
                                    Family Planning
                                </Th>

                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={15}
                                    textAlign="center"
                                >
                                    Ref
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={3}
                                    textAlign="center"
                                >
                                    Nat
                                </Th>
                            </Tr>
                            <Tr>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={5}
                                    textAlign="center"
                                >
                                    New_user
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={5}
                                    textAlign="center"
                                >
                                    Repeat_user
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={5}
                                    textAlign="center"
                                >
                                    Discontinued_user
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    rowSpan={3}
                                    textAlign="center"
                                >
                                    New_user
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    rowSpan={3}
                                    textAlign="center"
                                >
                                    Repeat_user
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    rowSpan={3}
                                    textAlign="center"
                                >
                                    Discontinued_user
                                </Th>
                            </Tr>
                            <Tr>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={2}
                                    textAlign="center"
                                >
                                    &lt;20 yrs
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={2}
                                    textAlign="center"
                                >
                                    &gt;=20 yrs
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    rowSpan={2}
                                    textAlign="center"
                                >
                                    Total Crude
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={2}
                                    textAlign="center"
                                >
                                    &lt;20 yrs
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={2}
                                    textAlign="center"
                                >
                                    &gt;=20 yrs
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    rowSpan={2}
                                    textAlign="center"
                                >
                                    Total Crude
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={2}
                                    textAlign="center"
                                >
                                    &lt;20 yrs
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    colSpan={2}
                                    textAlign="center"
                                >
                                    &gt;=20 yrs
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    rowSpan={2}
                                    textAlign="center"
                                >
                                    Total Crude
                                </Th>
                            </Tr>
                            <Tr>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    M
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    F
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    M
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    F
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    M
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    F
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    M
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    F
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    M
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    F
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    M
                                </Th>
                                <Th
                                    borderColor="#DDDDDD"
                                    borderWidth="thin"
                                    borderStyle="solid"
                                    textAlign="center"
                                >
                                    F
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {family_planning.map(({ id, name }) => (
                                <Tr key={id}>
                                    <Td
                                        borderColor="#DDDDDD"
                                        borderWidth="thin"
                                        borderStyle="solid"
                                    >
                                        {name}
                                    </Td>
                                    {realColumns.map((r) => {
                                        const finalKey = `${id}_${r}`;
                                        return (
                                            <Td
                                                borderColor="#DDDDDD"
                                                borderWidth="thin"
                                                borderStyle="solid"
                                                key={finalKey}
                                                textAlign="center"
                                            >
                                                {data[finalKey]?.value}
                                                {/* {finalKey} */}
                                            </Td>
                                        );
                                    })}
                                    {/* <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            ></Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            ></Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            ></Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            ></Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            ></Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            ></Td>
                            <Td
                                borderColor="#DDDDDD"
                                borderWidth="thin"
                                borderStyle="solid"
                            >
                                &nbsp;
                            </Td> */}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </Stack>
    );
};
