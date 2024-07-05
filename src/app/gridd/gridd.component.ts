import { Component } from "@angular/core";
import { AgGridAngular } from "@ag-grid-community/angular";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { InfiniteRowModelModule } from "@ag-grid-community/infinite-row-model";
import { ServerSideRowModelModule } from "@ag-grid-enterprise/server-side-row-model";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  RowClassRules,
  GridOptions,
} from "@ag-grid-community/core";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  InfiniteRowModelModule,
  ServerSideRowModelModule,
  ExcelExportModule,
]);

@Component({
  selector: "app-grid",
  styleUrls: ["./gridd.component.css"],
  standalone:true,
  imports: [AgGridAngular],
  templateUrl: "./gridd.component.html",
})
export class GriddComponent {
  public rowData: any[] | null = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQS", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Vauxhall", model: "Corsa", price: 18460, electric: false },
    { make: "Volvo", model: "EX30", price: 33795, electric: true },
    { make: "Mercedes", model: "Maybach", price: 175720, electric: false },
    { make: "Vauxhall", model: "Astra", price: 25795, electric: false },
    { make: "Fiat", model: "Panda", price: 13724, electric: false },
    { make: "Jaguar", model: "I-PACE", price: 69425, electric: true },
  ];

  public columnDefs: ColDef[] = [
    {
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      width: 50,
    },
    { field: "make" },
    { field: "model" },
    {
      field: "price",
      filter: "agNumberColumnFilter",
      valueFormatter: this.currencyFormatter,
    },
    {
      field: "electric",
      cellRenderer: this.electricCellRenderer,
      cellEditor: "agTextCellEditor",
      editable: true,
    },
  ];

  public defaultColDef: ColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
    flex: 1,
    editable: true,
  };

  public rowClassRules: RowClassRules = {
    // apply red to Ford cars
    "rag-red": (params) => params.data.make === "Ford",
  };

  public rowSelection: "single" | "multiple" = "multiple";
  public themeClass: string = "ag-theme-quartz";
  public gridApi!: GridApi<any>;

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    rowData: this.rowData,
    rowClassRules: this.rowClassRules,
    rowSelection: this.rowSelection,
    onGridReady: this.onGridReady.bind(this),
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  // Cell Renderer function
  electricCellRenderer(params: any) {
    if (params.value) {
      return '<img src="https://banner2.cleanpng.com/20180515/tge/kisspng-computer-icons-lightning-clip-art-5afb5572ec6860.2526881215264208509683.jpg" style="width: 20px;" />';
    } else {
      return '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PzjzlnkoUsK45YWuMDEoEui_6-w8U5atEw&s" style="width: 20px;" />';
    }
  }

  // Currency Formatter function
  currencyFormatter(params: any) {
    return "$" + params.value.toLocaleString();
  }

  // Export to Excel function
  exportToExcel() {
    const params = {
      fileName: "exported-data",
    };
    this.gridApi.exportDataAsExcel(params);
  }

  // Select all rows function
  selectAllRows() {
    this.gridApi.selectAll();
  }

  onBtExport() {
    this.gridApi.exportDataAsExcel({
      onlySelected: (
        document.querySelector("#selectedOnly") as HTMLInputElement
      ).checked,
    });
  }
}
