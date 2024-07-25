import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import ScoreService from "@services/ScoreService";
import Loader from "@components/Layout-Components/Loader/Loader";

export default function TableEasy() {
  const [score, setScore] = useState(undefined);

  useEffect(() => {
    ScoreService.getAllEasy().then((data) => {
      setScore(data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 460 }} aria-label="simple table">
        <TableBody>
          {!score && (
            <div>
              <Loader />
            </div>
          )}
          {score &&
            score.slice(0, 5).map((row) => (
              <TableRow
                key={row.userId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell>{row.score}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
