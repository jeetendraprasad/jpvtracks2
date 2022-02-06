import React from "react";
import CsvDownload from "react-csv-downloader";
import { CsvToHtmlTable } from "react-csv-to-table";

class Reports extends React.Component {
    constructor(props) {
        super(props);
    }

    convertJsonToCsv() {
        let { Parser } = require("json2csv");

        let json2csvParser = new Parser();
        let csv = json2csvParser.parse(this.props.studentInfoData);
        
        return csv;
    }

    render() {
        return (
            <>
            <div className="col-lg-12 text-center">
                <h1><u>Data</u></h1>
            </div>
    
            <div className="col-lg-12 text-center">
                <CsvToHtmlTable
                data={this.convertJsonToCsv()}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
                />
            </div>
    
            <div>
                <CsvDownload className="col-lg-12 text-center"
                filename="myfile"
                extension=".csv"
                seperator=";"
                datas={this.props.studentInfoData}
                text="DOWNLOAD"
                />
            </div>
    
            </>
        );
    }
}

export default Reports;