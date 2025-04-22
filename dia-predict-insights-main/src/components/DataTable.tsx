
import { sampleData, DiabetesDataPoint } from "@/utils/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<keyof DiabetesDataPoint | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  
  const rowsPerPage = 5;
  
  // Filter data based on search term
  const filteredData = sampleData.filter(row => 
    Object.values(row).some(val => 
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortBy) return 0;
    
    if (sortDirection === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
  
  // Get current page data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  
  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  // Handle sort
  const handleSort = (column: keyof DiabetesDataPoint) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  };
  
  return (
    <div className="w-full">
      <div className="mb-4">
        <Input
          placeholder="Search data..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="max-w-sm"
        />
      </div>
      
      <Table>
        <TableCaption>Pima Indians Diabetes Dataset (Sample)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => handleSort("id")} className="w-10 cursor-pointer">
              ID {sortBy === "id" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("pregnancies")} className="cursor-pointer">
              Pregnancies {sortBy === "pregnancies" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("glucose")} className="cursor-pointer">
              Glucose {sortBy === "glucose" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("bloodPressure")} className="cursor-pointer">
              Blood Pressure {sortBy === "bloodPressure" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("skinThickness")} className="cursor-pointer">
              Skin Thickness {sortBy === "skinThickness" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("insulin")} className="cursor-pointer">
              Insulin {sortBy === "insulin" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("bmi")} className="cursor-pointer">
              BMI {sortBy === "bmi" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("diabetesPedigree")} className="cursor-pointer">
              Pedigree {sortBy === "diabetesPedigree" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("age")} className="cursor-pointer">
              Age {sortBy === "age" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("outcome")} className="cursor-pointer">
              Outcome {sortBy === "outcome" && (sortDirection === "asc" ? "↑" : "↓")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.pregnancies}</TableCell>
              <TableCell>{row.glucose}</TableCell>
              <TableCell>{row.bloodPressure}</TableCell>
              <TableCell>{row.skinThickness}</TableCell>
              <TableCell>{row.insulin}</TableCell>
              <TableCell>{row.bmi.toFixed(1)}</TableCell>
              <TableCell>{row.diabetesPedigree.toFixed(3)}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
                <span className={row.outcome === 1 ? "text-red-600 font-medium" : "text-green-600 font-medium"}>
                  {row.outcome === 1 ? "Diabetic" : "Non-Diabetic"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, filteredData.length)} of {filteredData.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm">
            Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= Math.ceil(filteredData.length / rowsPerPage)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
